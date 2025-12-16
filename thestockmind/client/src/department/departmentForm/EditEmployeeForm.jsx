import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import FormLayout from "../../common/FormLayout";
import {
  CharInput,
  DateInput,
  EmailInput,
  PinInput,
} from "../../common/BaseInput";

import { FiUploadCloud } from "react-icons/fi";

export default function EditEmployeeForm({ isOpen, onClose }) {
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const triggerUpload = () => fileInputRef.current?.click();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setValue("uploadFile", file, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <FormLayout
      title="Edit Employee"
      size="medium"
      onClose={onClose}

      /*  NEW FormLayout props */
      showUpload={false}
      uploadText=""
      onUpload={() => {}}

      showCustom={false}
      customText=""
      onCustom={() => {}}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">
            <CharInput
              label="Full Name"
              name="fName"
              placeholder="Enter Full Name"
              register={register}
              rules={{ required: "Name is required" }}
              error={errors.fName}
            />

            {/* Phone */}
            <div>
              <label className="font-medium mb-1 block">Phone Number</label>
              <div className="flex">
                <select
                  {...register("country", { required: "Select country" })}
                  className="border bg-gray-50 rounded-l-md px-3 py-2 text-sm"
                >
                  <option value="">Select</option>
                  <option>US</option>
                  <option>IN</option>
                  <option>UK</option>
                </select>

                <input
                  {...register("phone", {
                    required: "Phone number required",
                    pattern: {
                      value: /^[0-9]{8,12}$/,
                      message: "Enter valid phone number",
                    },
                  })}
                  placeholder="+1 955 000 0000"
                  className="w-full px-3 py-2 border rounded-r-md"
                />
              </div>

              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <EmailInput
              label="Email-Id"
              name="email_id"
              placeholder="Enter Email"
              register={register}
              rules={{ required: "Email ID is required" }}
              error={errors.email_id}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium mb-1 block">State</label>
                <select
                  {...register("state", { required: "State is required" })}
                  className="w-full border bg-gray-50 rounded-md px-3 py-2"
                >
                  <option value="">Select State</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                  <option>Karnataka</option>
                </select>

                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state.message}</p>
                )}
              </div>

              <PinInput
                label="Pincode"
                name="pinCode"
                placeholder="Enter Pincode"
                register={register}
                rules={{ required: "Pincode is required" }}
                error={errors.pinCode}
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
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            <DateInput
              label="Hiring Date"
              name="date"
              placeholder="Jan 6, 2023"
              register={register}
              rules={{ required: "Date is required" }}
              error={errors.date}
            />

            <div>
              <label className="font-medium mb-1 block">
                Government ID Type
              </label>
              <select
                {...register("govIdType", {
                  required: "Government ID is required",
                })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select ID</option>
                <option>Aadhar Card</option>
                <option>Passport</option>
                <option>Driving License</option>
              </select>
              {errors.govIdType && (
                <p className="text-red-500 text-sm">
                  {errors.govIdType.message}
                </p>
              )}
            </div>

            {/* FILE UPLOAD */}
            <div className="mt-6">
              <label className="font-medium mb-2 block">
                Upload Files (ID & Offer Letter)
              </label>

              <div
                className="flex flex-col items-center justify-center bg-gray-200 py-10 rounded-xl shadow cursor-pointer hover:bg-gray-300"
                onClick={triggerUpload}
              >
                <FiUploadCloud className="text-3xl text-gray-600" />
                <p className="mt-1 text-violet-700 font-medium">
                  Click to upload
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  {...register("uploadFile", {
                    required: "Please upload a file",
                  })}
                />
              </div>

              {errors.uploadFile && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.uploadFile.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-3 rounded-md text-base font-medium"
        >
          Save Changes
        </button>
      </form>
    </FormLayout>
  );
}