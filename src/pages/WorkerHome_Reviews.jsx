import React from 'react'
import Navbar from '../components/Navbar'
import PostReview from '../components/PostReview'
import LeftLayout from '../components/LeftLayout'
import RightLayout from '../components/RightLayout'
const WorkerHome_Reviews = () => {
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-6 gap-2">
    <div class="col-start-1 col-end-3 ..."><LeftLayout/></div>
    <div class="col-end-5 col-span-2 ..."><PostReview/></div>
    <div class="col-end-7 col-span-2 ..."><RightLayout/></div>
    </div>
    
    </>
  )
}

export default WorkerHome_Reviews