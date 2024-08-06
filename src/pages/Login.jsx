import { signInWithEmailAndPassword } from 'firebase/auth';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import SignInWithGoogle from '../components/SignInWithGoogle';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In Successfully");
      window.location.href = "/home_reviews";
      alert("Login Successfull!");

    } catch (error) {
      console.log(error.message);
      //alert("Invalid Email or Password");
    }
  };

  const navigate = useNavigate();

  const navigateToOtherPage = () => {
    navigate('/home_reviews');
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 bg-[url('signupbg.png')] bg-cover bg-no-repeat p-4">
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
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-black text-center">Sign In</h1>
          <h2 className="text-xs sm:text-sm font-semibold mb-4 text-black text-center">
            Join TasteTracks to discover authentic restaurant reviews and gain insights into food industry work culture!
          </h2>
          <div className="mt-4 flex flex-col items-center justify-between">
            <SignInWithGoogle />
          </div>
          <div className="mt-4 text-sm text-black text-center">
            <p>or with email</p>
          </div>
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
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
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
