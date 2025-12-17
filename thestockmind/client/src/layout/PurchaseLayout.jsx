import React from "react";
import Sidebar from '../common/Sidebar'
const PurchaseLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto py-6">
        {children}
      </main>
    </div>
  );
};

export default PurchaseLayout;

