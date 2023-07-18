import React from 'react';
import { useForm } from 'react-hook-form';
const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', { required: 'Full Name is required' })}
            className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block mb-2">
            Role
          </label>
          <select
            id="role"
            {...register('role', { required: 'Role is required' })}
            className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="House Owner">House Owner</option>
            <option value="House Renter">House Renter</option>
          </select>
          {errors.role && (
            <span className="text-red-500">{errors.role.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Please enter a valid 10-digit phone number',
              },
            })}
            className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </div>

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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
    );
};

export default Registration;