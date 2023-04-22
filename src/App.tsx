import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Tech from './components/Technologies';

let App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Portfolio/>
      {/* <Contact/> */}
      <Tech/>
      {/* <Footer/> */}
  </>
  );
}

export default App;