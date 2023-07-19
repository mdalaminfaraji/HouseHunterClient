import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [userRole, setUserRole]=useState(null);
    const [userEmail, setUserEmail]=useState(null);
    const [loading, setLoading]=useState(true);
    console.log(userEmail);
    useEffect(async()=>{
        setLoading(true);
        const userDataJson=localStorage.getItem('user');
           const userData=JSON.parse(userDataJson);
           setUser(userData?.fullName?userData?.fullName:'no user');
        //    console.log(userData.email);
           setUserRole(userData?.role?userData?.role:'no role');
           setUserEmail(userData?.email?userData?.email:'no email')
         
           setLoading(false);
     },[])
    const handleLogout = () => {
        setLoading(true);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        window.location.reload();
        setLoading(false);
      };
    const authInfo={
        user, handleLogout, setUser, userRole, setLoading, loading, userEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;