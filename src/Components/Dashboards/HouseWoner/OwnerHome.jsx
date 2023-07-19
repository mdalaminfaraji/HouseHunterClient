import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const OwnerHome = () => {
    const {userEmail}=useContext(AuthContext);
    const [userHouses, setHouses]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/getHouse/${userEmail}`)
        .then(res=>res.json())
        .then(data=>setHouses(data))
    },[])
    console.log(userHouses);
    return (
        <div>
            <h1>Owner home</h1>
        </div>
    );
};

export default OwnerHome;