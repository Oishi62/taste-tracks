// import React,{useEffect,useState} from 'react';
// import { auth,db } from '../firebase';
// import { doc,getDoc } from 'firebase/firestore';


// const LeftLayout = () => {

//   const [userDetails,setUserDetails]=useState(null);
//   const fetchUserData=async()=>{
//     auth.onAuthStateChanged(async(user)=>{
//       console.log(user);
//       setUserDetails(user);
//       const docRef=doc(db,"Users",user.uid);
//       const docSnap=await getDoc(docRef);
//       if(docSnap.exists()){
//         setUserDetails(docSnap.data());
//         console.log(docSnap.data());
        
//       }else{
//         console.log("User is not logged in");
//       }
//     });
//   }
//   useEffect(()=>{
//     fetchUserData();
//   },[]);

  


//   return (
//     <>
//       {/* Left Top Component */}
//       <div className="flex items-center mt-5 w-full justify-center">
//         <div className="w-64"> {/* Fixed width of 16rem */}
//           <div className="bg-gray-100 shadow-xl rounded-lg py-3">
//             <div className="photo-wrapper p-2">
//               <img
//                 className="w-20 h-20 rounded-full mx-auto"
//                 src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
//                 alt="John Doe"
//               />

//             </div>

//             <div className="p-2">

//             {userDetails ? (

//               <>
//               <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{userDetails.Username}</h3>
//               <h5 className="text-center text-lg text-gray-900 font-medium leading-8">{userDetails.email}</h5>
//               </>

//             ):(
//               <p>Loading....</p>
//             )}
          

              
            
//             </div>
//           </div>
//         </div>
//       </div>
//     {/* Lower Left Component */}

//     <div className="flex items-center mt-5 w-full justify-center">
//         <div className="w-64"> {/* Fixed width of 16rem */}
//           <div className="bg-gray-100 shadow-xl rounded-lg py-3">
//             <div className="p-2">
//               <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Discover Restaurants</h3>
              
//               <div className="mt-4">
//                 {/* Table */}
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2">
//                     <img
//                       className="w-8 h-8"
//                       src="https://via.placeholder.com/32"
//                       alt="Day to Day Office"
//                     />
//                     <span className="text-gray-900">Day to Day Office</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       className="w-8 h-8"
//                       src="https://via.placeholder.com/32"
//                       alt="Job/Referrals"
//                     />
//                     <span className="text-gray-900">Job/Referrals</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       className="w-8 h-8"
//                       src="https://via.placeholder.com/32"
//                       alt="Office Jokes"
//                     />
//                     <span className="text-gray-900">Office Jokes</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       className="w-8 h-8"
//                       src="https://via.placeholder.com/32"
//                       alt="Personal Finance"
//                     />
//                     <span className="text-gray-900">Personal Finance</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       className="w-8 h-8"
//                       src="https://via.placeholder.com/32"
//                       alt="Interview Tips & Stories"
//                     />
//                     <span className="text-gray-900">Interview Tips & Stories</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </>
//   );
// };

// export default LeftLayout;




import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const LeftLayout = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        if (user.providerData.some((provider) => provider.providerId === 'google.com')) {
          // User logged in with Google
          setUserDetails({
            displayName: user.displayName,
            email: user.email,
            photoURL:user.photoURL,
          });
        } else {
          // User logged in with email/password
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {/* Left Top Component */}
      <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
          <div className="bg-gray-100 shadow-xl rounded-lg py-3  bg-[url('profile_bg1.jpeg')] bg-cover bg-no-repeat">
            <div className="photo-wrapper p-2">
              <br />
              <img
                className="w-20 h-20 rounded-full mx-auto"
                src={userDetails?.photoURL || "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"}
                alt="Profile"
              />
            </div>

            <div className="p-2">
              {loading ? (
                <p>Loading....</p>
              ) : userDetails ? (
                <>
                  <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                    {userDetails.displayName || userDetails.Username}
                  </h3>
                  <h5 className="text-center text-lg text-gray-900 font-medium leading-8">
                    {userDetails.email}
                  </h5>
                </>
              ) : (
                <p>No user details available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Lower Left Component */}
      <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
          <div className="bg-gray-100 shadow-xl rounded-lg py-3 bg-[url('green.jpeg')] bg-cover bg-no-repeat">
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                Discover Restaurants
              </h3>
              <div className="mt-4">
                {/* Table */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-8 h-8"
                      src="https://via.placeholder.com/32"
                      alt="Day to Day Office"
                    />
                    <span className="text-gray-900">Day to Day Office</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-8 h-8"
                      src="https://via.placeholder.com/32"
                      alt="Job/Referrals"
                    />
                    <span className="text-gray-900">Job/Referrals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-8 h-8"
                      src="https://via.placeholder.com/32"
                      alt="Office Jokes"
                    />
                    <span className="text-gray-900">Office Jokes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-8 h-8"
                      src="https://via.placeholder.com/32"
                      alt="Personal Finance"
                    />
                    <span className="text-gray-900">Personal Finance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-8 h-8"
                      src="https://via.placeholder.com/32"
                      alt="Interview Tips & Stories"
                    />
                    <span className="text-gray-900">Interview Tips & Stories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftLayout;
