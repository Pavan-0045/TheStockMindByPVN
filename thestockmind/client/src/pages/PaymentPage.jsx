import React, { useState } from "react";
import ActionButton from "../components/common/ActionButton";
import SearchInput from "../components/common/SearchInput";
import ExportButton from "../components/common/ExportButton";
import Pagination from "../components/common/Pagination";
import PaymentTable from "../components/payment/PaymentTable";
import Cards from "../components/common/Cards";
import AddNewEmployee from "../components/payment/AddNewEmployee";
import PaymentLayout from "../layout/PaymentLayout";
import { Link } from "react-router-dom";
import EditPaymentForm from "../components/payment/EditPaymentForm";
import DeletePayment from "../components/payment/DeletePayment";
function EmptyPaymentTable() {
  return (
    <div className="rounded-xl border border-gray-200 w-full overflow-x-auto">
      <table className="min-w-full text-left text-gray-700 border-collapse">
        <thead className="bg-gray-50 border-b border-gray-400 text-sm text-gray-600">
          <tr>
            <th className="p-4">Employee Name</th>
            <th className="p-4">Employee ID</th>
            <th className="p-4">Department</th>
            <th className="p-4">Hire Date</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="text-center py-6 text-gray-400">
              No data available for this category.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const PaymentPage = () => {
  const [page, setPage] = useState(1);
  const [activeCard, setActiveCard] = useState("Active Employees");
  const [showForm, setShowForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const totalPages = 10;

  const metrics = [
    {
      title: "Active Employees",
      value: 100,
      description: "↑ 12% vs last month",
    },
    {
      title: "Inactive Employees",
      value: 19,
      description: "↓ 5% vs last month",
    },
    {
      title: "Deleted Employees",
      value: 10,
      description: "↑ 8% vs last month",
    },
  ];

  const [payments, setPayments] = useState([
    {
      employeeName: "Phoenix Baker",
      image: "./src/assets/PaymentImages/payment1.png",
      employeeId: "BC2022110001",
      departmentId: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      email: "phoneix.baker@h...",
      phone: "+1 8639724863",
    },
    {
      employeeName: "Lana Steiner",
      image: "./src/assets/PaymentImages/payment2.png",
      employeeId: "BC2022110001",
      departmentId: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      email: "lanasteiner@migh",
      phone: "+1 8639724863",
    },
    {
      employeeName: "Demi Wilkinson",
      image: "./src/assets/PaymentImages/payment3.png",
      employeeId: "BC2022110001",
      departmentId: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      email: "dwilkinson@lon",
      phone: "+1 8639724863",
    },
    {
      employeeName: "Candice Wu",
      image: "./src/assets/PaymentImages/payment4.png",
      employeeId: "BC2022110001",
      departmentId: "BC2022110001",
      hireDate: "Jan 4, 2022 11:30 AM",
      email: "xing.wu@hyper.s",
      phone: "+1 8639724863",
    },
  ]);

  const sectionTitle = activeCard.replace("Employees", "Payment");
  const [paymentIndexToDelete, setPaymentIndexToDelete] = useState(null);

  const confirmDelete = (index) => setPaymentIndexToDelete(index);

  const handleDelete = () => {
    setPayments((prev) =>
      prev.filter((_, idx) => idx !== paymentIndexToDelete)
    );
    setPaymentIndexToDelete(null);
  };

  const cancelDelete = () => setPaymentIndexToDelete(null);
  const handleEditClick = (index) => {
    setShowEditModal(true);
  };

  return (
    <PaymentLayout>
      <Link to="/payment"></Link>
      <div className="flex-1 pt-0 md:pt-0 px-4 md:px-6 bg-gray-50 min-h-screen mt-6">
        {/* Back Button */}
        <button className="text-sm text-indigo-600 hover:underline mb-2 md:mb-6">
          ← Back
        </button>

        <h1 className="font-inter font-medium text-[26px] md:text-[30px] -mt-4 -sm:mt-1">
          Payment
        </h1>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              onClick={() => setActiveCard(metric.title)}
              className={`
                  rounded-xl transition-all
                  ${
                    activeCard === metric.title
                      ? "bg-purple-600 text-white"
                      : ""
                  }
                `}
            >
              <Cards
                title={metric.title}
                value={metric.value}
                description={metric.description}
                isPrimary={activeCard === metric.title}
              />
            </div>
          ))}
        </div>

        <h2 className="font-inter font-semibold text-[24px] md:text-[30px] mt-1 mb-3">
          {sectionTitle}
        </h2>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm  mb-8">
          {/* Search Row */}

          <div className="flex flex-col sm:flex-row justify-between   p-4 gap-3">
            <div className="flex  flex-row items-center gap-1 ">
              <SearchInput placeholder="Search" />

              <ActionButton text="Filters" iconName="filter" />
            </div>
            <div className="flex flex-row items-center gap-1">
              <ActionButton
                text="Add New Employee"
                iconName="plus"
                onClick={() => setShowForm(true)}
                className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-2 whitespace-nowrap w-full"
              />
              <ExportButton className="px-2 whitespace-nowrap" />
            </div>
          </div>

          {/* Table */}
          <div className="mt-1 overflow-x-auto w-full">
            {activeCard === "Active Employees" ? (
              <PaymentTable
                payments={payments}
                onEdit={handleEditClick}
                onDelete={confirmDelete}
              />
            ) : (
              <EmptyPaymentTable />
            )}
          </div>

          {/* Pagination */}
          {(activeCard === "Active Employees" ) && (
            <div className="px-3 py-2 bg-gray-50 flex justify-center md:justify-between items-center text-gray-500 text-sm">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                
                onPageChange={setPage}
              />
            </div>
          )}
        </div>

        {/* MODAL */}
        {showForm && (
          <div >
                    <AddNewEmployee onClose={() => setShowForm(false)} />

          </div>
        )}

        {showEditModal && (
          <div >
              <EditPaymentForm onClick={() => setShowEditModal(true)} onClose={() => setShowEditModal(false)} />
          </div>
        )}
        {paymentIndexToDelete !== null && (
          <DeletePayment onYes={handleDelete} onNo={cancelDelete} />
        )}
      </div>
    </PaymentLayout>
  );
};

export default PaymentPage;
