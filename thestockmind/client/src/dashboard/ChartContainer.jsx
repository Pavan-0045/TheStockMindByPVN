import React from 'react';
import PropTypes from 'prop-types';

const ChartContainer = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
    
      <div style={{ height: '400px' }}> 
        {children} 
      </div>
    </div>
  );
};

//Prop Validation
// ChartContainer.propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node, 
//     className: PropTypes.string,
// };

export default ChartContainer;