import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.mobileNumber || !data.company || !data.jobTitle) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Registration data with timestamp
    const registration = {
      ...data,
      id: Date.now(),
      registrationDate: new Date().toISOString()
    };
    
    let registrations = [];
    const dataFilePath = path.join(process.cwd(), 'data', 'registrations.json');
    
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    if (fs.existsSync(dataFilePath)) {
      const fileContents = fs.readFileSync(dataFilePath, 'utf8');
      registrations = JSON.parse(fileContents);
    }
    
    registrations.push(registration);
    fs.writeFileSync(dataFilePath, JSON.stringify(registrations, null, 2), 'utf8');
    
    res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error processing registration' });
  }
}