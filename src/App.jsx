import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Pricing from './pages/Pricing'
import PremiumSignup from './pages/PremiumSignup'
import About from './pages/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/"> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/premiumsignup" element={<PremiumSignup />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* </Route> */}
        </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App
