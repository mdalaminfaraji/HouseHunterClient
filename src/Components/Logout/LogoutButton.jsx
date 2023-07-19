import React, { useState } from 'react';

function LogoutButton() {
  const handleLogout = () => {
    // Remove the user token from the local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Optional: You can also clear any user data from state if needed
    setUser(null);
    // Any other logout-related logic can be added here

    // For demonstration purposes, simply reload the page after logout
    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
