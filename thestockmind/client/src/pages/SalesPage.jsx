import React, { useState } from 'react';
import DateRangeSelector from '../components/common/DateRangeSelector';
import Calender from '../components/common/Calender';
import SalesOrderTable from '../components/salesorder/SalesOrderTable'
import Export from '../components/common/Export';
import ActionButton from '../components/common/ActionButton';
import Pagination from '../components/common/Pagination';
import SearchInput from '../components/common/SearchInput';
import { SalesLayout } from '../components/layout/SalesLayout';
import { FiArrowLeft } from 'react-icons/fi';


function SalesPage() {
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [dateRange, setDateRange] = useState('1m');
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newValue) => {
    setSearchTerm(newValue);
    console.log('Search term:', newValue);
  };

  const onPageChange = (newPage) => {
    console.log('Page changed to:', newPage);
    setPage(newPage);
  };

  const onDateRangeChange = (range) => {
    console.log('Selected range:', range);
    setDateRange(range);
  };

  const handleAddClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  // Called when form submits
  const handleConfirm = (data) => {
    console.log('Form Submitted Data:', data);
    setShowForm(false);
    setTimeout(() => setShowConfirm(true), 200);
  };

  const handleGoBackToForm = () => {
    setShowConfirm(false);
    setTimeout(() => setShowForm(true), 200);
  };

  const handleConfirmYes = () => {
    console.log('Purchase Order Confirmed');
    setShowConfirm(false);
  };

  return (
    <SalesLayout>
       <div className="mt-10 px-2 md:px-4 lg:mt-1 bg-white">

        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 mt-2 pl-4">
          <h2 className="mt-5 lg:mt-0 flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-0">
            <span className="text-violet-700 cursor-pointer">
              <FiArrowLeft size={20} />
             </span>
             Sales Order
          </h2>

         <div className="flex flex-col md:flex-row lg:flex-row gap-3 lg:items-center">
            <DateRangeSelector onSelectRange={onDateRangeChange} />
            <Calender />
          </div>
        </div>

        <div className="border-2 border-gray-300 rounded-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mt-4">
            <div className="flex space-x-4 px-4">
<SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <ActionButton text="Filters" iconName="filter" />
            </div>

            <div className="mr-4">
              
              <Export />
            </div> 
          </div>

          <SalesOrderTable currentPage={page} />

          {/* Pagination Section */}
          {totalPages > 1 && (
            <div className="px-4 py-3 border-t bg-white">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>
          )}
        </div>

      </div>



     
    </SalesLayout>
  );
}

export default SalesPage;

