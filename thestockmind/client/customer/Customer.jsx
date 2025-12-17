import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import Pagination from "../common/Pagination";
import {
  FunnelIcon,
  PlusIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import CustomerModal from "./CustomerModal";
import CustomerEditModal from "./CustomerEditModal";
import { Pencil, Trash2, ToggleRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Customer() {
  const customers = [
    {
      name: "Phoenix Baker",
      id: "BC2022110001",
      email: "phoenix.baker@hotmail.com",
      addressShort: "Minnesota",
      addressFull: "3147, Copper Rd, Irving, Texas, 95709",
      phone: "+1 8639724863",
    },
    {
      name: "Lana Steiner",
      id: "BC2022110002",
      email: "lanasteiner@mightyvapes.com",
      addressShort: "New York",
      addressFull: "8759, West Ave, Queens, New York, 10011",
      phone: "+1 8639724863",
    },
    {
      name: "Demi Wilkinson",
      id: "BC2022110003",
      email: "dwilkinson@longpiper.us",
      addressShort: "California",
      addressFull: "1946, Sunset Blvd, Los Angeles, CA 94016",
      phone: "+1 8639724863",
    },
    {
      name: "Candice Wu",
      id: "BC2022110004",
      email: "xing.wu@hyper.space",
      addressShort: "Texas",
      addressFull: "9971, Central Dr, Dallas, Texas, 75001",
      phone: "+1 8639724863",
    },
    {
      name: "John Doe",
      id: "BC2022110005",
      email: "john@example.com",
      addressShort: "Florida",
      addressFull: "8741 Beach Ave, Miami, FL 33101",
      phone: "+1 9897214363",
    },
    {
      name: "Jane Smith",
      id: "BC2022110006",
      email: "jane@example.com",
      addressShort: "Ohio",
      addressFull: "2218 Lake Rd, Cleveland, OH 44101",
      phone: "+1 9834512563",
    },
    {
      name: "David Lee",
      id: "BC2022110007",
      email: "david@example.com",
      addressShort: "Nevada",
      addressFull: "5163 Silver St, Las Vegas, NV 88901",
      phone: "+1 9876543210",
    },
    {
      name: "Sarah Kim",
      id: "BC2022110008",
      email: "sarah@example.com",
      addressShort: "Georgia",
      addressFull: "6321 Westview Blvd, Atlanta, GA 30301",
      phone: "+1 8796542310",
    },
  ];

  const [activeTab, setActiveTab] = useState("Active");
  const cards = [
    { title: "Active Customers", value: 120, description: "↑ 12% vs last month", key: "Active" },
    { title: "Inactive Customers", value: 30, description: "↓ 5% vs last month", key: "Inactive" },
    { title: "Deleted Customers", value: 18, description: "↑ 8% vs last month", key: "Deleted" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(null);
  const navigate = useNavigate();
  const itemsPerPage = 4;

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.addressShort.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 p-4 sm:p-6 lg:p-8 flex flex-col gap-6">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-purple-600 font-medium mb-2 mr-280"
      >
        ← Back
      </button>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
        Customers
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.key}
            onClick={() => setActiveTab(card.key)}
            className={`cursor-pointer rounded-xl p-4 sm:p-5 shadow-md transition ${
              activeTab === card.key
                ? "bg-purple-600 text-white"
                : "bg-white hover:bg-purple-50"
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
           {/* SECTION TITLE OUTSIDE TABLE */}
          <h2 className="text-xl sm:text-2xl font-semibold mt-2">
           {activeTab} Customers
          </h2>


      {/* TABLE SECTION */}
      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6">
        {activeTab !== "Active" ? (
          <div className="text-center py-10 text-gray-400">
            No data available for {activeTab} customers.
          </div>
        ) : (
          <>
            {/* TOP BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SearchInput
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search customers..."
                  className="flex-1 min-w-[120px] max-w-[180px] sm:max-w-xs"
                />
                <button className="flex items-center gap-1 border rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 shrink-0">
                  <FunnelIcon className="w-4 h-4" />
                  <span className="hidden sm:block">Filters</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700"
                >
                  <PlusIcon className="w-4 h-4" />
                  Add New Customer
                </button>

                <button className="flex items-center gap-2 bg-purple-600 text-white rounded-lg px-3 sm:px-4 py-2 text-sm hover:bg-purple-700">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm text-left border-t">
                <thead className="text-gray-600 border-b bg-gray-50">
                  <tr>
                    <th className="py-3 px-4">
                      <input type="checkbox" disabled className="opacity-50" />
                    </th>
                    <th className="py-3 px-4">Contact Name</th>
                    <th className="py-3 px-4">Customer ID</th>
                    <th className="py-3 px-4">Email-ID</th>
                    <th className="py-3 px-4">Address</th>
                    <th className="py-3 px-4">Phone Number</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedCustomers.length > 0 ? (
                    paginatedCustomers.map((c, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        {/* Checkbox Column */}
                        <td className="py-3 px-4">
                          <input
                            type="checkbox"
                            checked={selectedCustomerIndex === i}
                            onChange={() =>
                              setSelectedCustomerIndex(
                                selectedCustomerIndex === i ? null : i
                              )
                            }
                            className="w-4 h-4 cursor-pointer"
                          />
                        </td>

                        {/* Contact Name */}
                        <td className="py-3 px-4 flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold">
                            {c.name.split(" ")[0][0]}
                            {c.name.split(" ")[1]?.[0] || ""}
                          </div>
                          {c.name}
                        </td>

                        <td className="py-3 px-4">{c.id}</td>
                        <td className="py-3 px-4">{c.email}</td>

                        {/* Address Hover */}
                        <td className="py-3 px-4 relative group">
                          <span>{c.addressShort}</span>
                          <button className="ml-1 text-gray-500">...</button>

                          <div className="absolute left-0 top-6 hidden group-hover:block bg-white border shadow-lg rounded-md p-2 text-xs w-60 z-20">
                            {c.addressFull}
                          </div>
                        </td>

                        <td className="py-3 px-4">{c.phone}</td>

                        {/* Actions */}
                        <td className="py-3 px-4 flex gap-3 items-center">
                          <button
                            onClick={() => {
                              setSelectedCustomer(c);
                              setShowEditModal(true);
                            }}
                            className="text-purple-600 hover:text-purple-800"
                          >
                            <Pencil size={18} />
                          </button>

                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                          </button>

                          <button className="text-gray-600 hover:text-black">
                            <ToggleRight size={22} className="text-gray-900" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="py-4 px-4 text-center text-gray-500"
                      >
                        No customers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="px-4 py-3 border-t bg-white">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={(p) => setPage(p)}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* MODALS */}
      {showModal && (
        <CustomerModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}

      {showEditModal && (
        <CustomerEditModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          customer={selectedCustomer}
        />
      )}
    </div>
  );
}
