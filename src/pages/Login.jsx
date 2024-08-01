import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();

  const navigateToOtherPage = () => {
    navigate('/home_reviews');
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-green-200 py-10">
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
            <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">Welcome back! Please enter your details</small>

              <form className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Password</label>
                  <input
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                

                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white bg-black  px-2 py-1.5 rounded-md" onClick={navigateToOtherPage}>Sign in</button>
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google logo" />
                    Sign in with Google
                  </button>
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">Don't have an account? </span>
                <a href="/pricing" className="text-xs font-semibold text-black">Sign up</a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
          <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 55 55" xml:space="preserve">
<g>
	<path d="M52,28H3c-1.654,0-3,1.346-3,3v1c0,2.002,1.89,2.002,2.51,2.002L40,34v5c0,1.654,1.346,3,3,3s3-1.346,3-3v-5l6.489,0.002
		c0.511,0,1.05-0.02,1.525-0.257C54.383,33.563,55,33.092,55,32v-1C55,29.346,53.654,28,52,28z"/>
	<path d="M6,27.002c1.177,0,2.259-0.514,3-1.353c0.741,0.839,1.823,1.353,3,1.353s2.259-0.514,3-1.353
		c0.741,0.839,1.823,1.353,3,1.353s2.259-0.514,3-1.353c0.741,0.839,1.823,1.353,3,1.353s2.259-0.514,3-1.353
		c0.741,0.839,1.823,1.353,3,1.353s2.259-0.514,3-1.353c0.741,0.839,1.823,1.353,3,1.353s2.259-0.514,3-1.353
		c0.741,0.839,1.823,1.353,3,1.353c1.178,0,2.26-0.515,3-1.353c0.741,0.839,1.823,1.353,3,1.353c2.206,0,4-1.795,4-4.008l-0.034-6h0
		l-0.013-0.156C51.933,16.72,49.868,5,38,5H16C4.132,5,2.067,16.72,2.047,16.838l-0.013,0.156h0L2,23.002
		C2,25.208,3.794,27.002,6,27.002z M48,25.002c-0.91,0-1.706-0.613-1.936-1.496c-0.129-0.484-0.566-0.823-1.064-0.823
		s-0.936,0.339-1.065,0.828c-0.229,0.878-1.024,1.491-1.935,1.491s-1.706-0.613-1.936-1.492C39.937,23.022,39.5,22.683,39,22.683
		s-0.938,0.34-1.065,0.827c-0.229,0.879-1.025,1.492-1.935,1.492s-1.706-0.613-1.936-1.492C33.937,23.022,33.5,22.683,33,22.683
		s-0.938,0.34-1.065,0.827c-0.229,0.879-1.025,1.492-1.935,1.492s-1.706-0.613-1.936-1.492C27.937,23.022,27.5,22.683,27,22.683
		s-0.938,0.34-1.065,0.827c-0.229,0.879-1.025,1.492-1.935,1.492s-1.706-0.613-1.936-1.492C21.937,23.022,21.5,22.683,21,22.683
		s-0.938,0.34-1.065,0.827c-0.229,0.879-1.025,1.492-1.935,1.492s-1.706-0.613-1.936-1.492C15.937,23.022,15.5,22.683,15,22.683
		s-0.938,0.34-1.065,0.827c-0.229,0.879-1.025,1.492-1.935,1.492s-1.706-0.613-1.936-1.492C9.937,23.022,9.5,22.683,9,22.683
		s-0.938,0.34-1.065,0.827C7.706,24.389,6.91,25.002,6,25.002c-1.103,0-2-0.898-2-1.996l0.018-3.183
		c0.089,0.032,0.185,0.05,0.278,0.074c0.058,0.015,0.113,0.034,0.172,0.046C4.651,19.978,4.84,20,5.034,20h43.932
		c0.194,0,0.383-0.022,0.567-0.057c0.06-0.011,0.116-0.031,0.174-0.046c0.092-0.024,0.186-0.041,0.275-0.073L50,23.002
		C50,24.104,49.103,25.002,48,25.002z M33.168,12.445c0.306-0.459,0.927-0.584,1.387-0.277l3,2c0.459,0.307,0.583,0.927,0.277,1.387
		C37.639,15.844,37.322,16,36.999,16c-0.19,0-0.383-0.055-0.554-0.168l-3-2C32.986,13.525,32.862,12.905,33.168,12.445z
		 M22.105,10.553l1-2c0.247-0.494,0.846-0.692,1.342-0.447c0.494,0.247,0.694,0.848,0.447,1.342l-1,2
		C23.719,11.798,23.366,12,22.999,12c-0.15,0-0.303-0.034-0.446-0.105C22.059,11.647,21.858,11.047,22.105,10.553z M11.105,13.553
		l1-2c0.247-0.493,0.847-0.693,1.342-0.447c0.494,0.247,0.694,0.848,0.447,1.342l-1,2C12.719,14.798,12.366,15,11.999,15
		c-0.15,0-0.303-0.034-0.446-0.105C11.059,14.647,10.858,14.047,11.105,13.553z"/>
	<path d="M48,36.001V39c0,2.757-2.243,5-5,5s-5-2.243-5-5v-3L2.813,36.002C2.334,36.534,2.034,37.23,2.034,38l0.013,0.162
		C2.067,38.28,4.132,50,16,50h22c11.868,0,13.933-11.72,13.952-11.838L51.966,38c0-0.77-0.3-1.467-0.779-1.998L48,36.001z
		 M15.832,43.555C15.639,43.844,15.322,44,14.999,44c-0.19,0-0.383-0.055-0.554-0.168l-3-2c-0.459-0.307-0.583-0.927-0.277-1.387
		s0.926-0.584,1.387-0.277l3,2C16.014,42.475,16.138,43.095,15.832,43.555z M26.447,45.895C26.304,45.966,26.151,46,26.001,46
		c-0.367,0-0.72-0.202-0.896-0.553l-1-2c-0.247-0.494-0.047-1.095,0.447-1.342c0.495-0.245,1.095-0.047,1.342,0.447l1,2
		C27.142,45.047,26.941,45.647,26.447,45.895z M34.895,39.447l-1,2C33.719,41.798,33.366,42,32.999,42
		c-0.15,0-0.303-0.034-0.446-0.105c-0.494-0.247-0.694-0.848-0.447-1.342l1-2c0.247-0.493,0.846-0.693,1.342-0.447
		C34.941,38.353,35.142,38.953,34.895,39.447z"/>
</g>
</svg>          </div>
        </div>

        
      </div>
    </>
  );
};

export default Login;
