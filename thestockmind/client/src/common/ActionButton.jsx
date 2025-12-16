import React from 'react';
import Icon from './Icon';
 
//All icons gets called here
const ActionButton = ({ text, iconName, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-sm font-medium text-gray-600 border px-3 py-2 rounded-lg bg-white shadow-sm hover:bg-purple-600 transition-colors hover:text-white ${className}`}
    >
      {iconName && <Icon name={iconName} className="mr-2" />}
      {text}
    </button>
  );
};
 
 
export default ActionButton;