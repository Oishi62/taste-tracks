import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PasswordReset from '../components/PasswordReset';

const MyProfile = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <section className="flex flex-col md:flex-row p-6">
          <div className="md:w-1/4 bg-gray-100 p-4 shadow rounded-lg">
            <h2 className="text-xl font-bold text-charcoal mb-6">Create Your Profile</h2>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-4" onClick={() => setShowModal(true)}>Password Reset</button>
          </div>
          <div className="md:w-3/4 md:pl-6">
            <form className="bg-white p-6 shadow rounded-lg">
              <div className="mb-8">
                <div className="mb-4">
                  <legend className="text-lg font-semibold mb-2">Profile Information</legend>
                  <p className="text-xs font-light text-red-600">All fields are required.</p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input className="w-full shadow-inner p-3 border-2 border-gray-300 rounded-lg" type="text" name="name" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input className="w-full shadow-inner p-3 border-2 border-gray-300 rounded-lg" type="email" name="email" placeholder="john.doe@example.com" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input className="w-full shadow-inner p-3 border-2 border-gray-300 rounded-lg" type="tel" name="phone" placeholder="(555) 555-5555" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Profile Picture</label>
                  <div className="bg-gold hover:bg-gold-dark text-cream mx-auto cursor-pointer relative rounded-lg overflow-hidden">
                    <input className="opacity-0 absolute inset-0 border-2 border-gray-300" type="file" name="profile_picture" />
                    <span className="p-3">Upload Profile Picture</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-4">
                  <legend className="text-lg font-semibold mb-2">Social Media</legend>
                </div>
                <div className="mb-4 flex flex-col space-y-4">
                  <div className="flex">
                    <label className="w-1/3 text-sm font-medium text-charcoal-darker pr-2">Facebook</label>
                    <div className="flex-1 flex">
                      <span className="text-xs py-2 px-2 bg-gray-200 text-gray-600">facebook.com/</span>
                      <input className="flex-1 shadow-inner p-3 border-2 border-gray-300 rounded-lg" type="text" name="facebook" placeholder="yourusername" />
                    </div>
                  </div>
                  <div className="flex">
                    <label className="w-1/3 text-sm font-medium text-charcoal-darker pr-2">Twitter</label>
                    <div className="flex-1 flex">
                      <span className="text-xs py-2 px-2 bg-gray-200 text-gray-600">twitter.com/</span>
                      <input className="flex-1 shadow-inner p-3 border-2 border-gray-300 rounded-lg" type="text" name="twitter" placeholder="yourusername" />
                    </div>
                  </div>
                  <div className="flex">
                    <label className="w-1/3 text-sm font-medium text-charcoal-darker pr-2">Instagram</label>
                    <div className="flex-1 flex">
                      <span className="text-xs py-2 px-2 bg-gray-200 text-gray-600">instagram.com/</span>
                      <input className="flex-1 shadow-inner p-3 border-2 border-gray-300 rounded-lg" type="text" name="instagram" placeholder="yourusername" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-4">
                  <legend className="text-lg font-semibold mb-2">Description</legend>
                </div>
                <textarea className="w-full shadow-inner p-3 border-2 border-gray-300 rounded-lg" name="description" placeholder="Tell us about yourself." rows="6"></textarea>
              </div>

              <div className="text-center">
                <input type="hidden" name="sponsor" value="0" />
                <input className="bg-brick hover:bg-brick-dark text-cream-lighter font-bold py-2 px-4 rounded-lg cursor-pointer" type="submit" value="Create Profile" />
              </div>
            </form>
          </div>
        </section>
      </main>
      <PasswordReset isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default MyProfile;
