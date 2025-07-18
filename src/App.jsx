import React, { useEffect } from 'react'
import { LandingPage } from './pages/LandingPage'

import AOS from "aos";
import "aos/dist/aos.css";
import { ProtectedRouter } from './Router/ProtectedRouter';

function App() {
useEffect(() => {
 AOS.init({
  duration: 600,
  delay: 200,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});
}, []);

  return (
    <React.Fragment>
        <ProtectedRouter />
    </React.Fragment>
  )
}

export default App
