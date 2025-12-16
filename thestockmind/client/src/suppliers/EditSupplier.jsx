import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../common/FormLayout";
import { CharInput,EmailInput,PinInput,} from "../common/BaseInput";

export default function EditSupplier({ isOpen, onClose, initialData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  if (!isOpen) return null;

  const onSubmit = (data) => {
  
    onClose();
  };

  return (
    <FormLayout title="Edit Supplier" onClose={onClose} size="medium">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* GRID ROW 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CharInput
            label="Full Name"
            name="fullName"
            register={register}
            rules={{ required: "Full Name is required" }}
            error={errors.fullName}
            placeholder="Enter Full Name"
          />

          <CharInput
            label="Contact Name"
            name="contactName"
            register={register}
            rules={{ required: "Contact Name is required" }}
            error={errors.contactName}
            placeholder="Enter Contact Name"
          />
        </div>

        {/* Phone */}
        <div className="md:col-span-2">
              <label className="block font-medium mb-1">Phone number</label>

              <div className="flex">
                {/* Country */}
                <select
                  {...register("country")}
                  className="border rounded-l-md px-3 py-2 outline-none bg-white"
                >
                  <option value="US">US</option>
                  <option value="IN">IN</option>
                  <option value="UK">UK</option>
                </select>

                {/* Phone number */}
                <input
                  type="text"
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="Enter phone"
                  className="flex-1 border rounded-r-md px-3 py-2 outline-none"
                />
              </div>

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

        {/* Email */}
        <div className="mt-2">
          <EmailInput
            label="Email-Id"
            name="email"
            register={register}
            rules={{ required: "Email is required" }}
            error={errors.email}
            placeholder="Enter your Email-ID"
          />
        </div>

        {/* GRID ROW 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <CharInput
            label="State"
            name="state"
            register={register}
            rules={{ required: "State is required" }}
            error={errors.state}
            placeholder="Select your state"
          />

          <PinInput
            label="Pincode"
            name="pin"
            register={register}
            error={errors.pin}
            placeholder="Enter Pincode"
          />
        </div>

        {/* Address */}
        <div className="mt-2">
          <CharInput
            label="Address"
            name="address"
            register={register}
            rules={{ required: "Address is required" }}
            error={errors.address}
            placeholder="Enter your Address"
          />
        </div>

        {/* SAVE BUTTON */}
        <button
          type="submit"
          className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-base font-medium"
        >
          Save Changes
        </button>
      </form>
    </FormLayout>
  );
}
