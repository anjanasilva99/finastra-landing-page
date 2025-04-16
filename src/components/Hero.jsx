import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary pt-32 pb-20 px-4 bg-opacity-90">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Reimagine Banking with Finastra
          </h1>
          <p className="text-xl text-white mb-8">
            Join us for a transformative event exploring the future of banking technology and innovation
          </p>
          <a 
            href="#register" 
            className="bg-secondary hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-full inline-block"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;