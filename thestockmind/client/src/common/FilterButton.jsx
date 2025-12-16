import React from "react";
import { FiFilter } from "react-icons/fi";

export default function FilterButton({ onClick, label = "Filters" }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border rounded-lg px-3 h-9 text-gray-600 hover:bg-purple-50"
    >
      <FiFilter /> {label}
    </button>
  );
}
