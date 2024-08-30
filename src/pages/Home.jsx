// import React from 'react'
// // import logo from ""
 
// const Home = () => {
//   return (
//     <>

// <section className="bg-[url('bgimage.png')] bg-no-repeat bg-right text-black-100 min-h-screen flex items-center justify-center">
// 	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
// 		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
// 			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
// 				<span className="text-violet-400">TasteTracks</span>
// 			</h1>
// 			<p className="mt-6 mb-8 sm:mb-12 text-xl">Where Food Meets Work</p>
// 			<p className="text-base">
// 				<br className="hidden md:inline lg:hidden" />The First Dual-Platform for Comprehensive Culinary and Work Culture Reviews in the Food Industry
// 			</p>
// 			<br />
// 			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
// 				<a rel="noopener noreferrer" href="/login" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900 border-2 border-gray-600">Sign In</a>
// 				<a rel="noopener noreferrer" href="/pricing" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 border-2 border-gray-600">Sign Up</a>
// 			</div>
// 		</div>
// 		{/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
// 			<img src="Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
// 		</div> */}
// 	</div>
// </section>


//     </>
//   )
// }

// export default Home


// import React from 'react';

// const Home = () => {
//   return (
//     <>
//       <section className="bg-green-200 text-black-100 h-screen flex items-center justify-center">
//         <div className="container flex items-center justify-center w-full h-full">
//           <div className="flex flex-col justify-center p-6 bg-[url('bgimage.png')] bg-no-repeat bg-right bg-opacity-75 rounded-lg shadow-lg w-11/12 max-w-4xl h-[80vh] lg:w-3/4 xl:w-2/3">
//             <div className="text-center lg:text-left mb-52 ml-10">
//               <h1 className="text-5xl font-bold leading-none sm:text-6xl">
//                 <span className="text-green-900">TasteTracks</span>
//               </h1>
//               <p className="mt-6 mb-3 text-xl text-green-600 font-bold">Where Food Meets Work</p>
//               <p className="text-base w-1/2">
//                 <br className="hidden md:inline lg:hidden" />
//                 The First Dual-Platform for Comprehensive Culinary and Work Culture Reviews in the Food Industry
//               </p>
//               <br />
// 			  {/* <p className="text-base w-1/2">
//                 The First Dual-Platform for Comprehensive Culinary and Work Culture Reviews in the Food Industry
//               </p> */}
//               <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
// 			  <a rel="noopener noreferrer" href="/pricing" className="px-8 py-3 text-lg font-semibold rounded-full bg-green-400 text-gray-900 border-2 border-gray-600 transition transform hover:-translate-y-1">Explore</a>
			  

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;


import React from 'react';

const Home = () => {
  return (
    <>
      <section className="bg-green-200 text-black-100 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center p-8 sm:p-12 bg-[image:url('bgimage.png')] bg-no-repeat bg-cover bg-center bg-opacity-75 rounded-lg shadow-lg w-full max-w-6xl mx-auto min-h-[90vh]">
            <div className="text-center lg:text-left mb-12 lg:mb-24">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-green-900">TasteTracks</span>
              </h1>
              <p className="mt-6 mb-4 text-xl sm:text-2xl text-green-600 font-bold">Where Food Meets Work</p>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                The First Dual-Platform for Comprehensive Culinary and Work Culture Reviews in the Food Industry
              </p>
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 items-center justify-center lg:justify-start mt-12">
                <a rel="noopener noreferrer" href="/pricing" className="px-10 py-4 text-xl font-semibold rounded-full bg-green-400 text-gray-900 border-2 border-gray-600 transition transform hover:-translate-y-1 w-full sm:w-auto">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;