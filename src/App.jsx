import React, { useEffect } from 'react'
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true, // faqat bir marta animatsiya
      duration: 1000,
    });
  }, []);

  
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default App