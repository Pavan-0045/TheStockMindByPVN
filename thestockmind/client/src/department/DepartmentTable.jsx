import React, { useState } from "react";
import ActionButton from "../common/ActionButton";
import Pagination from "../common/Pagination";
import SearchInput from "../common/SearchInput";
import ExportButton from "../common/ExportButton";
import AddDepartmentForm from "./DepartmentForm/AddDepartmentForm";
import EditEmployeeForm from "./DepartmentForm/EditEmployeeForm";
import { FiEdit2, FiTrash2, FiToggleLeft, FiToggleRight } from "react-icons/fi";

//ROW COMPONENT

 const DepartmentTableRow = ({ department, onEdit, onToggle }) => {
 const { name, id, warehouseId, managerId, email, phone, isActive } = department;

  const [active, setActive] = useState(isActive);

  const handleToggle = () => {
    const newStatus = !active;
    setActive(newStatus);
    onToggle(id, newStatus);
  };

  return (
    <tr className="bg-white hover:bg-gray-50 transition border-b border-gray-100">

      <td className="px-3 py-3">
        <input type="checkbox" className="accent-purple-600" />
      </td>

      <td className="px-3 py-3 font-medium">{name}</td>
      <td className="px-3 py-3 text-gray-600">{id}</td>
      <td className="px-3 py-3 text-gray-600">{warehouseId}</td>
      <td className="px-3 py-3 text-gray-600">{managerId}</td>
      <td className="px-3 py-3 text-gray-600">{email}</td>
      <td className="px-3 py-3 text-gray-600">{phone}</td>

      <td className="px-3 py-3 flex items-center gap-3">

        {/* EDIT */}
        <FiEdit2
          className="text-purple-600 hover:text-purple-800 cursor-pointer"
          onClick={() => onEdit(department)}
        />

        {/* DELETE */}
        <FiTrash2 className="text-red-500 hover:text-red-700 cursor-pointer" />

        {/* TOGGLE */}
        {active ? (
          <FiToggleRight
            size={20}
            className="text-green-500 hover:text-green-700 cursor-pointer"
            onClick={handleToggle}
          />
        ) : (
          <FiToggleLeft
            size={20}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            onClick={handleToggle}
          />
        )}
      </td>
    </tr>
  );
};

// MAIN COMPONENT
const DepartmentTable = ({  activeStatus = "Active Department" }) => {
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Data
  const originalDepartments = [
    { name: "Administration-1", id: "BC2022110001", warehouseId: "BC2022110001", managerId: "BC2022110001", email: "phoneix.baker@h..", phone: "+91 8639724863", isActive: true },
    { name: "Finance", id: "BC2022110002", warehouseId: "BC2022110002", managerId: "BC2022110002", email: "lanasteiner@migh..", phone: "+91 8639724863", isActive: true },
    { name: "Dispatch", id: "BC2022110003", warehouseId: "BC2022110003", managerId: "BC2022110003", email: "dwilkinson@ion..", phone: "+91 8639724863", isActive: false },
    { name: "Board", id: "BC2022110004", warehouseId: "BC2022110004", managerId: "BC2022110004", email: "xing.wu@hyper.s..", phone: "+91 8639724863", isActive: true }
  ];

  const departments = activeStatus === "active" ? originalDepartments : [];
  const filtered = departments.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

  // Toggle handler
   const handleToggle = (id, status) => {
    console.log("Toggle =>", id, status);
  };

  return (
    <>
      {/* ADD MODAL */}
      {showAddModal && (
        <AddDepartmentForm
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* EDIT MODAL */}
      {showEditModal && (
        <EditEmployeeForm
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          department={selectedDepartment}
        />
      )}

      {/* MAIN WRAPPER */}
      <div className="rounded-xl shadow-sm mt-6 bg-white border border-gray-200">

        {/* HEADER */}
        <div className="px-4 py-3 border-b border-gray-200 bg-white flex flex-wrap justify-between items-center mb -4 gap-3">

          {/* SEARCH & FILTER */}
          <div className="flex items-center gap-1">
            <SearchInput/>
            <ActionButton text="Filter" iconName="filter" />
          </div>

          {/* ADD + EXPORT */}
          <div className="flex items-center gap-2">
            <ActionButton
              text="Add New Department"
              iconName="plus"
              onClick={() => setShowAddModal(true)}
              className="px-2 py-2 text-xs sm:text-sm sm:px-4 sm:py-2"
            />
            <ExportButton />
          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700 bg-white border-collapse">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Department Name</th>
                <th className="px-4 py-2">Department ID</th>
                <th className="px-4 py-2">Warehouse ID</th>
                <th className="px-4 py-2">Manager ID</th>
                <th className="px-4 py-2">Email ID</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-gray-500 py-6">
                    No Departments Found
                  </td>
                </tr>
              ) : (
                filtered.map((department) => (
                  <DepartmentTableRow
                    key={department.id}
                    department={department}
                    onEdit={(dept) => {
                      setSelectedDepartment(dept);
                      setShowEditModal(true);
                    }}
                    onToggle={handleToggle}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <Pagination/>
        </div>

      </div>
    </>
  );
};

export default DepartmentTable;
