import React from 'react';
import DateRangeSelector from '../common/DateRangeSelector';
import ActionButton from '../common/ActionButton'; 

import { useState } from 'react';


const DashboardHeader = ({ onDateRangeChange, onAddMetrics, onSelectDates, onFilters  }) => {

  return (
    
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
      
      
      <DateRangeSelector onSelectRange={onDateRangeChange} />

      
      
      
      <div className="flex flex-wrap gap-2 md:space-x-3">
        

       
        <ActionButton 
          text="Add Metrics" 
          iconName="plus" 
          onClick={onAddMetrics}
        />
        
        <ActionButton 
          text="Select dates" 
          iconName="calendar" 
          onClick={onSelectDates}
        />
        
        <ActionButton 
          text="Filters" 
          iconName="filter" 
          onClick={onFilters}
        />
    
        
        
      </div>
    </div>
  );
};

export default DashboardHeader;