# Finastra Universal Banking Forum Website

This is a React-based landing page for the Finastra Universal Banking Forum event in Egypt 2025. The site serves as a promotional and registration platform for the event, providing information about speakers, agenda, and allowing attendees to register.

## Features

- Responsive design for all device types
- Event details and overview section
- Speaker profiles with modal popups for detailed bios
- Conference agenda with timeline
- Key benefits of attending the conference
- Registration form with data storage functionality
- API endpoint for storing registration data

## Tech Stack

- React (v18 or higher)
- Tailwind CSS for styling
- JSON Server for data storage (development)
- Vercel for hosting and serverless functions (production)

## Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/anjanasilva99/finastra-landing-page.git
cd finastra-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Create required data files:
```bash
mkdir -p data
echo [] > data/registrations.json
```

4. Start the development server:
```bash
npm start
```

5. For the JSON server (development only):
```bash
json-server --watch db.json --port 3001
```

The application will open in your default browser at `http://localhost:3000`.