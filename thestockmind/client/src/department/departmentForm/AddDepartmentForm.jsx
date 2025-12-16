import React from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../../common/FormLayout";
import { CharInput, NumCharInput, DateInput } from "../../common/BaseInput";

const AddDepartmentForm = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  if (!isOpen) return null;

  return (
    <FormLayout
      title="Add New Department"
      size="medium"
      onClose={onClose}

      /* MATCH FORM LAYOUT PROPS */
      showUpload={true}
      uploadText="Bulk Upload"
      onUpload={() => alert("Bulk Upload Clicked")}

      
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <CharInput
            label="Department Name"
            name="departmentName"
            placeholder="Enter Department Name"
            register={register}
            rules={{ required: "Department Name is required" }}
            error={errors.departmentName}
          />

          <DateInput
            label="Date of Creation"
            name="dateOfCreation"
            register={register}
            rules={{ required: "Date is required" }}
            error={errors.dateOfCreation}
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          {/* Manager Dropdown */}
          <div>
            <label className="text-gray-600 font-medium text-sm mb-1 block">
              Assign Manager
            </label>

            <select
              {...register("manager", { required: "Manager is required" })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Choose Manager</option>
              <option value="John Doe">John Doe</option>
              <option value="Sarah Smith">Sarah Smith</option>
              <option value="Emma Wilson">Emma Wilson</option>
            </select>

            {errors.manager && (
              <p className="text-red-500 text-xs mt-1">
                {errors.manager.message}
              </p>
            )}
          </div>

          {/* Warehouse Input */}
          <NumCharInput
            label="Warehouse ID"
            name="warehouseId"
            placeholder="Enter Warehouse ID"
            register={register}
            rules={{ required: "Warehouse ID is required" }}
            error={errors.warehouseId}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition"
        >
          Add New Department
        </button>

      </form>
    </FormLayout>
  );
};

export default AddDepartmentForm;