import React from 'react';
import Header from './components/Header';
import Problem from './components/Problem';
import Features from './components/Features';
import Personas from './components/Personas';
import Journey from './components/Journey';
import Footer from './components/Footer';
import Objectives from './components/Objectives';

function App() {
  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <Header />
      <Problem />
      <Personas />
      <Objectives/>
      <Features />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;