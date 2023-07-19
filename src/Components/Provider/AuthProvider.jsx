import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        const userDataJson=localStorage.getItem('user');
           const userData=JSON.parse(userDataJson);
           setUser(userData?.fullName?userData?.fullName:'no user');
           
           // console.log(userData.fullName);
     },[])
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
    const authInfo={
        user, handleLogout, setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;