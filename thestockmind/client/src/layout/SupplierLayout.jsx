import React from 'react'
import Sidebar from '../common/SideBar';

const SupplierLayout = ({children}) => {
  return (
     <div className="flex min-h-screen bg-gray-50">
           <Sidebar/>
   
           <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {children}
           </main>
         </div>
  )
}
 
export default SupplierLayout;
 