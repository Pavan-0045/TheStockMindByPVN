import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function Modal({ title, children, onClose }) {
  // Optional: close when pressing ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-xs flex justify-center items-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()} // Close on outside click
    >
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FiX size={20} />
        </button>

        {title && (
          <h2 className="text-xl font-semibold mb-5 text-gray-800 text-center">
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  );
}
