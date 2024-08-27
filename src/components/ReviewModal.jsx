import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { doc, setDoc} from 'firebase/firestore';
import { updateDoc, arrayUnion } from 'firebase/firestore';

const ReviewModal = ({ isVisible, onClose }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [location,setLocation] = useState('');
    const [likes,setLikes] = useState(0);
    // const [images, setImages] = useState([]);

    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let userId;
        try {
            userId = auth.currentUser.uid;
            console.log(userId) // Get the currently authenticated user's ID
            const userDocRef = doc(db, 'customerreviews', userId);
    
            // Add the new review data to an array called 'reviews' using arrayUnion
            await updateDoc(userDocRef, {
                reviews: arrayUnion({
                    name,
                    review,
                    location,
                    likes,
                    timestamp: new Date() // Optional: Add a timestamp for when the review was submitted
                })
            });
    
            console.log("Review submitted successfully");
        } catch (error) {
            // If the document doesn't exist yet, create it with the first review
            if (error.code === 'not-found') {
                await setDoc(doc(db, 'customerreviews', userId), {
                    reviews: [{
                        name,
                        review,
                        location,
                        likes,
                        timestamp: new Date()
                    }]
                });
            } else {
                console.error("Error submitting review: ", error);
            }
        }
    
        onClose();
    };

    const handleImageUpload = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
            id="wrapper"
            onClick={handleClose}
        >
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={onClose}>X</button>
                <div className="bg-white p-4 rounded">
                    <h2 className="text-xl mb-4">Write a Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Restaurant Name
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
                                Review
                            </label>
                            <textarea
                                id="review"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="4"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                                Location
                            </label>
                            <input
                                id="location"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="4"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                                Upload Images
                            </label>
                            <input
                                type="file"
                                id="images"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                multiple
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
