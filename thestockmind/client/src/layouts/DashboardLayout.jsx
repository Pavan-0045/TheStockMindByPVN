import React from 'react';
import Sidebar from '../components/common/Sidebar';

const DashboardLayout = ({ children }) => {
  return (

    <div className="flex h-screen bg-gray-50">
  
      {/* <div className="hidden md:flex">
          <Sidebar />
      </div> */}
       <Sidebar />
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 py-4 md:px-8 md:py-6"> 
          {children} 
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;



