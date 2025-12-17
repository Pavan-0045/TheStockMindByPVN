import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import Pagination from "../common/Pagination";
import EmployeeModal from "./EmployeeModal";
import EditEmployeeModal from "./EmployeeEditModal";
import { FunnelIcon, PlusIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Pencil, Trash2, ToggleRight, } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Employee() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      name: "Phoenix Baker",
      id: "EMP2022110001",
      dept: "Finance",
      warehouse: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      phone: "+1 8639724863",
    },
    {
      name: "Lana Steiner",
      id: "EMP2022110002",
      dept: "HR",
      warehouse: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      phone: "+1 8639724863",
    },
    {
      name: "Demi Wilkinson",
      id: "EMP2022110003",
      dept: "Sales",
      warehouse: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      phone: "+1 8639724863",
    },
    {
      name: "Candice Wu",
      id: "EMP2022110004",
      dept: "Logistics",
      warehouse: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      phone: "+1 8639724863",
    },
  ];

  const [activeTab, setActiveTab] = useState("Active");
  const navigate = useNavigate();

  const cards = [
    { title: "Active Employees", value: 100, description: "↑ 12% vs last month", key: "Active" },
    { title: "Inactive Employees", value: 19, description: "↓ 12% vs last month", key: "Inactive" },
    { title: "Deleted Employees", value: 10, description: "↑ 12% vs last month", key: "Deleted" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const handleSearchChange = (value) => {
    setSearchTerm(value.toLowerCase());
    setPage(1);
  };

  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchTerm) ||
      e.dept.toLowerCase().includes(searchTerm) ||
      e.warehouse.toLowerCase().includes(searchTerm) ||
      e.phone.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-6">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-purple-600 font-medium hover:no-underline mr-280"
      >
        ← Back
      </button>

      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Employee</h1>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.key}
            onClick={() => setActiveTab(card.key)}
            className={`cursor-pointer rounded-xl p-4 sm:p-5 shadow-md transition ${
              activeTab === card.key ? "bg-purple-600 text-white" : "bg-white hover:bg-purple-50"
            }`}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{card.title}</h3>
            <p className="text-3xl sm:text-4xl font-bold mt-2">{card.value}</p>
            <p
              className={`text-sm mt-1 ${
                activeTab === card.key ? "text-purple-100" : "text-gray-500"
              }`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">{activeTab} Employees</h2>

    {/* MAIN TABLE CONTAINER */}
      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
         {activeTab !== "Active" ? (
          <div className="text-center py-10 text-gray-400">
            No data available for {activeTab} employees.
          </div>
        ) : (
          <>
            {/* SEARCH + BUTTONS */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              
              {/* Search + Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SearchInput
                  value={searchTerm}
                  onChange={(v) => setSearchTerm(v)}
                  placeholder="Search employee..."
                  className="w-full sm:w-64"
                />
                <button className="flex items-center gap-1 border rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 shrink-0" >
                <FunnelIcon className="w-4 h-4" />
                <span className="hidden sm:block">Filters</span>
                </button>
                </div>

              {/* Add + Export */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700"
                >
                  <PlusIcon className="w-4 h-4" /> Add New Employee
                </button>

                <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
                  <ArrowDownTrayIcon className="w-4 h-4" /> Export
                </button>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm text-left border-t">
                <thead className="text-gray-600 border-b bg-gray-50">
                  <tr>
                    <th className="py-3 px-4">Employee Name</th>
                    <th className="py-3 px-4">Employee ID</th>
                    <th className="py-3 px-4">Department</th>
                    <th className="py-3 px-4">Warehouse ID</th>
                    <th className="py-3 px-4">Hire Date</th>
                    <th className="py-3 px-4">Phone Number</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedEmployees.length > 0 ? (
                    paginatedEmployees.map((e, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        
                        {/* Employee Data Columns */}
                        <td className="py-3 px-4">{e.name}</td>
                        <td className="py-3 px-4">{e.id}</td>
                        <td className="py-3 px-4">{e.dept}</td>
                        <td className="py-3 px-4">{e.warehouse}</td>
                        <td className="py-3 px-4">{e.hireDate}</td>
                        <td className="py-3 px-4">{e.phone}</td>

                        {/* Actions */}
                        <td className="py-3 px-4 flex gap-3 items-center">
                          {/* Edit */}
                          <button
                            onClick={() => {
                              setSelectedEmployee(e);
                              setEditModalOpen(true);
                            }}
                            className="text-purple-600 hover:text-purple-800"
                          >
                            <Pencil size={18} />
                          </button>

                          {/* Delete */}
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                          </button>

                          {/* Toggle */}
                          <button className="text-gray-600 hover:text-black">
                            <ToggleRight size={22} className="text-gray-900" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                        No employees found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="mt-4 flex justify-center">
              <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          </>
        )}
      </div>

      {/* ADD EMPLOYEE MODAL */}
      {isModalOpen && (
        <EmployeeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      )}

      {/* EDIT EMPLOYEE MODAL */}
      {isEditModalOpen && (
        <EditEmployeeModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          existingData={selectedEmployee}
        />
      )}
    </div>
  );
}
