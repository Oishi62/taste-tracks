import React from 'react'
import Navbar from '../components/Navbar'
import PostReview from '../components/PostReview'
import LeftLayout from '../components/LeftLayout'
const Home_Reviews = () => {
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-6 gap-2">
    <div class="col-start-1 col-end-3 ..."><LeftLayout/></div>
    <div class="col-end-5 col-span-2 ..."><PostReview/></div>
    
    </div>
    
    </>
  )
}

export default Home_Reviews