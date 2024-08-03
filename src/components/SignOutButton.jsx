import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User Logged out Successfully");
      navigate('/login');
    } catch (error) {
      console.log("Error Logging out:", error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="text-black hover:scale-110 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">
      Sign Out
    </button>
  );
};

export default SignOutButton;
