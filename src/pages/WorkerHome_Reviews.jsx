import React from 'react'
import WorkerNavbar from '../components/WorkerNavbar'
import PostReview from '../components/PostReview'
import RightLayout from '../components/RightLayout'
import WorkerReviewCard from '../components/WorkerReviewCard'
import WorkerLeftLayout from '../components/WorkerLeftLayout'

const WorkerHome_Reviews = () => {
  return (
    <>
    <WorkerNavbar/>
    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 h-screen">
      <div className="hidden md:block md:col-start-1 md:col-end-3">
        <WorkerLeftLayout/>
      </div>
      <div className="col-span-1 md:col-end-5 md:col-span-2 overflow-y-auto h-full no-scrollbar">
        <PostReview/>
        <WorkerReviewCard/>
      </div>
      <div className="hidden md:block md:col-end-7 md:col-span-2">
        <RightLayout/>
      </div>
    </div>
  </>
  )
}

export default WorkerHome_Reviews