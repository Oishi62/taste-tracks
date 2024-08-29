import React, { useState } from 'react';
import { db,auth } from '../firebase'; // Ensure you have your Firebase config file imported correctly
import { doc, updateDoc, arrayUnion, arrayRemove,getDoc } from 'firebase/firestore';



const ReviewCard = ({docId, reviewIndex,name, location, review, timestamp,initialLikes,images }) => {
  
  const [likes, setLikes] = useState(initialLikes); // Initialize likes state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  // Format the date to display only the date part
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  // const handleLike = async () => {
  //   try {
  //     const reviewRef = doc(db, 'customerreviews', docId); // Reference to the specific review document
  //     const newLikesCount = likes + 1;

  //     // Update the likes count in Firestore
  //     await updateDoc(reviewRef, {
  //       [`${reviewIndex}.likes`]: newLikesCount,
  //     });

  //     // Update the likes count in the state
  //     setLikes(newLikesCount);
  //   } catch (error) {
  //     console.error('Error updating likes: ', error);
  //   }
  // };

  const handleLike = async (reviewId) => {
    try {
      const reviewsDocRef = doc(db, 'customerreviews', docId);
  
      // Get the current user's ID (assuming you have this available)
      const currentUserId = auth.currentUser.uid;
  
      // First, get the current review data
      const reviewDocSnap = await getDoc(reviewsDocRef);
      const reviews = reviewDocSnap.data().reviews;
  
      // Find the index of the review to update
      const reviewIndex = reviews.findIndex(review => review.id === reviewId);
  
      if (reviewIndex === -1) {
        console.error('Review not found');
        return;
      }
  
      const review = reviews[reviewIndex];
  
      // Check if the user has already liked this review
      const userLikedIndex = review.likedBy ? review.likedBy.indexOf(currentUserId) : -1;
  
      if (userLikedIndex === -1) {
        // User hasn't liked this review yet, so add their like
        await updateDoc(reviewsDocRef, {
          [`reviews.${reviewIndex}.likes`]: (review.likes || 0) + 1,
          [`reviews.${reviewIndex}.likedBy`]: arrayUnion(currentUserId)
        });
  
        // Update local state
        setLikes(prevLikes => prevLikes + 1);
      } else {
        // User has already liked this review, so remove their like
        await updateDoc(reviewsDocRef, {
          [`reviews.${reviewIndex}.likes`]: Math.max((review.likes || 0) - 1, 0),
          [`reviews.${reviewIndex}.likedBy`]: arrayRemove(currentUserId)
        });
  
        // Update local state
        setLikes(prevLikes => Math.max(prevLikes - 1, 0));
      }
    } catch (error) {
      console.error('Error updating likes: ', error);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex flex-col justify-center pt-6 sm:pt-12 z-10">
      <div className="bg-gray-100 w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl">
        
        {/* Top section with background color */}
        <div className="bg-[url('post_heading.jpeg')] bg-cover bg-no-repeat">
          <div className="p-4">
            <div className="pb-3 text-xs font-medium flex justify-between text-blue-900">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {formattedDate}
              </span>
              <span>
              {/* <button onClick={handleLike} className="hover:text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button> */}
                {/* <span>{likes}</span>  */}
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-b border-stone-200"></div>

        {/* Bottom section */}
        <div className="p-6">
          <h3 className="mb-4 font-semibold text-2xl">
            {/* Name as a hyperlink */}
            <a href={location} className="transition-all text-blue-900 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h3>
          <p className="text-sky-800 text-sm mb-0">
            {review}
          </p>
        </div>
        {images && images.length > 0 && (
          <div className="relative">
            <img src={images[currentImageIndex]} alt={`Review image ${currentImageIndex + 1}`} className="w-full h-48 object-cover"/>
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r">
                  &lt;
                </button>
                <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l">
                  &gt;
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
