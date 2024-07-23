import React from 'react'
import Navbar from '../components/Navbar'
import PostReview from '../components/PostReview'
import LeftLayout from '../components/LeftLayout'
import RightLayout from '../components/RightLayout'
import WorkerReviewCard from '../components/WorkerReviewCard'
const WorkerHome_Reviews = () => {
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-6 gap-2 h-screen">
    <div class="col-start-1 col-end-3 ..."><LeftLayout/></div>
    <div class="col-end-5 col-span-2 overflow-y-auto h-full no-scrollbar">
      <PostReview/>
      <WorkerReviewCard/>
      <WorkerReviewCard/>
      <WorkerReviewCard/>
      <WorkerReviewCard/>
      
      </div>
    <div class="col-end-7 col-span-2 ..."><RightLayout/></div>
    </div>
    
    </>
  )
}

export default WorkerHome_Reviews