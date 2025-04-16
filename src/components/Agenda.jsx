import React from 'react';

const Agenda = () => {
  const agendaItems = [
    {
      time: '09:30 AM',
      title: 'Registration & Welcome Coffee',
      description: 'Arrival and check-in of attendees'
    },
    {
      time: '10:00 AM',
      title: 'Opening Remarks',
      description: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking'
    },
    {
      time: '10:10 AM',
      title: 'Keynote session: Digital Transformation in a Gen AI World',
      description: 'Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking'
    },
    {
      time: '10:30 AM',
      title: 'Decoding the Future - Transformation: The Opportunity & Time is Now',
      description: "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra"
    },
    {
      time: '11:00 AM',
      title: 'Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World',
      description: 'Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking; Ahmad Hamdy, Head of Information Technology, Incolease; Ms. Riham Muhammad, Corporate CEX Senior Analyst, FABMISR'
    },
    {
      time: '11:30 AM',
      title: 'Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead',
      description: 'Karim El Mourabet, Solution Consulting Director - MEA, Finastra; Heba Yehia, Head of Digital Products, Arab African International Bank; Ismail Ali, Co-Founder and CEO of CARITech; Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt'
    },
    {
      time: '12:00 PM',
      title: 'Coffee Break & Networking',
      description: 'Refreshments and networking opportunity'
    },
    {
      time: '12:30 PM',
      title: 'Panel Discussion: Cost to Serve: Deliver Customer Delight',
      description: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking; Shehab Moustafa, Country Center of Excellence Director, Money Fellows; Matthew Hughes, Head of FS&I, International Markets, Atos; Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.'
    },
    {
      time: '01:00 PM',
      title: 'The Essential Elements: What do you need to be "all things to all people"?',
      description: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking'
    },
    {
      time: '01:30 PM',
      title: 'Making the case for change: The Question is How',
      description: 'Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking'
    },
    {
      time: '01:50 PM',
      title: 'Closing Remarks',
      description: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking'
    },
    {
      time: '02:00 PM',
      title: 'Lunch',
      description: 'Networking lunch and continued discussions'
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Event Agenda
        </h2>
        
        <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto">
          {agendaItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-8 group">
              {/* Fixed width time column with text-right alignment */}
              <div className="md:w-32 font-bold text-secondary mb-2 md:mb-0 md:text-right">
                {item.time}
              </div>
              
              <div className="md:ml-6 md:border-l-4 md:border-secondary md:pl-6 pb-8 relative flex-1">
                {/* Time dot */}
                <div className="hidden md:block absolute -left-2.5 -top-0.5 w-5 h-5 rounded-full bg-secondary"></div>
                
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;