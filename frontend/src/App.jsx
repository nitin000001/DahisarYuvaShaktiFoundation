import React, { useState } from 'react'; 
import Navbar from './Components/Navbar';
import SpinningLoader from './Components/SpinningLoader';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import ContactUS from './Pages/ContactUS';
import Dontate from './Pages/Dontate';
import Footer from './Components/Footer';
import OurWork from './Pages/OurWork';

const App = () => {
  const [spinningLoading, setspinningLoading] = useState(false); 

  return (
    <div>
      {spinningLoading ? (
        <SpinningLoader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<ContactUS />} />
            <Route path='/OurWork' element={<OurWork />} />
            <Route path='/donate' element={<Dontate />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
