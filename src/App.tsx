import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Tech from './components/Technologies';
import Contact from './components/Contact';

let App = () => {
  const [view, setView] = useState('about');

  const handleView = (value: string) => {
    setView(value);
    console.log(value)
    // switchView()
  }

  const switchView = () => {
    console.log('hello switch')
    switch (view) {
      case 'about':
        return (<About/>)
      case 'portfolio':
        return (<Portfolio/>)
      case 'skills':
        return (<Tech/>)
      case 'contact':
        return (<Contact/>)
    }
  }

  return (
    <>
      <Header view={view} handleView={handleView} />
      {switchView()}
      {/* <About />
      <Portfolio />
      <Contact/>
      <Tech /> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;