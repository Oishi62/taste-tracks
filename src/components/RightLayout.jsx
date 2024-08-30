import React from 'react'

const RightLayout = () => {
  return (
    <>
    <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
        <div className="relative shadow-xl rounded-lg py-3">
  {/* Background Image */}
  <img 
    src="Wallpaper_rightlayout.jpeg" 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
  />

  <div className="relative z-10">
            
            <div className="p-2">
              <br />
              <h5 className="text-center text-lg text-gray-900 font-medium leading-8">Get Real Time Code for the Project</h5>
              <p className='text-center	'>Download straight from the github repository, scan now to know more.</p>
              <img src="github.png" alt="Error" />
            </div>
            </div>
            </div>
          </div>
        </div>
      
    
    </>
  )
}

export default RightLayout