import React from 'react';
import { FiPlus, FiCalendar, FiFilter, FiMoreVertical, FiSearch } from 'react-icons/fi';
 
const Icon = ({ name, className = "" }) => {
  switch (name) {
    case 'plus':
      return <FiPlus className={className} />;
    case 'calendar':
      return <FiCalendar className={className} />;
    case 'filter':
      return <FiFilter className={className} />;
    case 'menu':
      return <FiMoreVertical className={className} />;
     case 'search':
      return <FiSearch className={className} />;

    default:
      return null;
  }
};
 
export default Icon;