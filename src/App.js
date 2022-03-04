
import React from 'react';
import About from './Components/About';
import Feature from './Components/Feature';
import Header from './Components/Header';
import aboutimage from '../src/Components/images/Frame 19.png';
import aboutimage1 from '../src/Components/images/download.png';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Feature></Feature>
      <About image={aboutimage} title='Comes with All You Need For Daily Life.' button='Go The App'></About>
      <Presentation></Presentation>
      <About image={aboutimage1} title='Download And Get The APP Now.' button='Download'></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
