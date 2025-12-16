import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange, placeholder = "Search" }) {
  return (
    <div className="flex items-center border rounded-lg px-2 h-9 w-48 bg-white shadow-sm">
      <FiSearch className="text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-2 outline-none text-sm w-full bg-transparent"
      />
    </div>
  );
}
