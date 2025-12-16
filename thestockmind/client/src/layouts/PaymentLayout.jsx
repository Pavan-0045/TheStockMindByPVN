import React from 'react'
import Sidebar from '../components/common/Sidebar';
const PaymentLayout = ({children}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
           <Sidebar/>
   
           <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {children}
           </main>
         </div>
  )
}

export default PaymentLayout ;

