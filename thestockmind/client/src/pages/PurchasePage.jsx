import React, { useState } from "react";
import DateRangeSelector from "../components/common/DateRangeSelector";
import Calender from "../components/common/Calender";
import PurchaseOrderTable from "../components/purchaseorder/PurchaseOrderTable";
import Export from "../components/common/Export";
import Confirmed from "../components/purchaseorder/Confirmed";
import ActionButton from "../components/common/ActionButton";
import Pagination from "../components/common/Pagination";
import PurchaseLayout from "../components/layout/PurchaseLayout";
import SearchInput from "../components/common/SearchInput";
import PurchaseForm from "../components/purchaseorder/PurchaseForm";
import { FiArrowLeft } from "react-icons/fi";

function PurchasePage() {
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [page, setPage] = useState(2);
  const totalPages = 10;

  const handleAddClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleConfirm = (data) => {
    setShowForm(false);
    setTimeout(() => setShowConfirm(true), 200);
  };

  const handleGoBackToForm = () => {
    setShowConfirm(false);
    setTimeout(() => setShowForm(true), 200);
  };

  const handleConfirmYes = () => {
    console.log("Purchase Order Confirmed");
    setShowConfirm(false);
  };

  return (
    <PurchaseLayout>
      <div className="mt-10 lg:mt-1 px-2 md:px-4  bg-white">
        

        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 mt-2 pl-4">  
          <h2 className="mt-5 lg:mt-0 flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-0">
            <span className="text-violet-700 cursor-pointer">
              <FiArrowLeft size={20} />
             </span>
             Purchase Order
          </h2>


          <div className="flex flex-col md:flex-row lg:flex-row gap-3 lg:items-center">
            <DateRangeSelector  />
            <Calender />
          </div>
        </div>

        <div className="border-2 border-gray-300 rounded-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
            <div className="flex space-x-4 px-4">
            <SearchInput />
              <ActionButton text="Filters" iconName="filter" />
            </div>

            <div className="flex space-x-4 px-4 ">
              <ActionButton
                text="Create new purchase order"
                iconName="plus"
                onClick={handleAddClick}
              />
              <Export />
            </div>
          </div>
          <PurchaseOrderTable currentPage={page} />

          {totalPages > 1 && (
             <div className="px-2 sm:px-4 py-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-gray-500 text-sm bg-[rgba(249,250,251,1)] gap-2">
        <Pagination currentPage={page} totalPages={totalPages}  />
      </div>
          )}
        </div>
      </div>

      {/* Form Modal */}
      
{showForm && (
  <div className="fixed inset-0 z-50 flex justify-center items-center">
 
    <div className="absolute inset-0 bg-black/60 " />

    <div className="relative rounded-xl max-w-4xl w-full animate-slideUp">
      <PurchaseForm onConfirm={handleConfirm} onClose={handleCloseForm} />

    </div>
  </div>
)}


      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4 border border-gray-200 animate-slideUp">
            <Confirmed onYes={handleConfirmYes} onNo={handleGoBackToForm} />
          </div>
        </div>
      )}
    </PurchaseLayout>
  );
}

export default PurchasePage;
