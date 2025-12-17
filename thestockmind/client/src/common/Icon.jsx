import React from 'react';
 
import { FiPlus, FiCalendar, FiFilter, FiMoreVertical, FiSearch, FiUpload, FiUploadCloud, FiX,FiArrowRight } from 'react-icons/fi';
 
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
 
    case 'bulk-upload' :
       return <FiUploadCloud className={className} />;
 
       case "close":
    return <FiX className={className} />;
 
     case "arrow":
    return <FiArrowRight className={className} />;
 
 
   
 
 
    default:
      return null;
  }
};
 
export default Icon;
 