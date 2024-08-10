import React from 'react'

const RightLayout = () => {
  return (
    <>
    <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
          <div className="bg-[url('Wallpaper_rightlayout.jpeg')] bg-cover bg-no-repeat bg-center shadow-xl rounded-lg py-3">
            
            <div className="p-2">
              <br />
              <h5 className="text-center text-lg text-gray-900 font-medium leading-8">Get Real Time Code for the Project</h5>
              <p className='text-center	'>Download straight from the github repository, scan now to know more.</p>
              <img src="github.png" alt="Error" />
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default RightLayout