//AddEmployee
 
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../layouts/FormLayout";
 
import { FiUploadCloud, FiX } from "react-icons/fi";
import {
  CharInput,
  DateInput,
  EmailInput,
  PinInput,
} from "../common/FormInputs";
 
export default function EmployeeModal({onClose}) {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
 
  const triggerUpload = () => fileInputRef.current?.click();
 
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
 
    if (file) {
      setSelectedFileName(file.name);
 
      setValue("uploadFile", file, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };
 
  const removeFile = () => {
    setSelectedFileName(null);
 
    setValue("uploadFile", null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
 
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
 
  
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
 
  return (
    <FormLayout
      title="Add New Employee"
      size="large"
      showUpload={true}
      uploadText="Bulk upload"
      onClose={onClose}
      showBulkUpload={true}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

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
                  {...register("country")}
                  className="border bg-gray-50 rounded-l-md px-3 py-2 text-sm
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
                  type="text"
                  placeholder="+1 955 000 0000"
                  className="w-full px-3 py-2 border rounded-r-md
                      outline-none focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500"
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
              placeholder="Enter your Email ID"
              register={register}
              rules={{ required: "Email ID is required" }}
              error={errors.email_id}
            />
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium mb-1 block">State</label>
 
                <select
                  {...register("state", { required: "State is required" })}
                  className="w-full border bg-gray-50 rounded-md px-3 py-2 text-sm
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your State</option>
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
              placeholder="Enter your Address"
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
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Specific ID</option>
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
 
            {/* FILE UPLOAD SECTION */}
            <div className="mt-16">
              <label className="font-medium mb-2 block">
                Upload Files (ID & Offer Letter)
              </label>
 
              <div
                className="flex flex-col items-center justify-center bg-gray-200 py-10 px-4
                            shadow-md rounded-xl cursor-pointer hover:bg-gray-300 transition"
                onClick={triggerUpload}
              >
                <FiUploadCloud className="text-3xl text-gray-600" />
                <p className="mt-1 text-violet-700 font-medium">
                  Click to upload
                </p>
                <p className="mt-1 text-gray-500 font-medium">
                  SVG, PNG, JPG, or PDF (max - 2MB)
                </p>
 
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".png,.jpg,.jpeg,.svg,.pdf"
                  onChange={handleFileSelect}
                />
              </div>
 
              {/* FILE PREVIEW */}
              {selectedFileName && (
                <div className="flex justify-between items-center mt-3 p-2 bg-gray-100 rounded-md">
                  <span className="text-gray-700">{selectedFileName}</span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              )}
 
              {/* Validation field */}
              <input
                type="hidden"
                {...register("uploadFile", {
                  required: "Please upload a file",
                })}
              />
 
              {errors.uploadFile && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.uploadFile.message}
                </p>
              )}
            </div>
          </div>
        </div>
 
        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-2 rounded-md mt-6"
        >
          Add New Employee
        </button>
      </form>
    </FormLayout>
  );
}
 