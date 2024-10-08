import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="relative font-inter antialiased ">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-green-200 ">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24 ">

          {/* Pricing table component */}
          <div>
            {/* Pricing toggle */}
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
              <div className="relative flex w-full p-1 bg-green-500 dark:bg-slate-900 rounded-full">
                <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                  <span className={`absolute inset-0 w-1/2 bg-black rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}></span>
                </span>
                <button 
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} 
                  onClick={() => setIsAnnual(true)}
                  aria-pressed={isAnnual}
                >
                  Yearly <span className={isAnnual ? 'text-white' : 'text-green-900'}>-20%</span>
                </button>
                <button 
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'}`} 
                  onClick={() => setIsAnnual(false)}
                  aria-pressed={!isAnnual}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

              {/* Pricing tab 1 */}
              <div className="h-full transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[0_4px_15px_rgba(0,100,0,1)] overflow-hidden rounded-2xl">                                
              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(15,23,42,0.75)] border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
              <div className="mb-5">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Customer</div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{isAnnual ? '0' : '0'}</span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">Gain access to detailed, unbiased reviews of food quality, service, and ambiance.</div>
                    <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-black px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="/signup">
                      Sign Up
                    </a>
                  </div>
                  <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited restaurant reviews</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Access to user ratings</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Dining experience insights</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Food quality ratings</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing tab 2 */}
              <div className="h-full transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[0_4px_15px_rgba(0,100,0,1)] overflow-hidden rounded-2xl">                                
              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(15,23,42,0.75)] border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                  {/* <div className="absolute top-0 right-0 mr-6 -mt-4 z-10">
                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                  </div> */}
                  <div className="mb-5">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Restaurant Owner</div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{isAnnual ? '49' : '55'}</span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">Unlock premium features to manage your restaurant's online presence.</div>
                    <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-black px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="/premiumsignup">
                      Purchase Plan
                    </a>
                  </div>
                  <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Manage restaurant profile</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Respond to reviews</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Promote special offers</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Premium support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing tab 3 */}
              <div className="h-full transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[0_4px_15px_rgba(0,100,0,1)] overflow-hidden rounded-2xl">                                
              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(15,23,42,0.75)] border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                  <div className="mb-5">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Worker</div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{isAnnual ? '0' : '0'}</span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">Share your workplace experiences and help foster transparency and fair labor practices.</div>
                    <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-black px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="/workersignup">
                      Sign Up
                    </a>
                  </div>
                  <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Share experiences with other workers</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Insights on workplace conditions</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Access to worker ratings</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Anonymous workplace reviews</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Pricing;
