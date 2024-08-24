import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import SignOutButton from './SignOutButton'
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = () => {


  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        if (user.providerData.some((provider) => provider.providerId === 'google.com')) {
          // User logged in with Google
          setUserDetails({
            photoURL:user.photoURL,
          });
        } else {
          // User logged in with email/password
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <>

      <header className="bg-[url('navbar_bg1.jpeg')] bg-cover bg-no-repeat">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-teal-700 lg:px-8">
          <div className="relative flex flex-wrap items-center justify-between py-2">

            {/* Logo and Tagline */}
            <div className="flex items-center flex-shrink-0 mr-6">
            <img className="h-8 w-auto sm:h-10" src="web_logo.png" alt="Your Company"/>
            <p className='hidden sm:block px-2 font-playwrite text-xs sm:text-sm md:text-base lg:text-lg'>
              TasteTracks: <br className="md:hidden"/>Where Food Meets Work
            </p>
          </div>

            {/* Search Bar */}
            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
              <div className="w-full max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input id="search" name="search" className="block w-full rounded-md border border-gray-400 py-1.5 pl-10 pr-3 text-yellow-300 placeholder:text-black focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
                </div>
              </div>
            </div>


            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">

            <img className="w-12 h-12 rounded-full" src={userDetails?.photoURL || "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"} alt="" />
              {/* <div className="relative ml-4 flex-shrink-0">
                <div>
                  <button type="button" className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                   
                  </button>
                </div>

              </div> */}
            </div>
          </div>

          {/* Desktop navigation */}

          <div className="w-full flex">
            <nav className="hidden lg:flex lg:space-x-4 lg:py-2 lg:justify-end w-full" aria-label="Global">
              <Link to="/home_reviews" className="text-black hover:scale-110 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium" aria-current="page">Home</Link>
              <Link to="/myprofile" className="hover:scale-110 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">My Profile</Link>
              <Link to="/about" className="text-black hover:scale-110 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">About</Link>
              <SignOutButton />
            </nav>
          </div>


        </div>

        {/* Mobile Menu Navbar */}

        <nav className="lg:hidden" aria-label="Global" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/" className="block rounded-md py-2 px-3 text-base font-medium hover:bg-gray-700 hover:text-white" aria-current="page">Home</Link>
            <Link to="/myprofile" className="block rounded-md py-2 px-3 text-base font-medium hover:bg-gray-700 hover:text-white">My Profile</Link>
            <Link to="/about" className="block rounded-md py-2 px-3 text-base font-medium hover:bg-gray-700 hover:text-white">About</Link>
            <div className="mt-2">
              <SignOutButton />
            </div>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
            </div>
          </div>
        </nav>



      </header>

    </>

  )
}

export default Navbar