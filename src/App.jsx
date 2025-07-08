import React, { useEffect } from 'react'
import { LandingPage } from './pages/LandingPage'

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
 AOS.init({
  duration: 800,
  delay: 200,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});
}, []);

  return (
    <React.Fragment>
        <LandingPage />
    </React.Fragment>
  )
}

export default App
