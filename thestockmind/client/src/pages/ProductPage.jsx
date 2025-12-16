import React, { useState } from "react";
import DateRangeSelector from "../components/common/DateRangeSelector";
import ActionButton from "../components/common/ActionButton";
import ProductTable from "../components/product/ProductTable";
import Pagination from "../components/common/Pagination";
import AddProductForm from "../components/product/AddProductForm";
import AddCustomField from "../components/product/AddCustomField";
import SearchInput from "../components/common/SearchInput";
import ExportButton from "../components/common/ExportButton";
import DeleteProduct from "../components/product/DeleteProduct";
import EditProduct from "../components/product/EditProduct";
import ProductLayout from "../layout/ProductLayout";
import { Link } from "react-router-dom";

export default function ProductPage({
  page = 1,
  totalPages = 10,
  onPageChange,
}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showCustomField, setShowCustomField] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [products, setProducts] = useState([
    {
      name: "Droned Vape",
      image: "./src/assets/ProductImages/product1.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "Traditional Vapes",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
      action: "+5",
    },
    {
      name: "Crosscut E-Cig",
      image: "./src/assets/ProductImages/product2.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "E-Cigarettes",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
    },
    {
      name: "Cultyvate",
      image: "./src/assets/ProductImages/product3.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "Edibles",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
      action: "+5",
    },
    {
      name: "Demi High",
      image: "./src/assets/ProductImages/product4.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "Edibles",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
    },
    {
      name: "Candice Wu",
      image: "./src/assets/ProductImages/product5.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "Edibles",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
      action: "+5",
    },
    {
      name: "Natali Craig",
      image: "./src/assets/ProductImages/product6.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "E-Cigarettes",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
    },
    {
      name: "Drew Cano",
      image: "./src/assets/ProductImages/product7.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "Edibles",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
      action: "+5",
    },
    {
      name: "Orlando Diggs",
      image: "./src/assets/ProductImages/product8.png",
      productId: "TUX001234",
      supplierId: "REMA0123",
      category: "E-Cigarettes",
      price: "$4500",
      weight: "3 lb",
      stock: "12000",
      reorder: "15000",
    },
  ]);

  const [productIndexToDelete, setProductIndexToDelete] = useState(null);

  const confirmDelete = (index) => setProductIndexToDelete(index);

  const handleDelete = () => {
    setProducts((prev) =>
      prev.filter((_, idx) => idx !== productIndexToDelete)
    );
    setProductIndexToDelete(null);
  };

  const cancelDelete = () => setProductIndexToDelete(null);

  return (
    <ProductLayout>
      <Link to="/products"></Link>

      <div className=" flex-1 p-3 sm:p-4 md:p-5  bg-gray-50 min-h-screen">
        <button className="text-sm text-indigo-600 hover:underline mt-6 md:mt-2">
          ← Back
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-3 mb-4">
          <h1 className="text-2xl font-semibold">Products</h1>

          <div className="flex flex-wrap gap-2">
            <DateRangeSelector />
            <ActionButton text="Select Dates" iconName="calendar" />
          </div>
        </div>

        {/* main content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 ">
          {/* search row */}
          <div className="flex flex-col sm:flex-row justify-between  mb-4 p-2 gap-3">
            <div className="flex items-center gap-1 mt-2 ">
              <SearchInput placeholder="Search" />
              <ActionButton text="Filters" iconName="filter" />
            </div>
            <div className="flex flex-row items-end  gap-1">
              <ActionButton
                text="Add New Product"
                iconName="plus"
                onClick={() => setShowAddForm(true)}
                className="px-4 py-1 text-xs sm:text-sm sm:px-4 sm:py-2 whitespace-nowrap w-full"
              />
              <ExportButton className="px-2  whitespace-nowrap w-full" />
            </div>
          </div>

          {/* table */}
          <div className="overflow-x-auto w-full -mt-1">
            <div className="min-w-max">
              <ProductTable
                products={products}
                onDelete={confirmDelete}
                onEdit={() => setShowEditModal(true)}
              />
            </div>
          </div>

          {/* PAGINATION */}
          <div className="px-3 py-4 bg-gray-50 flex justify-center md:justify-between text-gray-500 text-sm ">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>

        {/* ADD PRODUCT MODAL */}
        {showAddForm && (
          <div >
            <AddProductForm onClose={() => setShowAddForm(false)} />

            {!showCustomField ? (
              <AddProductForm
                onAddCustomField={() => setShowCustomField(true)}
                onClose={() => setShowAddForm(false)}
              />
            ) : (
              <AddCustomField onClose={() => setShowCustomField(false)} />
            )}
          </div>
        )}

        {/* EDIT PRODUCT MODAL */}
        {showEditModal && (
          <div >
            <EditProduct onClose={() => setShowEditModal(false)} />
          </div>
        )}

        {/* DELETE MODAL */}
        {productIndexToDelete !== null && (
          <DeleteProduct onYes={handleDelete} onNo={cancelDelete} />
        )}
      </div>
    </ProductLayout>
  );
}
