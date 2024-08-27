import React,{useState} from 'react'
import ReviewModalWorker from './ReviewModalWorker'

const PostReviewWorker = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <>

<div className="max-w-lg mx-auto mt-4">
    <div className="bg-gray-100 shadow-lg rounded-lg p-2 flex items-center space-x-3">
        <div className="p-2 bg-white rounded-full border-2 border-green-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 15h16" />
            </svg>
        </div>
        <button className="text-gray-600 text-sm flex-1" onClick={() => setShowModal(true)}>Write fearlessly..</button>
    </div>
</div>
<ReviewModalWorker isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default PostReviewWorker