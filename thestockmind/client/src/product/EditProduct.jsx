import React from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../common/FormLayout.jsx";
import {
  BaseInput,
  CharInput,
  NumberInput,
  NumCharInput,
  NumberSpecialInput,
} from "../common/FormInput.jsx";
import ActionButton from "../common/ActionButton.jsx";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
export default function EditProduct({onClose}) {
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    console.log("Updated Product:", data);
  };
 
  return (
    <FormLayout title="Edit Product" size="large" showCustom={true}  onClose={onClose} customText="Add Variants">
 
      {/* FORM */}
 
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5"
      >
        <CharInput
          label="Product Name"
          name="productName"
          placeholder="Ex: BoomHigh"
          rule={{ required: "Product name is required" }}
          error={errors.productName}
          register={register}
        />
 
        <NumCharInput
          label="Supplier ID"
          name="supplierId"
          placeholder="Ex: TUW10234"
          rule={{ required: "Supplier ID is required" }}
          error={errors.supplierId}
          register={register}
        />
 
        <NumberInput
          label="Weight (in lbs)"
          name="weight"
          placeholder="Enter Weight here"
          rule={{ required: "Weight is required" }}
          error={errors.weight}
          register={register}
        />
 
        <CharInput
          label="Category"
          name="category"
          placeholder="Vapes"
          rule={{ required: "Category is required" }}
          error={errors.category}
          register={register}
        />
 
        <BaseInput
          label="Dimension Unit"
          name="dimensionunit"
          placeholder="inch"
          rule={{ required: "Dimension Unit is required" }}
          error={errors.dimensionunit}
          register={register}
        />
 
        <NumberSpecialInput
          label="Dimensions (L × B × H)"
          name="dimension"
          placeholder="20 × 30 × 40"
          rule={{ required: "Dimension is required" }}
          error={errors.dimension}
          register={register}
        />
 
        <NumberInput
          label="Recorded Stock Level"
          name="recordedstock"
          placeholder="2000"
          rule={{ required: "Recorded Stock Level is required" }}
          error={errors.recordedstock}
          register={register}
        />
 
        <NumberInput
          label="Warning Threshold Stock Level"
          name="warningLevel"
          placeholder="100"
          rule={{ required: "Warning Threshold Stock Level is required" }}
          error={errors.warningLevel}
          register={register}
        />
 
        <NumberInput
          label="Auto Order Stock Level"
          name="autoOrderLevel"
          placeholder="150"
          rule={{ required: "Auto Order Stock Level is required" }}
          error={errors.autoOrderLevel}
          register={register}
        />
 
        <NumCharInput
          label="SKU Code"
          name="skuCode"
          placeholder="RTY1234455"
          rule={{ required: "SKU Code is required" }}
          error={errors.skucode}
          register={register}
        />
 
        <NumCharInput
          label="Barcode Number"
          name="barcode"
          placeholder="QWERTY0987"
          rule={{ required: "Barcode Number is required" }}
          error={errors.barcode}
          register={register}
        />
 
        <NumCharInput
          label="GRN Number (Optional)"
          name="grn"
          placeholder="GRN09876"
          rule={{}}
          error={errors.grn}
          register={register}
        />
 
        {/* IMAGE + PRICES */}
        <div className="col-span-1 sm:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6 min-w-0">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Image (400px × 400px)
            </label>
            <div className="relative h-40 bg-gray-50 border rounded-lg flex items-center justify-center cursor-pointer min-w-0">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                {...register("image")}
              />
              <FiUploadCloud className="text-4xl text-gray-400" />
            </div>
          </div>
 
          {/* Pricing */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <NumberInput
              label="Purchasing Price"
              name="purchasingprice"
              placeholder="Ex: $100"
              rule={{ required: "Purchasing Price is required" }}
              error={errors.purchasingprice}
              register={register}
            />
 
            <NumberInput
              label="Selling Price Margin"
              name="sellingmargin"
              placeholder="Ex: 20%"
              rule={{ required: "Selling Price Margin is required" }}
              error={errors.sellingmargin}
              register={register}
            />
 
            <div className="col-span-1 sm:col-span-2">
              <BaseInput
                label="Product Description"
                name="description"
                placeholder="Type something about product here"
                rule={{ required: "Product Description is required" }}
                error={errors.description}
                register={register}
              />
            </div>
          </div>
 
          {/* SUBMIT BUTTON */}
          <div className="col-span-1 sm:col-span-3 xl:col-span-3 mt-3">
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </FormLayout>
  );
}
 