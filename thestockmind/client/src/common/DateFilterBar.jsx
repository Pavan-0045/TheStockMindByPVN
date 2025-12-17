import React, { useState, forwardRef } from "react";
import { FiCalendar } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateFilterBar() {
  const [selected, setSelected] = useState("1d");
  const [customDate, setCustomDate] = useState(null);
  const filters = ["1d", "7d", "1m", "3m", "6m", "1y", "3y", "5y"];

  // 🔹 Custom button styled with Tailwind
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm 
                 text-gray-700 bg-white hover:bg-purple-50 focus:ring-2 focus:ring-purple-300 
                 transition w-full sm:w-auto shadow-sm"
    >
      <FiCalendar className="text-gray-600" />
      <span>{value || "Select Date"}</span>
    </button>
  ));

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {/* 🔹 Range Buttons */}
      <div className="flex flex-wrap border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden">
        {filters.map((label) => (
          <button
            key={label}
            onClick={() => setSelected(label)}
            className={`px-3 sm:px-4 py-2 text-sm font-medium transition border-r last:border-r-0 
              ${
                selected === label
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-purple-50"
              }`}
          >
            {label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🔹 Calendar Picker */}
      <div className="relative">
        <DatePicker
          selected={customDate}
          onChange={(date) => setCustomDate(date)}
          customInput={<CustomInput />}
          popperPlacement="bottom-end"
          showPopperArrow={false}
          shouldCloseOnSelect
          portalId="root"
        />
      </div>
    </div>
  );
}
