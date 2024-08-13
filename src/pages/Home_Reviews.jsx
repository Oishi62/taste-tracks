// import React from 'react'
// import Navbar from '../components/Navbar'
// import PostReview from '../components/PostReview'
// import LeftLayout from '../components/LeftLayout'
// import RightLayout from '../components/RightLayout'
// import ReviewCard from '../components/ReviewCard'
// const Home_Reviews = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className="grid grid-cols-6 gap-2 h-screen">
//     <div class="col-start-1 col-end-3 ..."><LeftLayout/></div>
//     <div class="col-end-5 col-span-2 overflow-y-auto h-full no-scrollbar">
//       <PostReview/>
//       <ReviewCard/>


//       </div>
//     <div class="col-end-7 col-span-2 ..."><RightLayout/></div>
//     </div>
    
//     </>
//   )
// }

// export default Home_Reviews


import React from 'react'
import Navbar from '../components/Navbar'
import PostReview from '../components/PostReview'
import LeftLayout from '../components/LeftLayout'
import RightLayout from '../components/RightLayout'
import ReviewCard from '../components/ReviewCard'

const Home_Reviews = () => {
  return (
    <>
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 h-screen">
        <div className="hidden md:block md:col-start-1 md:col-end-3">
          <LeftLayout/>
        </div>
        <div className="col-span-1 md:col-end-5 md:col-span-2 overflow-y-auto h-full no-scrollbar">
          <PostReview/>
          <ReviewCard/>
        </div>
        <div className="hidden md:block md:col-end-7 md:col-span-2">
          <RightLayout/>
        </div>
      </div>
    </>
  )
}

export default Home_Reviews