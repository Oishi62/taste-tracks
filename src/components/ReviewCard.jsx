// import React from 'react'

// const ReviewCard = () => {
//   return (
//     <>
   
// <div className="relative flex  flex-col justify-center   pt-6 sm:pt-12 z-10">
  
//       <div className="bg-gray-100 w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl">
        
//         <div className="  p-6 ">

//           <div className="pb-3 mb-4 border-b border-stone-200 text-xs font-medium flex justify-between text-blue-900 ">
//             <span className="flex items-center gap-1 ">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//               </svg>
//               7 March, 2022
//             </span>
//             <span>
//               <a href="" class="hover:text-orange-600 ">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//           </svg>
//         </a>
//             </span>
//           </div>
//           <h3 className="mb-4 font-semibold  text-2xl"><a href="" className="transition-all text-blue-900 hover:text-blue-600">Magic Wok</a></h3>
//           <p className="text-sky-800 text-sm mb-0">
//             It is a horrible restaurant.
//           </p>
//         </div>
//         <div className="mt-auto">
//           <img src="https://picsum.photos/400/300" alt="" className="w-full h-48 object-cover"/>
//         </div>
//       </div>
// </div>
    
//     </>
//   )
// }

// export default ReviewCard



import React from 'react'

const ReviewCard = () => {
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
                7 March, 2022
              </span>
              <span>
                <a href="" className="hover:text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-b border-stone-200"></div>

        {/* Bottom section */}
        <div className="p-6">
          <h3 className="mb-4 font-semibold text-2xl">
            <a href="" className="transition-all text-blue-900 hover:text-blue-600">Magic Wok</a>
          </h3>
          <p className="text-sky-800 text-sm mb-0">
            It is a horrible restaurant.
          </p>
        </div>
        <div className="mt-auto">
          <img src="https://picsum.photos/400/300" alt="" className="w-full h-48 object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard