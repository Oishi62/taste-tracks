import PasswordReset from '../components/PasswordReset';
import React, { useState,useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, updateDoc,getDoc } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';
import WorkerNavbar from '../components/WorkerNavbar';

const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [profilename, setProfileName] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [description, setDescription] = useState("");
  const [showProfileDetails, setShowProfileDetails] = useState(true);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
          // User logged in with email/password
          const docRef = doc(db, "Workers", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);



  const handleAdditionalInfoSubmit = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      const user = auth.currentUser;
      const userDocRef = doc(db, "Workers", user.uid);
      await updateDoc(userDocRef, {
        Name: profilename,
        Phone: phone,
        Facebook: facebook,
        Twitter: twitter,
        Instagram: instagram,
        Description: description
      });
      alert("User Information added successfully");
    }
  };

  const handlePasswordReset = async () => {
    if (auth.currentUser) {
      try {
        await sendPasswordResetEmail(auth, auth.currentUser.email);
        alert("Password reset email sent successfully.");
      } catch (error) {
        console.error("Error sending password reset email:", error);
        alert("Error sending password reset email: " + error.message);
      }
    } else {
      alert("No user is currently logged in.");
    }
  };

  const handleShowProfileDetails = () => {
    setShowProfileDetails(true);
    setShowProfileForm(false);
  };

  const handleShowProfileForm = () => {
    setShowProfileDetails(false);
    setShowProfileForm(true);
  };

  return (
    <>
      <WorkerNavbar />
      <main className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <section className="flex flex-col md:flex-row p-6">
          <div className="md:w-1/4 bg-gray-100 p-4 shadow rounded-lg">
            <h2 className="text-xl font-bold text-charcoal mb-6">Options:</h2>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-4"
              onClick={handleShowProfileDetails}
            >
              {showProfileDetails ? "Hide Profile Details" : "Show Profile Details"}
            </button>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-4"
              onClick={handleShowProfileForm}
            >
              {showProfileForm ? "Hide Update Form" : "Update Profile Details"}
            </button>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-4"
              onClick={handlePasswordReset}
            >
              Reset Password
            </button>
          </div>
          <div className="md:w-3/4 md:pl-6">
            {showProfileForm && (
              <form className="bg-white p-6 shadow rounded-lg" onSubmit={handleAdditionalInfoSubmit}>
                <div className="mb-8">
                  <div className="mb-4">
                    <legend className="text-lg font-semibold mb-2">Profile Information</legend>
                    <p className="text-xs font-light text-red-600">All fields are required.</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      className="w-full shadow-inner p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      onChange={(e) => setProfileName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      className="w-full shadow-inner p-3 border-2 border-gray-300 rounded-lg"
                      type="tel"
                      name="phone"
                      placeholder="(555) 555-5555"
                      onChange={(e) => setPhone(e.target.value)}
                    />
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
                        <input
                          className="flex-1 shadow-inner p-3 border-2 border-gray-300 rounded-lg"
                          type="text"
                          name="facebook"
                          onChange={(e) => setFacebook(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="w-1/3 text-sm font-medium text-charcoal-darker pr-2">Twitter</label>
                      <div className="flex-1 flex">
                        <input
                          className="flex-1 shadow-inner p-3 border-2 border-gray-300 rounded-lg"
                          type="text"
                          name="twitter"
                          onChange={(e) => setTwitter(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="w-1/3 text-sm font-medium text-charcoal-darker pr-2">Instagram</label>
                      <div className="flex-1 flex">
                        <input
                          className="flex-1 shadow-inner p-3 border-2 border-gray-300 rounded-lg"
                          type="text"
                          name="instagram"
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-4">
                    <legend className="text-lg font-semibold mb-2">Description</legend>
                  </div>
                  <textarea
                    className="w-full shadow-inner p-3 border-2 border-gray-300 rounded-lg"
                    name="description"
                    placeholder="Tell us about yourself."
                    rows="6"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="text-center">
                  <input type="hidden" name="sponsor" value="0" />
                  <input
                    className="bg-brick hover:bg-brick-dark text-cream-lighter font-bold py-2 px-4 rounded-lg cursor-pointer"
                    type="submit"
                    value="Create Profile"
                  />
                </div>
              </form>
            )}

            {showProfileDetails && !showProfileForm && (
              <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-xl font-bold text-charcoal mb-4">Profile Details</h2>
                {loading ? (
                <p>Loading....</p>
              ) : userDetails ? (
                <>
                <p><strong>Name:</strong> {userDetails.Username}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <p><strong>Phone:</strong> {userDetails.Phone}</p>
                <p><strong>Instagram:</strong> {userDetails.Instagram}</p>
                <p><strong>Twitter:</strong> {userDetails.Twitter}</p>
                <p><strong>Facebook:</strong> {userDetails.Facebook}</p>
                <p><strong>Description:</strong> {userDetails.Description}</p>
                </>
              ) : (
                <p>No user details available</p>
              )}
              </div>
            )}
          </div>
        </section>
        <PasswordReset isVisible={showModal} onClose={() => setShowModal(false)} />
      </main>
    </>
  );
};

export default MyProfile;

