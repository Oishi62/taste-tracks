import React from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();

  const navigateToOtherPage = () => {
    navigate('/login');
  };


  return (
    
<div class="flex h-screen">
  
  <div class="hidden lg:flex items-center justify-center flex-1 bg-green-200 text-black">
    <div class="max-w-md text-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-48 h-48"><g data-name="2-Food equipment"><path d="M13 15a5.006 5.006 0 0 1-5-5V0h2v10a3 3 0 0 0 6 0V0h2v10a5.006 5.006 0 0 1-5 5z"/><path d="M12 0h2v24h-2z"/><path d="M15 48h-4a1 1 0 0 1-1-1V26a3 3 0 0 1 6 0v21a1 1 0 0 1-1 1zm-3-2h2V26a1 1 0 0 0-2 0zM26 48h-4a1 1 0 0 1-1-1V31a3 3 0 0 1 6 0v16a1 1 0 0 1-1 1zm-3-2h2V31a1 1 0 0 0-2 0z"/><path d="M26 29h-2v-3.4l-1.757-.94a5.807 5.807 0 0 1-3.129-6.26l2.75-16.656A2.082 2.082 0 0 1 26 2.082zM23.918 2a.082.082 0 0 0-.081.067l-2.757 16.7a3.787 3.787 0 0 0 2.107 4.133l.813.435V2.082A.082.082 0 0 0 23.918 2zM33 14h2v10h-2z"/><path d="M36 48h-4a1 1 0 0 1-1-1V26a3 3 0 0 1 6 0v21a1 1 0 0 1-1 1zm-3-2h2V26a1 1 0 0 0-2 0zM34 16c-3.309 0-6-3.589-6-8s2.691-8 6-8 6 3.589 6 8-2.691 8-6 8zm0-14c-2.168 0-4 2.748-4 6s1.832 6 4 6 4-2.748 4-6-1.832-6-4-6zM8 42H6a6.006 6.006 0 0 1-6-6V12a6.006 6.006 0 0 1 6-6v2a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h2zM42 42h-3v-2h3a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4V6a6.006 6.006 0 0 1 6 6v24a6.006 6.006 0 0 1-6 6z"/><path d="M8 38H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2v26h2zM42 38h-3v-2h3V10a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2zM18 36h4v2h-4zM18 40h4v2h-4zM26 36h3v2h-3zM26 40h3v2h-3z"/></g></svg>
    </div>
  </div>
 
  <div class="w-full bg-green-400 lg:w-1/2 flex items-center justify-center">
    <div class="max-w-md w-full p-6">
      <h1 class="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
      <h1 class="text-sm font-semibold mb-6 text-black text-center">Join TasteTracks to discover authentic restaurant reviews and gain insights into food industry work culture! </h1>
      <div class="mt-4 flex flex-col lg:flex-row items-center justify-between">
        <div class="w-full lg:w-1/2 mb-2 lg:mb-0">
          <button type="button" class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4" id="google">
              <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
              <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
              <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
              <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
            </svg> Sign Up with Google </button>
        </div>
        <div class="w-full lg:w-1/2 ml-0 lg:ml-2">
          <button type="button" class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github" class="w-4">
              <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
            </svg> Sign Up with Github </button>
        </div>
      </div>
      <div class="mt-4 text-sm text-black text-center">
        <p>or with email</p>
      </div>
      <form action="#" method="POST" class="space-y-4">
        
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 ">Username</label>
          <input type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 "/>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="text" id="email" name="email" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
        </div>
        <div>
          <button type="submit" class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300" onClick={navigateToOtherPage}>Sign Up</button>
        </div>
      </form>
      <div class="mt-4 text-sm text-gray-600 text-center">
        <p>Already have an account? <a href="/login" class="text-black hover:underline">Login here</a>
        </p>
      </div>
    </div>
  </div>
</div>
)
}

export default Signup