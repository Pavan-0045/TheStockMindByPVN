import React from 'react'
import Sidebar from '../components/common/Sidebar';

export const DepartmentLayout  = ({children}) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
          <Sidebar /> 
    <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {children}
    </div>
    
    </div>
    

  )
}