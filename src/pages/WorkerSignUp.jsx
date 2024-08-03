import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkerSignUp = () => {
  const navigate = useNavigate();

  const navigateToOtherPage = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen  items-center justify-center bg-gray-100 bg-[url('signupbg.png')] bg-cover bg-no-repeat">
      <div className="bg-white bg-opacity-30 rounded-lg shadow-lg p-8 lg:p-12 w-3/4 h-auto flex items-center">
        {/* SVG Container */}
        <div className="pr-32">
        <div className="absolute top-20 left-50 w-16 h-16 flex items-center justify-center">   
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-48 h-48">
            <g data-name="2-Food equipment">
              <path d="M13 15a5.006 5.006 0 0 1-5-5V0h2v10a3 3 0 0 0 6 0V0h2v10a5.006 5.006 0 0 1-5 5z" />
              <path d="M12 0h2v24h-2z" />
              <path d="M15 48h-4a1 1 0 0 1-1-1V26a3 3 0 0 1 6 0v21a1 1 0 0 1-1 1zm-3-2h2V26a1 1 0 0 0-2 0zM26 48h-4a1 1 0 0 1-1-1V31a3 3 0 0 1 6 0v16a1 1 0 0 1-1 1zm-3-2h2V31a1 1 0 0 0-2 0z" />
              <path d="M26 29h-2v-3.4l-1.757-.94a5.807 5.807 0 0 1-3.129-6.26l2.75-16.656A2.082 2.082 0 0 1 26 2.082zM23.918 2a.082.082 0 0 0-.081.067l-2.757 16.7a3.787 3.787 0 0 0 2.107 4.133l.813.435V2.082A.082.082 0 0 0 23.918 2zM33 14h2v10h-2z" />
              <path d="M36 48h-4a1 1 0 0 1-1-1V26a3 3 0 0 1 6 0v21a1 1 0 0 1-1 1zm-3-2h2V26a1 1 0 0 0-2 0zM34 16c-3.309 0-6-3.589-6-8s2.691-8 6-8 6 3.589 6 8-2.691 8-6 8zm0-14c-2.168 0-4 2.748-4 6s1.832 6 4 6 4-2.748 4-6-1.832-6-4-6zM8 42H6a6.006 6.006 0 0 1-6-6V12a6.006 6.006 0 0 1 6-6v2a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h2zM42 42h-3v-2h3a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4V6a6.006 6.006 0 0 1 6 6v24a6.006 6.006 0 0 1-6 6z" />
              <path d="M8 38H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2v26h2zM42 38h-3v-2h3V10a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2zM18 36h4v2h-4zM18 40h4v2h-4zM26 36h3v2h-3zM26 40h3v2h-3z" />
            </g>
          </svg>
        </div>
        <div>
        <p className="text-6xl font-bold">Welcome!</p><br />
        <hr className="border-t-4 border-black w-1/5 my-4"/>
        <p>Join Our Platform to "Discover authentic dining experiences with expert reviews and insider insights."</p>
        </div>
        </div>
        {/* Signup Form Container */}
        <div className="w-1/2 p-6 bg-white bg-opacity-50 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
          <h2 className="text-sm font-semibold mb-6 text-black text-center">
            Join TasteTracks to discover authentic restaurant reviews and gain insights into food industry work culture!
          </h2>
          <div className="mt-4 flex flex-col items-center justify-between">
            <div className="w-full mb-2">
              <button
                type="button"
                className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4" id="google">
                  <path
                    fill="#fbbb00"
                    d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                  ></path>
                  <path
                    fill="#518ef8"
                    d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                  ></path>
                  <path
                    fill="#28b446"
                    d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                  ></path>
                  <path
                    fill="#f14336"
                    d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                  ></path>
                </svg>{' '}
                Sign Up with Google
              </button>
            </div>
            
          </div>
          <div className="mt-4 text-sm text-black text-center">
            <p>or with email</p>
          </div>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
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
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                onClick={navigateToOtherPage}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{' '}
              <a href="/login" className="text-black hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerSignUp;
