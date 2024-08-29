import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Import your firebase config
import WorkerNavbar from '../components/WorkerNavbar'
import PostReviewWorker from '../components/PostReviewWorker'
import RightLayout from '../components/RightLayout'
import WorkerReviewCard from '../components/WorkerReviewCard'
import WorkerLeftLayout from '../components/WorkerLeftLayout'

const WorkerHome_Reviews = () => {

  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'workerreviews'));
        const allReviews = [];

        querySnapshot.forEach((doc) => {
          const userReviews = doc.data().reviews;
          if (userReviews && userReviews.length > 0) {
            allReviews.push(...userReviews.map(review => ({...review, docId: doc.id})));
          }
        });

        setReviews(allReviews);
      } catch (error) {
        console.error('Error fetching reviews: ', error);
      }
    };

    fetchReviews();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredReviews = reviews.filter(review => 
    review.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <WorkerNavbar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 h-screen">
        <div className="hidden md:block md:col-start-1 md:col-end-3">
          <WorkerLeftLayout />
        </div>
        <div className="col-span-1 md:col-end-5 md:col-span-2 overflow-y-auto h-full no-scrollbar">
          <PostReviewWorker />
          {filteredReviews.map((review, index) => (
            <WorkerReviewCard
              key={index}
              name={review.name}
              location={review.location}
              review={review.review}
              timestamp={review.timestamp?.toDate().toLocaleString()}
              images={review.images || []}
            />
          ))}
        </div>
        <div className="hidden md:block md:col-end-7 md:col-span-2">
          <RightLayout />
        </div>
      </div>
    </>
  );
}

export default WorkerHome_Reviews