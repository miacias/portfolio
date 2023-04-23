import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Tech from './components/Technologies';
import Contact from './components/Contact';

let App = () => {
  const offWhite: string = '#f6f4e6';
  const yellow: string = '#fddb3a';

  // sets default view to About Me component
  const [view, setView] = useState('about');
  const [color, setColor] = useState({
    active: yellow,
    inactive: offWhite
  });

  // sets the view based on the passed in value from the clicked Header component
  const handleView = (value: string) => {
    setView(value);
  }

  // checks current useState of view and renders on page
  const switchView = () => {
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
      <Header view={view} handleView={handleView} color={color}/>
      {switchView()}
      {/* <Footer/> */}
    </>
  );
}

export default App;