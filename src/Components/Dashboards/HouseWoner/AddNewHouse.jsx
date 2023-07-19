import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddNewHouse = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
      
          <div className="container mx-auto py-8 border-4 px-16 bg-[#193D3D] text-[#DDDDDD]">
          <h1 className="text-2xl font-bold mb-4 text-center">Add New House</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <div className=''>
          <label htmlFor="name">House Name</label>
          <Controller
          
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => <input {...field} id="name"  className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
  
        <div>
          <label htmlFor="address">Address:</label>
          <Controller
            name="address"
            control={control}
            rules={{ required: 'Address is required' }}
            render={({ field }) => <input {...field} id="address" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.address && <span className="text-red-500">{errors.address.message}</span>}
        </div>
  
        <div>
          <label htmlFor="city">City:</label>
          <Controller
            name="city"
            control={control}
            rules={{ required: 'City is required' }}
            render={({ field }) => <input {...field} id="city" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.city && <span className="text-red-500">{errors.city.message}</span>}
        </div>
  
        <div>
          <label htmlFor="bedrooms">Bedrooms:</label>
          <Controller
            name="bedrooms"
            control={control}
            rules={{ required: 'Bedrooms are required' }}
            render={({ field }) => <input {...field} id="bedrooms" type="number" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.bedrooms && <span className="text-red-500">{errors.bedrooms.message}</span>}
        </div>
  
        <div>
          <label htmlFor="bathrooms">Bathrooms:</label>
          <Controller
            name="bathrooms"
            control={control}
            rules={{ required: 'Bathrooms are required' }}
            render={({ field }) => <input {...field} id="bathrooms" type="number" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.bathrooms && <span className="text-red-500">{errors.bathrooms.message}</span>}
        </div>
  
        <div>
          <label htmlFor="roomSize">Room Size:</label>
          <Controller
            name="roomSize"
            control={control}
            rules={{ required: 'Room size is required' }}
            render={({ field }) => <input {...field} id="roomSize" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.roomSize && <span className="text-red-500">{errors.roomSize.message}</span>}
        </div>
  
        <div>
          <label htmlFor="picture">Picture:</label>
          <Controller
            name="picture"
            control={control}
            rules={{ required: 'Picture is required' }}
            render={({ field }) => <input {...field} id="picture" type="text" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.picture && <span className="text-red-500">{errors.picture.message}</span>}
        </div>
  
        <div>
          <label htmlFor="availabilityDate">Availability Date:</label>
          <Controller
            name="availabilityDate"
            control={control}
            rules={{ required: 'Availability date is required' }}
            render={({ field }) => <input {...field} id="availabilityDate" type="date" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.availabilityDate && (
            <span className="text-red-500">{errors.availabilityDate.message}</span>
          )}
        </div>
  
        <div>
          <label htmlFor="rentPerMonth">Rent per Month (BDT):</label>
          <Controller
            name="rentPerMonth"
            control={control}
            rules={{ required: 'Rent per month is required' }}
            render={({ field }) => <input {...field} id="rentPerMonth" type="number" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.rentPerMonth && (
            <span className="text-red-500">{errors.rentPerMonth.message}</span>
          )}
        </div>
  
        <div>
          <label htmlFor="phoneNumber">Phone Number (Bangladeshi only):</label>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^(\+?88)?01[3-9]\d{8}$/,
                message: 'Please enter a valid Bangladeshi phone number',
              },
            }}
            render={({ field }) => <input {...field} id="phoneNumber" className='text-black block w-3/4 p-1 rounded-lg my-2'/>}
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </div>
  
        <div className="col-span-2">
          <label htmlFor="description">Description:</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => <textarea {...field} id="description" rows="4" className='text-black block w-full  p-1 rounded-lg my-2' />}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
  
        <button type="submit" className="col-span-2 rounded-lg bg-blue-500 text-white p-2 ">
          Submit
        </button>
      </form>
        </div>
    );
};

export default AddNewHouse;