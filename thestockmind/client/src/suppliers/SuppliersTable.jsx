import React, { useState } from "react";
import ExportButton from "../common/ExportButton";
import SearchInput from "../common/SearchInput";
import Pagination from "../common/Pagination";
import ActionButton from "../common/ActionButton";
import AddSupplier from "./AddSupplier";
import EditSupplier from "./EditSupplier";

import img1 from "../../assets/SupplierImages/Avatar.png";
import img2 from "../../assets/SupplierImages/Lana.png";
import img3 from "../../assets/SupplierImages/Demi.png";
import img4 from "../../assets/SupplierImages/Candice.png";

import { Trash2, Pencil, ToggleRight, ToggleLeft } from "lucide-react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function SuppliersTable() {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Phoenix Baker",
      supplierId: "BC2022110001",
      contact: "Mr. Baker",
      email: "phoenix.baker@hotmail.com",
      address: "Minnesota",
      phone: "+1 9659724347",
      image: img1,
      
    },
    {
      id: 2,
      name: "Lana Steiner",
      supplierId: "BC2022110002",
      contact: "Lana",
      email: "lana.steiner@mightyvapes.com",
      address: "New York",
      phone: "+1 8639724863",
      image: img2,
     
    },
    {
      id: 3,
      name: "Demi Wikinson",
      supplierId: "BC2022110003",
      contact: "Ms.Wikinson",
      email: "dwikinson@longpiper.us",
      address: "California",
      phone: "+1 9536724863",
      image: img3,
      
    },
    {
      id: 4,
      name: "Candice Wu",
      supplierId: "BC2022110004",
      contact: "Candice",
      email: "xing.wu@hyper.space",
      address: "Texas",
      phone: "+1 9536724863",
      image: img4,
     
    },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingData, setEditingData] = useState(null);

  const handleDelete = (id) =>
    setSuppliers((prev) => prev.filter((s) => s.id !== id));

  const handleToggle = (id) =>
    setSuppliers((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, isActive: !s.isActive } : s
      )
    );

  const filtered = suppliers;

  return (
    <div className=" flex-1 mt-4 bg-white border border-gray-200 rounded-xl">
      

        {/* TOP BAR */}
        <div className="flex flex-col  md:flex-col justify-between gap-3 mt-2 mb-5 ">
          <div className="flex flex-col sm:flex-row justify-between  mb-2 p-2 gap-3">
            <div className="flex items-center gap-1 mt-2 ">
              <SearchInput placeholder="Search" />
              <ActionButton text="Filters" iconName="filter" />
            </div>
            <div className="flex flex-row items-end  gap-1">
              <ActionButton
                text="Add Supplier"
                iconName="plus"
                onClick={() => setIsAddOpen(true)}
                className="px-4 py-1 text-xs sm:text-sm sm:px-4 sm:py-2 whitespace-nowrap w-full"
              />
              <ExportButton className="px-2  whitespace-nowrap w-full" />
            </div>
          </div>
    
        {/* TABLE */}
        <div className="relative w-full overflow-x-auto ">
          <table className="overflow-x-auto w-full text-sm text-gray-700 table-auto min-w-max">
            <thead className="bg-[#F9FAFB] border-b border-gray-200 text-gray-500 text-center">
              <tr>
                <th className="p-4 "></th>
                <th className="p-4">Contact Name</th>
                <th className="p-4">Supplier ID</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Email</th>
                <th className="p-4">Address</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
{/* line between data*/}
            <tbody className="divide-y divide-gray-200">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50 transition">
                  
                  {/* Checkbox */}
                  <td className="p-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300"
                    />
                  </td>

                  {/* Contact Name */}
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      <img
                      src={s.image}
                      className="w-10 h-10 rounded-full object-cover shadow-sm"
                      />
                      <span className="font-medium]">
                        {s.name}
                      </span>
                    </div>
                  </td>

                  {/* Supplier ID */}
                  <td className="p-2">{s.supplierId}</td>

                  {/* Contact */}
                  <td className="p-2 text-[#667085]">{s.contact}</td>

                  {/* Email */}
                  <td className="p-2"> {s.email} </td>

                  {/* Address */}
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#667085] text-sm">
                        {s.address}
                      </span>

                      <span
                        className="bg-gray-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-full leading-none flex items-center justify-center"
                        title={s.address}
                      >
                        <EllipsisHorizontalIcon className="w-3 h-3 text-[#373737]" />
                      </span>
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="p-4 whitespace-nowrap">{s.phone}</td>

                  {/* Actions */}
                  <td className="p-2">
                    <div className="flex items-center gap-4">
                      <Pencil
                        size={18}
                        className="text-purple-600 cursor-pointer hover:text-purple-800"
                        onClick={() => {
                          setEditingData(s);
                          setIsEditOpen(true);
                        }}
                      />

                      <Trash2
                        className="w-5 h-5 text-red-600 cursor-pointer hover:text-red-800 transition"
                        onClick={() => handleDelete(s.id)}
                      />

                      <div
                        onClick={() => handleToggle(s.id)}
                        className="cursor-pointer"
                      >
                        {s.isActive ? (
                          <ToggleRight size={28} className="text-green-500" />
                        ) : (
                          <ToggleLeft size={28} className="text-gray-400" />
                        )}
                      </div>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div >
          <Pagination />
        </div>

        {/* ADD MODAL */}
        <AddSupplier
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}     
        />

        {/* EDIT MODAL */}
        <EditSupplier
          isOpen={isEditOpen}
          initialData={editingData}
          onClose={() => setIsEditOpen(false)}
       />
</div>
</div>
  );
}
