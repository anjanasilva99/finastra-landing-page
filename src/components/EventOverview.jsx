import React from 'react';

const EventOverview = () => {
  return (
    <section id="overview" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Event Overview
        </h2>
        
        <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>
        
        {/* Overview image at the top */}
        <div className="max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/overview.png" 
            alt="Finastra Universal Banking Forum" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl font-bold text-primary">Finastra's Universal Banking Forum</p>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Join us on <span className="font-semibold text-secondary">April 9th in Cairo, Egypt</span>, for Finastra's Universal Banking Forum, <span className="italic">"Reimagine Banking: Adapt. Evolve. Thrive."</span> 
            This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
          </p>
          
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights 
            on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as:
          </p>
          
          <div className="bg-gray-50 p-5 rounded-lg mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li className="ml-2">Generative AI in banking</li>
              <li className="ml-2">Impact of market volatility</li>
              <li className="ml-2">Globalization challenges</li>
              <li className="ml-2">Supply chain resilience</li>
              <li className="ml-2">Navigating recession threats</li>
              <li className="ml-2">Shifting competitive dynamics</li>
              <li className="ml-2">Evolving regulatory landscape</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Each session will delve into the implications, challenges, and opportunities these topics present, providing you with 
            practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance 
            to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
          </p>
          
          <div className="border-l-4 border-primary pl-4 py-2 mb-8">
            <p className="text-primary font-semibold text-lg">
              Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. 
              Register today and secure your place at this must-attend event!
            </p>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#register" 
              className="bg-secondary hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-full inline-block transition duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;