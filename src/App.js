import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import EventOverview from './components/EventOverview';
import ConferenceBenefits from './components/ConferenceBenefits';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <EventDetails />
      <EventOverview />
      <ConferenceBenefits />
      <Agenda />
      <Speakers />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
