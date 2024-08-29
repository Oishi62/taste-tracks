import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Pricing from './pages/Pricing'
import PremiumSignup from './pages/PremiumSignup'
import About from './pages/About'
import Home_Reviews from './pages/Home_Reviews'
import MyProfile from './pages/MyProfile'
import WorkerSignUp from './pages/WorkerSignUp'
import WorkerHome_Reviews from './pages/WorkerHome_Reviews'
import OwnerHomePage from './pages/OwnerHomePage'
import { auth } from './firebase'
import WorkerLogin from './pages/WorkerLogin'
import OwnerLogin from './pages/OwnerLogin'
import WorkerMyProfile from './pages/WorkerMyProfile'
import WorkerAbout from './pages/WorkerAbout'
function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState();
  useEffect(() =>{
    auth.onAuthStateChanged(user=>{
      setUser(user);
    });
  })
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/"> */}
          {/* <Route path="/" 
          element={user ? <Navigate to="/home_reviews"/> :<Home/>} 
          /> */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/premiumsignup" element={<PremiumSignup />} />
          <Route path="/home_reviews" element={<Home_Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/ownerhomepage" element={<OwnerHomePage />} />
          <Route path="/workerhome_reviews" element={<WorkerHome_Reviews />} />
          <Route path="/workersignup" element={<WorkerSignUp />} />
          <Route path="/workerlogin" element={<WorkerLogin />} />
          <Route path="/ownerlogin" element={<OwnerLogin />} />
          <Route path="/workermyprofile" element={<WorkerMyProfile />} />
          <Route path="/workerabout" element={<WorkerAbout />} />

          {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* </Route> */}
        </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App
