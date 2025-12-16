import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
 
const SearchInput = ({ value, onChange, placeholder = 'Search...', className = '' }) => {
  return (
   
    <div className={`relative flex items-center w-full min-w-[200px] ${className}`}>
     
     
      <div className="absolute left-3 text-gray-400">
        <Icon name="search" className="w-5 h-5" />
      </div>
 
      {/* The input element */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
       
        className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
      />
    </div>
  );
};
 
// Prop Validation is here
SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};
 
export default SearchInput;