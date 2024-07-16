import React from 'react';

const LeftLayout = () => {
  return (
    <>
      {/* Left Top Component */}
      <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
          <div className="bg-gray-100 shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-20 h-20 rounded-full mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
              <h5 className="text-center text-lg text-gray-900 font-medium leading-8">john.doe@gmail.com</h5>
              {/* Commented out the rest of the content as it wasn't required in the original code */}
              {/* <div className="text-center text-gray-400 text-xs font-semibold">
                  <p>Web Developer</p>
              </div>
              <table className="text-xs my-3">
                  <tbody>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                          <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td className="px-2 py-2">+977 9955221114</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td className="px-2 py-2">john@exmaple.com</td>
                      </tr>
                  </tbody>
              </table>
              <div className="text-center my-3">
                  <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    {/* Lower Left Component */}

    <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
          <div className="bg-gray-100 shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-20 h-20 rounded-full mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
              <h5 className="text-center text-lg text-gray-900 font-medium leading-8">john.doe@gmail.com</h5>
              {/* Commented out the rest of the content as it wasn't required in the original code */}
              {/* <div className="text-center text-gray-400 text-xs font-semibold">
                  <p>Web Developer</p>
              </div>
              <table className="text-xs my-3">
                  <tbody>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                          <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                          <td className="px-2 py-2">+977 9955221114</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td className="px-2 py-2">john@exmaple.com</td>
                      </tr>
                  </tbody>
              </table>
              <div className="text-center my-3">
                  <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default LeftLayout;
