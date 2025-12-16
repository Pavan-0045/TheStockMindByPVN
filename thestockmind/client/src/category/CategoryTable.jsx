import React, { useState } from "react";
import ActionButton from "../common/ActionButton";
import SearchInput from "../common/SearchInput";
import ExportButton from "../common/ExportButton";
import Pagination from "../common/Pagination";
import img1 from "../../assets/CategoryImage/image1.png";
import img2 from "../../assets/CategoryImage/image2.png";
import img3 from "../../assets/CategoryImage/image3.png";
import img4 from "../../assets/CategoryImage/image4.png";
import img5 from "../../assets/CategoryImage/image5.png";
import CategoryForm from "./CategoryForm";

import { FiEdit2, FiTrash2, FiToggleLeft, FiToggleRight } from "react-icons/fi";

const CategoryTableRow = ({ category, onEdit, onDelete, onToggle }) => {
  const { name, id, description, products, isActive } = category;
  const [active, setActive] = useState(isActive);

  const handleToggle = () => {
    const newStatus = !active;
    setActive(newStatus);
    if (onToggle) onToggle(id, newStatus);
  };

  return (
    <tr className="bg-white hover:bg-[rgba(249,250,251,1)] transition-colors">
      <td className="px-4 py-3">
        <input type="checkbox" className="accent-purple-600" />
      </td>

      <td className="px-4 py-3 font-medium whitespace-nowrap">{name}</td>
      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{id}</td>
      <td className="px-4 py-3 text-gray-500">{description}</td>

      <td className="px-6 py-3 min-w-[140px]">
        <div className="flex items-center -space-x-2">
          {products.slice(0, 5).map((img, i) => (
            <img
              key={i}
              src={img}
              alt="product"
              className="w-6 h-6 rounded-full border-2 border-gray-200"
            />
          ))}
        </div>
      </td>

      <td className="px-3 py-3 flex space-x-3 items-center">
        <FiEdit2
          className="text-purple-600 hover:text-purple-800 cursor-pointer"
          onClick={() => onEdit(category)}
        />
        <FiTrash2
           className="text-red-500 hover:text-red-700 cursor-pointer"
           onClick={() => onDelete(category)} />

        {active ? (
          <FiToggleRight
            className="text-green-500 hover:text-green-700 cursor-pointer"
            size={20}
            onClick={handleToggle}
          />
        ) : (
          <FiToggleLeft
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            size={20}
            onClick={handleToggle}
          />
        )}
      </td>
    </tr>
  );
};

  //  TABLE COMPONENT
const CategoryTable = ({ activeStatus = "Active Categories" }) => {
  const [search, setSearch] = useState("");
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [categories, setCategories] = useState([
    {
      name: "Food & Beverages",
      id: "BC2022110001",
      description: "Provide the solution given or the last conversation with customer",
      products: [img1, img2, img3, img4, img5],
      isActive: true,
    },
    {
      name: "E-Ciggs",
      id: "BC2022110002",
      description: "Provide the solution given or the last conversation with customer",
      products: [img1, img2, img3, img4, img5],
      isActive: true,
    },
    {
      name: "FMCG",
      id: "BC2022110003",
      description: "Provide the solution given or the last conversation with customer",
      products: [img1, img2, img3, img4, img5],
      isActive: true,
    },
    {
      name: "Bakery & Confectionery",
      id: "BC2022110004",
      description: "Provide the solution given or the last conversation with customer",
      products: [img1, img2, img3, img4, img5],
      isActive: true,
    },
  ]);

  const displayed = activeStatus === "Active Categories" ? categories : [];
  const filtered = displayed.filter((c) =>c.name.toLowerCase().includes(search.toLowerCase()));

  /* Add */
  const handleAdd = (newCat) =>{setCategories([...categories,{ ...newCat, products: [img1, img2, img3, img4, img5], isActive: true },]);
    setShowFormModal(false); };

  /* Edit */
  const handleEditSubmit = (updatedCategory) => {setCategories(categories.map((cat) =>cat.id === updatedCategory.id ? updatedCategory : cat));
    setShowFormModal(false);};

  return (
    <div className="rounded-xl shadow-sm mt-6 bg-white border border-gray-200">

      {/* HEADER */}
      <div className="px-4 py-3 border-b border-gray-200 bg-white flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-1">
          <SearchInput />
          <ActionButton text="Filter" iconName="filter" />
        </div>

        <div className="flex items-center gap-2">
          {activeStatus === "Active Categories" && (
            <ActionButton
              text="Add New Category"
              iconName="plus"
              onClick={() => {
                setSelectedCategory(null);
                setShowFormModal(true);
              }}
              className="px-2 py-2 text-xs sm:text-sm sm:px-4 sm:py-2 whitespace-nowrap"
            />
          )}
          <ExportButton />
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700 bg-white border-collapse">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3">Category Name</th>
              <th className="px-4 py-3">Category ID</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Products</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
             {filtered.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No Categories Found
                </td>
              </tr>
            ) : (
              filtered.map((category) => (
                <CategoryTableRow
                  key={category.id}
                  category={category}
                  onEdit={() => {
                    setSelectedCategory(category);
                    setShowFormModal(true);
                  }}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="px-4 py-3 bg-gray-50"> <Pagination /></div>

      {/* MODAL */}
       {showFormModal && (
        <CategoryForm
          isOpen={showFormModal}
          onClose={() => setShowFormModal(false)}
          onSubmit={selectedCategory ? handleEditSubmit : handleAdd}
          initialData={selectedCategory}
        />
      )}

    </div>
  );
};
export default CategoryTable;
