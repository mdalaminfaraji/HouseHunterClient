import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },reset
      } = useForm();
    
      const {setUser}=useContext(AuthContext)
    
      const onSubmit = async (formData) => {
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    console.log(response);
          if (response.ok) {
            const {token, user} = await response.json();
           const userData=JSON.stringify(user);

            // Store the token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('user', userData);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Login Successful ${user.fullName}`,
                showConfirmButton: false,
                timer: 1500
               })
            
            // Set the user data in state
           setUser(user?user.fullName:"No user");
           reset();
            // You can redirect to another page or handle successful login accordingly
            Navigate('/');
          } else {
            console.log('Login failed');
          }
        } catch (error) {
          console.error('Error occurred during login:', error);
        }
      };
    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
  
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters',
                },
              })}
              className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
  
          <button
            type="submit"
            className="bg-blue-500 block w-32 mx-auto text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className='text-center'>Don't have an account?<Link to='/register'> <span className='text-blue-500 underline'> please Register</span></Link></p>

      </div>
    );
};

export default Login;