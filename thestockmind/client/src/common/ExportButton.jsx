import React from "react";
import { FiDownload } from "react-icons/fi";
 
const ExportButton = () => {
  return (
    <button className="flex items-center bg-purple-600 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-700 shadow-sm">
      <FiDownload
        style={{ width: "24.17px", height: "20px" }}
        className="mr-2"
      />
      Export
    </button>
  );
};
 
export default ExportButton;