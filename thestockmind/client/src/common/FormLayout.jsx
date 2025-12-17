import React, { useEffect } from "react";
import { FiX, FiUpload, FiPlus } from "react-icons/fi";

export default function FormLayout({title, children, onClose, size = "medium",

  showUpload = false,
  onUpload,
  uploadText,

  showCustom = false,
  onCustom,
  customText,
}) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const sizeClasses = {
    small: "w-full sm:w-[450px]",
    medium: "w-full sm:w-[600px]",
    large: "w-full sm:w-[900px]",
    horizon: "w-full sm:w-[1200px]",
  };

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-xs flex justify-center items-center z-50 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-white rounded-2xl shadow-xl relative ${sizeClasses[size]} max-h-[85vh] overflow-hidden flex flex-col`}
      >
        {/* Mobile X Button */}
        <button
          className="sm:hidden absolute right-4 top-4 text-gray-700"
          onClick={onClose}
        >
          <FiX size={22} />
        </button>

        {/* Header */}
        <div className="bg-gray-200 px-6 py-3 rounded-t-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl font-semibold text-black text-center sm:text-left">
              {title}
            </h2>
            

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              {showCustom && (
                <button
                  onClick={onCustom}
                  className="bg-white text-gray-800 px-4 py-2 text-sm rounded-lg hover:bg-purple-600 hover:text-white flex items-center justify-center gap-1 w-full sm:w-auto"
                >
                  <FiPlus size={16} />
                  {customText}
                </button>
              )}

              {showUpload && (
                <button
                  onClick={onUpload}
                  className="bg-white text-gray-800 px-4 py-2 text-sm rounded-lg hover:bg-purple-600 hover:text-white flex items-center justify-center gap-1 w-full sm:w-auto"
                >
                  <FiUpload size={16} />
                  {uploadText}
                </button>
              )}
                <button
                  className="hidden sm:block text-gray-600 hover:text-gray-800 p-1"
                  onClick={onClose}
                  >
                  <FiX size={22} />
                </button> 
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}