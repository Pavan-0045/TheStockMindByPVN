import React from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  CharInput,
  NumberInput,
  EmailInput,
  PinInput,
} from "../common/FormInputs";

export default function CustomerEditModal({ isOpen, onClose, existingData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: existingData || {},
  });

  // Load existing data into form
  React.useEffect(() => {
    if (existingData) reset(existingData);
  }, [existingData, reset]);

  const onSubmit = (data) => {
    console.log("Updated Data:", data);

    setTimeout(() => {
      alert("Customer Updated Successfully!");
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[600px] max-w-[90%] shadow-lg">

        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4 mt-1.5">
          <h2 className="text-[26px] font-semibold font-inter">
            Edit Customer
          </h2>

          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 py-1.5 space-y-4">

          <CharInput
            label="Full Name"
            name="fullName"
            placeholder="Enter Full Name"
            register={register}
            rules={{ required: "Full name is required" }}
            error={errors.fullName}
          />

          <NumberInput
            label="Phone Number"
            name="phone"
            placeholder="Enter Phone Number"
            register={register}
            rules={{
              required: "Phone number is required",
              minLength: { value: 10, message: "Phone must be 10 digits" },
              maxLength: { value: 10, message: "Phone must be 10 digits" },
            }}
            error={errors.phone}
          />

          <EmailInput
            label="Email-Id"
            name="email"
            placeholder="Enter your Email-ID"
            register={register}
            rules={{ required: "Email is required" }}
            error={errors.email}
          />

          <div className="grid grid-cols-2 gap-4">

            {/* State Dropdown */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">State</label>
              <select
                {...register("state", { required: "State is required" })}
                className="border rounded-md py-2 px-3 focus:ring-2 focus:ring-violet-500"
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
              </select>

              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
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
            className="w-full bg-violet-600 text-white rounded-md py-3 mt-4 mb-1.5"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
