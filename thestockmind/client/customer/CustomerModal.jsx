import React from "react";
import { useForm } from "react-hook-form";
import {
  CharInput,
  NumberInput,
  EmailInput,
  PinInput,
} from "../common/FormInputs";
import FormLayout from "../layouts/FormLayout";

export default function CustomerModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Customer Added:", data);

    setTimeout(() => {
      alert("Customer Added Successfully!");
      reset();
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <FormLayout
      title="Add New Customer"                
      size="medium"
      showUpload={true}
      onClose={onClose}
      uploadText="Bulk Upload"
      
    >
      <form onSubmit={handleSubmit(onSubmit)} className="px-4 sm:px-8 space-y-4">
        <CharInput
          label="Full Name"
          name="fullName"
          placeholder="Enter Full Name"
          register={register}
          rules={{ required: "Full name is required" }}
          error={errors.fullName}
        />

        {/* Phone Number (Same as Employee form) */}
<div>
  <label className="font-medium mb-1 block">Phone Number</label>

  <div className="flex">
    {/* Country Select */}
    <select
      {...register("country", { required: "Country is required" })}
      className="border bg-gray-50 rounded-l-md px-3 py-2 text-sm
        focus:border-violet-600 focus:ring-2 focus:ring-violet-600"
    >
      <option value="">Select</option>
      <option value="US">US</option>
      <option value="IN">IN</option>
      <option value="UK">UK</option>
    </select>

    {/* Phone Input */}
       <input
       {...register("phone", {
        required: "Phone number required",
        pattern: {
          value: /^[0-9]{8,12}$/,
          message: "Enter valid phone number",
        },
      })}
        type="text"
        placeholder="Enter phone number"
        className="w-full px-3 py-2 border rounded-r-md 
        outline-none focus:border-violet-600
        focus:ring-2 focus:ring-violet-600"
         />
       </div>
 
         {/* Errors */}
           {errors.country && (
         <p className="text-red-500 text-sm">{errors.country.message}</p>
        )}
         {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
       </div>


        <EmailInput
          label="Email-Id"
          name="email"
          placeholder="Enter your Email-ID"
          register={register}
          rules={{ required: "Email is required" }}
          error={errors.email}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-medium mb-1 block">State</label>

            <select
              {...register("state", { required: "State is required" })}
              className="border bg-gray-50 rounded-md px-3 py-2 text-sm
              focus:border-violet-600 focus:ring-2 focus:ring-violet-600"
            >
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Karnataka">Karnataka</option>
            </select>

            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>

          <PinInput
            label="Pincode"
            name="pincode"
            placeholder="Enter Pincode"
            register={register}
            rules={{ required: "Pincode is required" }}
            error={errors.pincode}
          />
        </div>

        <CharInput
          label="Address"
          name="address"
          placeholder="Enter Address"
          register={register}
          rules={{ required: "Address is required" }}
          error={errors.address}
        />

        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded-md mt-4
          hover:bg-violet-800 transition"
        >
          Add Customer
        </button>
      </form>
    </FormLayout>
  );
}
