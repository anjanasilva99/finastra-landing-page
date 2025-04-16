import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    mobileNumber: '',
    email: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
      
      const result = await response.json();
      console.log('API response:', result);
      
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Error submitting form');
      }
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        company: '',
        jobTitle: '',
      });
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error during form submission:', error);
      setErrorMessage('There was an error submitting your registration. Please try again later.');
    }
    
    setIsSubmitting(false);
  };

  
  return (
    <section id="register" className="py-20 bg-primary bg-opacity-90">
      {/* Your existing JSX... */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Register Now
        </h2>
        
        <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          {submitSuccess ? (
            <div className="text-center py-10">
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h3 className="text-white text-2xl font-bold mb-4">Registration Successful!</h3>
              <p className="text-white mb-6">
                Thank you for registering for the Finastra Universal Banking Forum. We will contact you with further details soon.
              </p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="bg-secondary hover:bg-opacity-90 text-white font-bold px-8 py-2 rounded-full"
              >
                Register Another Person
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Your existing form fields... */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="mb-4">
                  <label className="block text-white font-semibold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                {/* Last Name */}
                <div className="mb-4">
                  <label className="block text-white font-semibold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              {/* Email */}
              <div className="mb-4">
                <label className="block text-white font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              {/* Mobile Number */}
              <div className="mb-4">
                <label className="block text-white font-semibold mb-2" htmlFor="mobileNumber">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              
              {/* Company */}
              <div className="mb-4">
                <label className="block text-white font-semibold mb-2" htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              
              {/* Job Title */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2" htmlFor="jobTitle">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
                  placeholder="Enter your job title"
                  required
                />
              </div>
              
              {errorMessage && (
                <div className="text-red-400 text-center mb-4">
                  {errorMessage}
                </div>
              )}
              
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-secondary ${isSubmitting ? 'opacity-70' : 'hover:bg-opacity-90'} text-white font-bold px-10 py-3 rounded-full transition duration-300 transform hover:scale-105`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="text-center mt-8 text-white">
          <p>For any questions, please contact us at <a href="mailto:events@finastra.com" className="text-secondary underline">events@finastra.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;