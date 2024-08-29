import React from 'react'
import SignOutButton from '../components/SignOutButton'
import {  doc, setDoc } from 'firebase/firestore';
import { auth,db } from '../firebase'; 
const OwnerHomePage = () => {


  const handleClaimAccount = async () => {
    try {
      // Get the currently logged-in user
      const user = auth.currentUser;
      if (user) {
        // Define the document reference in Firestore
        const docRef = doc(db, 'premiumMembers', user.uid);
  
        // Set the user ID in Firestore
        await setDoc(docRef, { userId: user.uid });
  
        // Show an alert to the user
        alert('Thanks for joining premium membership!');
      } else {
        alert('No user is currently logged in.');
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('There was an error processing your request.');
    }
  };
  


  return (
    <>


<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
      <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0 md:mr-4">
        <img className="h-12 w-auto rounded-xl" src="tastetracks_logo.svg" alt=""/>
      </a>
      
    </div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-black hover:text-gray-900 cursor-pointer hover:scale-110" href="#about">About</a>
      <a className="mr-5 hover:text-gray-900 text-black cursor-pointer hover:scale-110" href="#features">Features</a>
      <SignOutButton/>
    </nav>
  </div>
</header>

<section className="text-black body-font" id="about">
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
    <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h3 className="title-font tracking-wide text-2xl md:text-4xl xl:text-5xl mb-4 font-bold text-green-700">Build a Better Brand</h3>
      <p className="mb-8 leading-relaxed opacity-80 max-w-2xl">Attract more diners with valuable insights and priority listings. Leverage advanced analytics and exclusive feedback to enhance your business. Enjoy dedicated support and stay ahead with industry reports.</p>
      <div className="flex justify-center">
      <button className="inline-flex text-black bg-green-400 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded-xl text-sm transition transform hover:-translate-y-1" onClick={handleClaimAccount}>Claim Account</button>

      </div>
    </div>
    <div id="pattern" className="w-full md:w-1/2 lg:max-w-xl bg-contain bg-no-repeat md:ml-auto xl:mr-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="Brand_4.jpg"/>
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="Brand_5.jpg"/>
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="Brand_3.jpg"/>
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="brand_1.png"/>
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="Brand_8.jpeg"/>
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="Brand_6.jfif"/>
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="Brand_7.png"/>
        <img className="object-cover object-center rounded-xl w-full h-32" alt="hero" src="Brand_2.jpeg"/>
      </div>
    </div>
  </div>
</section>
    <br /><br /><br />

<section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="lg:flex lg:items-center" id="features">
      <div className="w-full space-y-12 lg:w-1/2 ">
        <div>
          <h1 className="text-3xl font-semibold text-green-700 capitalize lg:text-4xl dark:text-white">Here's what TasteTracks<br/>helps your business with</h1>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-green-700"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-green-700"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-green-700"></span>
          </div>
        </div>

        <div class="md:flex md:items-start md:-mx-4">
                            <span class="inline-block p-2 text-green-700 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </span>

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-2xl font-semibold text-green-500 capitalize dark:text-white">Enhanced Visibility:</h1>

                                <p class="mt-3 text-gray-500 dark:text-gray-300">
                                Stand out from the competition with featured listings, priority placement in search results, and exclusive promotional opportunities. Attract more diners and boost your restaurant’s reputation.
                                </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">
                            <span class="inline-block p-2 text-green-700 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-2xl font-semibold text-green-500 capitalize dark:text-white"> Comprehensive Feedback:</h1>

                                <p class="mt-3 text-gray-500 dark:text-gray-300">
                                Receive detailed reviews from both customers and employees. Leverage this feedback to make informed improvements and create a better dining and working environment.
                                </p>
                            </div>
                        </div>

                        <div class="md:flex md:items-start md:-mx-4">
                            <span class="inline-block p-2 text-green-700 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <div class="mt-4 md:mx-4 md:mt-0">
                                <h1 class="text-2xl font-semibold text-green-500 capitalize dark:text-white">Dedicated Support:</h1>

                                <p class="mt-3 text-gray-500 dark:text-gray-300">
                                Enjoy priority customer support with a dedicated account manager. Get personalized assistance to resolve issues, optimize your profile, and maximize the benefits of TasteTracks Premium.
                                </p>
                            </div>
                        </div>
      </div>

      <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
        <img className="w-full max-w-md h-auto object-cover rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt=""/>
      </div>
    </div>
  </div>
</section>





    </>
  )
}

export default OwnerHomePage