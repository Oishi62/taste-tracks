import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PremuimSignup = () => {


//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   const [username,setUsername]=useState("");

//   const handleRegister = async(e) => {
//     e.preventDefault();
//     try {
//       await  createUserWithEmailAndPassword(auth,email,password);
//       const user=auth.currentUser;
//       console.log(user);
//       if(user){
//         await setDoc(doc(db,"Owners",user.uid),{
//         email:user.email,
//         Username:username,
//       });  
//     }
//       console.log("User Registered Successfully");
//       alert("Thank You for using our Platform. You are successfully registered!");

//     } catch (error) {
//         console.log(error.message);
//     }
// }



//   const navigate = useNavigate();

//   const navigateToOtherPage = () => {
//     navigate('/ownerhomepage');
//   };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Owners", user.uid), {
          email: user.email,
          Username: username,
        });
      }
      toast.success("Thank you for using our platform. You are successfully registered!");
      setTimeout(() => {
        navigate('/ownerhomepage');
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100 p-4">
  {/* Background Image */}
  <img 
    src="signupbg.png" 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="relative z-10">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    <div className="bg-white bg-opacity-30 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-4xl flex flex-col lg:flex-row items-center">
      {/* SVG and Welcome Text Container */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
        <div className="flex justify-center lg:justify-start mb-4">   
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48">
            {/* SVG content */}
          </svg>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">Welcome!</p>
          <hr className="border-t-4 border-black w-1/5 my-4 mx-auto lg:mx-0"/>
          <p className="text-sm sm:text-base">Join Our Platform to "Discover authentic dining experiences with expert reviews and insider insights."</p>
        </div>
      </div>

      {/* Signup Form Container */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-black text-center">Sign Up</h1>
        <h2 className="text-xs sm:text-sm font-semibold mb-4 text-black text-center">
          Join TasteTracks to discover authentic restaurant reviews and gain insights into food industry work culture!
        </h2>
        {/* <div className="mt-4 flex flex-col items-center justify-between">
          <SignInWithGoogle />
        </div> */}
        {/* <div className="mt-4 text-sm text-black text-center">
          <p>or with email</p>
        </div> */}
        <form onSubmit={handleRegister} method="POST" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Restaurant Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{' '}
            <a href="/ownerlogin" className="text-black hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default PremuimSignup;
