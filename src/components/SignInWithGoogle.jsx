// import {React,useState} from 'react'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { auth } from '../firebase';
// const SignInWithGoogle = () => {

//   const [userDetails, setUserDetails] = useState(null);

//     function googleLogin() {
    
//         const provider=new GoogleAuthProvider();
//         signInWithPopup(auth,provider).then(async(result)=>{
//             console.log(result);
//             if(result.user){
//               // await setDoc(doc(db,"Users",result.uid),{
//               //   email:result.email,
//               //   Username:result.displayName,
//               // });  
//               setUserDetails({
//                 displayName: user.displayName,
//                 email: user.email,
//               });
//                 alert("User Logged In Successfully");
//                 window.location.href="/home_reviews";
//             }
//         });
    
//     }


//   return (
//     <div className="mb-3">
//                   <button className="flex flex-wrap justify-center w-full border border-black hover:border-gray-500 px-2 py-1.5 rounded-md" onClick={googleLogin}>
//                     <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google logo" />
//                     Sign in with Google
//                   </button>
//     </div>
//   )
// }

// export default SignInWithGoogle


import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const SignInWithGoogle = () => {
  const [userDetails, setUserDetails] = useState(null);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (result.user) {
        const user = result.user;
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          displayName: user.displayName,
        }, { merge: true }); // Use merge to only add/update fields without overwriting the entire document
        
        setUserDetails({
          displayName: user.displayName,
          email: user.email,
        });
        
        alert("User Logged In Successfully");
        window.location.href = "/home_reviews";
      }
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  return (
    <div className="mb-3">
      <button className="flex flex-wrap justify-center w-full border border-black hover:border-gray-500 px-2 py-1.5 rounded-md" onClick={googleLogin}>
        <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google logo" />
        Sign in with Google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
