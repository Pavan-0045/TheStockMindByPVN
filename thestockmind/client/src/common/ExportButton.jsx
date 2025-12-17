import React from "react";
import { FiDownload } from "react-icons/fi";

export default function ExportButton({ onClick, label = "Export" }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 h-10"
    >
      <FiDownload /> {label}
    </button>
  );
}
