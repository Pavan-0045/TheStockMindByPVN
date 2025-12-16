import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../common/FormLayout";
import { CharInput, NumCharInput } from "../common/BaseInput";

export default function CategoryForm({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      id: "",
      description: "",
    },
  });

  const isEditMode = !!initialData;

  useEffect(() => {
    if (initialData) {
      setValue("name", initialData.name);
      setValue("id", initialData.id);
      setValue("description", initialData.description);
    } else {
      reset();
    }
  }, [initialData, reset, setValue]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;
  const onFormSubmit = (data) => {
    const updated = isEditMode
      ? { ...initialData, ...data }
      : data;
    onSubmit(updated);
    onClose();
    reset();
  };

  return (
    <FormLayout
      title={isEditMode ? "Edit Category" : "Add New Category"}
      onClose={onClose}
      size="small"
    >
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="space-y-5 mt-2 w-full"
      >
        {/* Category Name */}
        <CharInput
          label="Category Name"
          name="name"
          placeholder="Enter category name"
          register={register}
          rules={{ required: "Category Name is required" }}
          error={errors.name}
        />

        {/* Category ID */}
        <NumCharInput
          label="Category ID"
          name="id"
          placeholder="Ex: BC2022110001"
          register={register}
          rules={{ required: "Category ID is required" }}
          error={errors.id}
          disabled={isEditMode}
        />

        {/* Description */}
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Description
          </label>

          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            rows="3"
            placeholder="Enter description"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none w-full"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold 
            hover:bg-purple-700 transition"
        >
          {isEditMode ? "Save Changes" : "Add New Category"}
        </button>
      </form>
    </FormLayout>
  );
}
