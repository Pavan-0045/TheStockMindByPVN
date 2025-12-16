import React from 'react'
import PurchaseSidebar from "../common/Sidebar";

export const ShipmentLayout = ({children}) => {
  return (
      <div className="flex min-h-screen bg-white">
          {/* Sidebar */}
          <PurchaseSidebar />
    
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto py-6">
            {children}
          </main>
        </div>
  )
}
