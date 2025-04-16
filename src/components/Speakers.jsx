import React, { useState } from 'react';
import SpeakerModal from './SpeakerModal';

const Speakers = () => {

  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to open modal with speaker details
  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setShowModal(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedSpeaker(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  const speakers = [
    {
      name: 'Mr. Mohamed Elazzazy',
      title: 'Head of IT Governance and Change Management A1-Baraka Bank Egypt',
      image: 'Speakers/01.png',
      bio: "Mr. Marwan Abouzeid Principal Solutions Consultant & Customer Value Lead, MEA & APAC Finastra Bio: Marwan Abouzeid is a seasoned professional with over 22 years of experience in the Fintech industry. Currently serving as the Principal Solutions Consultant & Customer Value Lead for MEA and APAC at Finastra, Marwan is known for his strategic consulting, customer relationship management, and business development expertise. His role involves ensuring Finastra adopts the right Go-to-Market strategy for its core banking platform, blending direct strategic customer engagements for both conventional and Islamic banks with complementary marketing and business development activities. Marwan's direct KPIs include C-level engagements such as ideation sessions, strategy formulation, and business case construction. Marwan's career background spans various roles in development, product management, professional services, and presales. He has proven ability in technology consultative selling for financial institutions seeking transformation and innovation. His extensive experience and dedication have made him a key player in the industry, contributing to significant projects and initiatives that drive growth and innovation. Prior to his journey at Finastra Marwan has held multiple roles within the financial industry working for both banking solution providers and financial institutions. Marwan holds an MBA from Manchester Business School and a bachelor’s degree in computer science from The American University in Cairo."
    },
    {
      name: 'Mr. Shehab Moustafa',
      title: 'Country Center of Excellence Director Money Fellows',
      image: 'Speakers/02.png'
    },
    {
      name: 'Mr. Marwan Abouzeid',
      title: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC Finastra',
      image: 'Speakers/03.png'
    },
    {
      name: 'Mr. Karim El Mourabet',
      title: 'Solution Consulting Director - MEA Finastra',
      image: '/Speakers/04.png',
      bio: "Bio: Karim El Mourabet leads the Retail Banking Solution Consulting team at Finastra, covering Middle East & Africa. He has over 12 years’ experience in retail banking software implementation and consulting and working with Digital Banks. He previously led the Innovation services for Finastra Global Services team and worked on Next Gen implementation services, including core banking migrations. Prior to re-joining Finastra, he was global head of solution consulting at Fidor, working on designing and launching digital banks globally. He holds a Masters of Science in Project Management and a Bachelor’s in Business Administration from the American University of Beirut."
    },
    {
      name: 'Ms. Siobhan Byron',
      title: 'Executive Vice President, Universal Banking Finastra',
      image: '/Speakers/05.png',
      bio: "Bio: Siobhan oversees Universal Banking, including market leading core banking and digital solutions globally. She has more than 25 years of experience in IT and channel management, as well as leading and growing prominent technology companies across financial services, insurance, manufacturing, and public sectors. Siobhan is a strong advocate for diversity and inclusion. She is the Executive Sponsor for the company’s LGBTQ+ and Friends initiatives and supports Women@Finastra. Based in Canada, Siobhan enjoys spending down time with her family and friends, travelling, reading, and watching her son play hockey."
    },
    {
      name: 'Mr. Narendra Mistry',
      title: 'Chief Product and Technology Officer Universal Banking Finastra',
      image: '/Speakers/06.png',
      bio: "Bio: Narendra leads the global product and technology organization for Universal Banking as the Chief Product and Technology Officer (CPTO). Narendra has been in the financial software industry for more than 25 years and his career with Finastra spans more than 13 years in various leadership roles, including running product for International Retail. He has experience building new SaaS businesses in Digital Essence cloud banking, whilst ensuring a robust product and go-to-market strategy. Narendra was instrumental in the very successful Equation N-2 program and the Midas Service Pack program that have made the Midas and Equation business extremely stable over the years. During his time at Finastra, Narendra has built a strong reputation of being a trusted leader who has been central to many successes on our journey. Narendra is based in London."
    },
    {
      name: 'Mr. Ahmed Hamdy Bahey El Din',
      title: 'Head of Information Technology Incolease',
      image: '/Speakers/07.png',
      bio: "Bio: Ahmed Hamdy is a results-driven IT professional with extensive experience leading IT departments and delivering innovative solutions. As the IT Head at Incolease, he manages all IT operations, ensuring strategic alignment, process optimization, and efficient resource management. With over 18 years of experience, his career highlights include managing complex projects at EFG-HERMES, Corplease, and Atos, focusing on business process automation and efficiency improvements. Ahmed's expertise includes ERP systems, leasing, factoring, and securitization, and he holds certifications in CBAP® and ITIL® Foundation."
    },
    {
      name: 'Mr. Emad Shawky Habib Hanna',
      title: 'Chief Data and Analytics Officer Banque Misr',
      image: '/Speakers/13.png'
    },
    {
      name: 'Ms. Heba Yehia',
      title: 'Head of Digital Products Arab African International Bank',
      image: '/Speakers/14.png'
    },
    {
      name: 'Mr. Hamid Nirouzad',
      title: 'Managing Director - Africa Finastra Universal',
      image: '/Speakers/08.png',
      bio: "Bio: Hamid Nirouzad is a seasoned professional in the fintech industry. He began his career at National Westminster Bank in the UK before joining Midas-Kapiti in 1994. Throughout his tenure at Finastra, Hamid has played a pivotal role in various business aspects across Europe and the MEA regions. With a robust background in both retail and corporate banking, he possesses a comprehensive understanding of the banking sector."
    },
    {
      name: 'Mr. Rudy Kawmi',
      title: 'Managing Director - Middle East, Africa & Asia-Pacific Finastra Universal Banking',
      image: '/Speakers/09.png',
      bio: "Bio: Rudy Kawmi oversees the Retail Banking business across the Middle East, Africa, and Asia-Pacific regions at Finastra. With a career dedicated to financial technology, Rudy has collaborated with banks on numerous digital transformation initiatives. As a proponent of innovative business models that promote financial inclusion, he is passionate about establishing fintech partnerships across these regions to drive innovation and expand access to next-generation banking systems."
    },
    {
      name: 'Mr. Matthew Hughes',
      title: 'Head of FS&I, International Markets Atos',
      image: 'Speakers/10.png',
      bio: 'Bio: Matthew Hughes is a seasoned professional with over 25 years of experience in the financial services and insurance sectors. Matthew worked for 17 years at Royal Bank of Scotland in various leadership roles, including Country Head of Operations in China, Head of Retail and Commercial Banking in China, Head of Core Banking Operations for England and Wales, and Head of Consumer Finance for Spain and Portugal. At Atos, he serves as Global Client Executive Partner and Head of the Financial Services & Insurance Sector for International Markets (covering Middle East, APAC, Latin America, Switzerland, Iberia and South East Europe). In this role, Matthew leads strategic client engagement and initiatives around Platform and/or Mainframe Modernisation and Migrations, Cloud, Cybersecurity and the full range of end-to-end managed services that Atos offers, as well as the management of key client relationships, leveraging his extensive industry expertise to drive business growth and innovation. In 2022, Atos in Asia Pacific announced Matthew appointment as the Global Client Executive Partner for our largest customer in APAC (Global Bank), underscoring his pivotal role in strengthening the partnership between Atos and the bank. Matthew is based in Singapore and is bilingual in Spanish.'
    },
    {
      name: "Mr. Daragh O'Byrne",
      title: 'Senior Director, Marketing, Universal Banking, Finastra',
      image: 'Speakers/15.png',
      bio: "Bio: Daragh leads the Finastra Universal Banking marketing team. For more than 25 years he has worked in the Financial Services application software market, focusing on ensuring that software provides tangible business benefits for customers, and that those business benefits are explained in a clear, concise and compelling way via an integrated set of creative marketing activities that generate results. He combines his background in technology with a decade helping banks all over the world translate their vision into implemented reality to position sophisticated banking platforms in terms of the business problems they solve and the opportunities they enable. Daragh focuses on turning strategy into action and turning action into results in a co-ordinated way. A passionate believer in technology's power to transform and enrich, he believes in explaining its benefits in easy to an understand, educational and entertaining way."
    },
    {
      name: 'Dr. Ismail Ali',
      title: 'Co-Founder and CEO of CARITech',
      image: 'Speakers/16.png',
      bio: "Bio: Dr. Ismail Ali is the Co-Founder and CEO of CARITech, a digital banking solutions provider supporting financial institutions across the Middle East and Africa. With over 25 years of experience in financial technology, Dr. Ali has led core banking modernization programs for both Islamic and conventional banks—helping them overcome legacy challenges and respond to dynamic market demands. He has held senior positions with leading global technology firms and now leads CARITechs mission to eliminate technology barriers through structured, standards-driven delivery. CARITech operates in the Americas and is expanding rapidly across MEA, delivering high-quality transformation services using CMMI Level 3-compliant methodologies. Dr. Ali holds a Doctorate in Business Management, an MBA, and is an alumnus of Harvard Business School. He regularly collaborates with banks, regulators, and fintech leaders to enable inclusive, future-ready financial ecosystems."
    },
    {
      name: 'Ms. Riham Muhammad',
      title: 'Corporate CEX Senior Analyst FABMISR',
      image: 'Speakers/17.png'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Featured Speakers
        </h2>

        <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-md max-w-xs transition-transform hover:shadow-lg ${speaker.bio ? 'cursor-pointer hover:-translate-y-1' : ''}`}
              onClick={() => speaker.bio && openModal(speaker)}
            >
              <div className="h-64 bg-gray-300">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-1">{speaker.name}</h3>
                <p className="text-secondary italic">{speaker.title}</p>
                {speaker.bio && (
                  <p className="text-xs text-blue-600 mt-2">Click for bio</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <SpeakerModal
          speaker={selectedSpeaker}
          isOpen={showModal}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Speakers;