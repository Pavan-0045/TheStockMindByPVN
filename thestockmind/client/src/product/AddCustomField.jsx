import React, { useState } from "react";

import FormLayout from "../common/FormLayout.jsx";

import {

  BaseInput,

  CharInput,

  NumberInput,

  NumCharInput,

  NumberSpecialInput,

} from "../common/FormInput.jsx";

import ActionButton from "../common/ActionButton.jsx";
 
export default function AddCustomField({onClose}) {

  const [formData, setFormData] = useState({

    existingSystemField: "yes",

    chooseFieldType: "",

    dimensionUnit: "",

    dimensions: "",

    recordedStock: "",

    warningStock: "",

    autoOrderStock: "",

    skuCode: "",

    barcode: "",

    grnNumber: "",

    purchasingPrice: "",

    sellingMargin: "",

    description: "",

    image: null,

  });
 
  const register = () => ({});
 
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };
 
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Final Custom Field Data:", formData);

  };
 
  return (


 <FormLayout title="Add Custom Field" size="large" showCustom={true} onClose= {onClose} customText="Add More  ">
 
       
      <form

        onSubmit={handleSubmit}

        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-6 mt-5"
>

        {/* RADIO + DIMENSIONS + FIELD TYPE */}
<div className="col-span-1 sm:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Radio */}
<div>
<label className="font-semibold text-gray-500 block mb-2">

              Select from Existing System Fields
</label>
 
            <div className="flex gap-6">
<label className="flex items-center space-x-2 cursor-pointer">
<input

                  type="radio"

                  name="existingSystemField"

                  value="yes"

                  checked={formData.existingSystemField === "yes"}

                  onChange={handleChange}

                  className="w-4 h-4 text-indigo-600"

                />
<span className="text-gray-700">Yes</span>
</label>
 
              <label className="flex items-center space-x-2 cursor-pointer">
<input

                  type="radio"

                  name="existingSystemField"

                  value="no"

                  checked={formData.existingSystemField === "no"}

                  onChange={handleChange}

                  className="w-4 h-4 text-indigo-600"

                />
<span className="text-gray-700">No</span>
</label>
</div>
</div>
 
          {/* Choose field + dimension */}
<div className="grid grid-cols-1 gap-4">
<CharInput

              label="Choose Field Type"

              name="chooseFieldType"

              placeholder="Ex: Text / Number / Dropdown"

              value={formData.chooseFieldType}

              onChange={handleChange}

              register={register}

            />
 
            <CharInput

              label="Dimension Unit"

              name="dimensionUnit"

              placeholder="Ex: cm / inch"

              value={formData.dimensionUnit}

              onChange={handleChange}

              register={register}

            />
</div>
 
          {/* Full dimension */}
<div className="min-w-0">
<NumberSpecialInput

              label="Dimensions (L×B×H)"

              name="dimensions"

              placeholder="Ex: 20×15×10"

              value={formData.dimensions}

              onChange={handleChange}

              register={register}

            />
</div>
</div>
 
        {/* OTHER FIELDS */}
<NumberInput

          label="Recorded Stock Level"

          name="recordedStock"

          placeholder="Ex: 2000"

          value={formData.recordedStock}

          onChange={handleChange}

          register={register}

        />
 
        <NumberInput

          label="Warning Threshold Stock Level"

          name="warningStock"

          placeholder="Ex: 100"

          value={formData.warningStock}

          onChange={handleChange}

          register={register}

        />
 
        <NumberInput

          label="Auto Order Stock Level"

          name="autoOrderStock"

          placeholder="Ex: 20"

          value={formData.autoOrderStock}

          onChange={handleChange}

          register={register}

        />
 
        <NumCharInput

          label="SKU Code"

          name="skuCode"

          placeholder="RTY1234455"

          value={formData.skuCode}

          onChange={handleChange}

          register={register}

        />
 
        <NumCharInput

          label="Barcode Number"

          name="barcode"

          placeholder="QWERTY0987"

          value={formData.barcode}

          onChange={handleChange}

          register={register}

        />
 
        <NumCharInput

          label="GRN Number (Optional)"

          name="grnNumber"

          placeholder="GRN09876"

          value={formData.grnNumber}

          onChange={handleChange}

          register={register}

        />
 
        {/* IMAGE + PRICE + DESCRIPTION */}
<div className="col-span-1 sm:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">

          {/* Image Upload */}
<div className="min-w-0">
<label className="text-sm mb-1 font-medium block">

              Insert Image (400px × 400px)
</label>
 
            <div className="relative h-40 bg-gray-50 border rounded-lg flex items-center justify-center cursor-pointer overflow-hidden">
<input

                type="file"

                name="image"

                accept="image/*"

                className="absolute inset-0 opacity-0 cursor-pointer"

                onChange={(e) =>

                  setFormData({ ...formData, image: e.target.files[0] })

                }

              />
 
              {formData.image ? (
<img

                  src={URL.createObjectURL(formData.image)}

                  className="h-full w-full object-cover rounded-lg"

                />

              ) : (
<span className="text-gray-500 text-sm">

                  Click to upload image
</span>

              )}
</div>
</div>
 
          {/* Price + Description */}
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
<NumberInput

              label="Purchasing Price"

              name="purchasingPrice"

              placeholder="Ex: $100"

              value={formData.purchasingPrice}

              onChange={handleChange}

              register={register}

            />
 
            <NumberInput

              label="Selling Price Margin"

              name="sellingMargin"

              placeholder="Ex: 20%"

              value={formData.sellingMargin}

              onChange={handleChange}

              register={register}

            />
 
            <div className="col-span-1 sm:col-span-2 min-w-0">
<CharInput

                label="Product Description"

                name="description"

                placeholder="Type something about product..."

                value={formData.description}

                onChange={handleChange}

                register={register}

              />
</div>
</div>
</div>
 
        {/* SUBMIT */}
<div className="col-span-1 sm:col-span-2 xl:col-span-3 mt-3">
<button

            type="submit"

            className="w-full bg-indigo-600 text-white py-3 rounded-lg"
>

            Add Field
</button>
</div>
</form>
</FormLayout>

  );

}

 