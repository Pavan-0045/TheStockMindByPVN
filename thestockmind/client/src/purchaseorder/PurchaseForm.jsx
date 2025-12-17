import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormLayout from "../common/FormLayout";
import { NumberInput, NumCharInput } from "../common/FormInputs";
import { FiPlus } from "react-icons/fi";

export default function PurchaseForm({ onConfirm, onClose }) {
  const { 
      register, 
      control,
      handleSubmit, 
      formState: { errors } }
           = useForm({
             defaultValues: {
                 products: [
                     { productID: "", quantity: "", purchasePrice: "", totalPrice: "" },
               ],
                  supplierID: "",
             },
      });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const submitForm = (data) => {
    console.log("Submitted:", data);
    if (onConfirm) onConfirm(data);
  };

  return (
    <FormLayout title="Create New Purchase Order" size="horizon" onClose={onClose}>
      <form onSubmit={handleSubmit(submitForm)} className="px-2 w-">

        {/* PRODUCT LIST */}
        <div className="space-y-6">
          {fields.map((item, index) => (
            <div key={item.id} className="relative">

              <div className="px-2 mt-2 grid grid-cols-2 lg:grid-cols-4 gap-4">

                <NumCharInput
                  label="Product ID"
                  name="productID"
                  placeholder="Ex: TUX1234"
                  register={register}
                  rules={{ required: "Product ID is required" }}
                  error={errors.productID}
                />

                <NumberInput
                  label="Quantity"
                  name="quantity"
                  placeholder="Enter quantity"
                  register={register}
                  rules={{ required: "Quantity is required" }}
                  error={errors.quantity}
                />

                <NumberInput
                  label="Purchase Price / Unit"
                  name="purchasePrice"
                  placeholder="$120"
                  register={register}
                  rules={{ required: "Unit price is required" }}
                  error={errors.purchasePrice}
                />
                
                <NumberInput
                  label="Total Product Price"
                  name="productPrice"
                  placeholder="Enter total price"
                  register={register}
                  rules={{ required: "Total price is required" }}
                  error={errors.productPrice}
                />
              </div>

              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 text-red-500 text-xl mr-2"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ADD MORE */}
        <div className="mt-2 px-8 py-2 flex justify-center">
          <button
            type="button"
            onClick={() =>
              append({
                productID: "",
                quantity: "",
                purchasePrice: "",
                totalPrice: "",
              })
            }
            className="flex items-center space-x-2 font-semibold cursor-pointer"
          >
            <div className="border-2 border-violet-800 text-violet-800 w-5 h-5 flex items-center justify-center rounded-full">
              <FiPlus className="text-sm" />
            </div>
            <span className="text-violet-800 text-sm">Add More Products</span>
          </button>
        </div>

        <hr className="my-4 mt-16 text-gray-400 border" />

        {/* SUPPLIER */}
        <div className="px-8 pb-2 flex flex-col gap-2 md:flex-row md:gap-10 lg:flex-row lg:gap-16 items-center ">

        <div className="lg:w-80 w-78">
          <NumCharInput
            label="Supplier ID"
            name="supplierID"
            placeholder="Ex: TUW10234"
            register={register}
            rules={{ required: "Supplier ID is required" }}
            error={errors.supplierID}
          />
        </div>

          <button
            type="submit"
            className="w-78 mt-4 lg:w-full bg-violet-700 text-white px-6 py-3 rounded-xl hover:bg-violet-800"
          >
            Place Purchase Order
          </button>

        </div>
      </form>
    </FormLayout>
  );
}




