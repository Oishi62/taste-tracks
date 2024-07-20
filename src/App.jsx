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
import Home_Reviews from './pages/Home_Reviews'
import MyProfile from './pages/MyProfile'
import WorkerSignUp from './pages/WorkerSignUp'
import WorkerHome_Reviews from './pages/WorkerHome_Reviews'
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
          <Route path="/home_reviews" element={<Home_Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/workerhome_reviews" element={<WorkerHome_Reviews />} />
          <Route path="/workersignup" element={<WorkerSignUp />} />

          {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* </Route> */}
        </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App
