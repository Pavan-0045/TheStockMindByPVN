import React, { useState } from 'react';
 
//Date Range Selector '1d, 7d, 1m etc'
const DateRangeSelector = ({ onSelectRange, initialRange = '1m' }) => {
  const [activeRange, setActiveRange] = useState(initialRange);
  const timeRanges = ['1d', '7d', '1m', '3m', '6m', '1y', '3y', '5y'];
 
  const handleClick = (range) => {
    setActiveRange(range);
    if (onSelectRange) {
      // here we send the new value back to the main page
      onSelectRange(range);
    }
  };
 
  return (
    <div className="flex space-x-1 text-xs sm:text-sm font-medium text-gray-600 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
      {timeRanges.map(range => (
        <button
          key={range}
          onClick={() => handleClick(range)}
         
         
          className={`px-2 sm:px-3 py-1 rounded-md transition-all duration-150 ${
            activeRange === range
              ? 'bg-purple-600 text-white font-semibold shadow-md'
              : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
};
 
export default DateRangeSelector;