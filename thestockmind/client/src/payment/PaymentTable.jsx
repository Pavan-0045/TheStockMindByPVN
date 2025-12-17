import React from "react";
import { useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";

import { Pencil, Trash2 } from "lucide-react";

export default function PaymentTable({ payments, onEdit, onDelete, onToggle }) {
  const [activeSwitches, setActiveSwitches] = useState([
    true,
    false,
    true,
    false,
  ]);

  return (
    <div className="relative w-full">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full w-full text-xs text-gray-700 leading-[18px] font-inter">
          {/* Heading */}
          <thead className=" text-gray-600 md:bg-gray-100 font-medium text-[12px]">
            <tr className="whitespace-nowrap divide-y divide-gray-200">
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Employee ID</th>
              <th className="p-3 text-left">Department ID</th>
              <th className="p-3 text-left">Hire Date</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-200">
            {payments.map((p, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 text-gray-700 font-medium whitespace-nowrap"
              >
                {/* Pyment column */}
                <td className="p-2 flex items-center gap-3 min-w-[180px]">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-indigo-500 rounded-sm"
                  />

                  <img
                    src={p.image}
                    alt={p.employeeName}
                    className="w-8 h-8 min-w-8 rounded-full object-cover border border-gray-200 shadow-sm"
                  />

                  <span className="font-medium text-[13px] text-gray-900">
                    {p.employeeName}
                  </span>
                </td>

                <td className="p-2 text-gray-600">{p.employeeId}</td>

                <td className="p-2 underline text-[#667085] font-semibold cursor-pointer">
                  {p.departmentId}
                </td>

                <td className="p-2 text-gray-600">{p.hireDate}</td>

                <td className="p-2 text-gray-600">{p.email}</td>

                <td className="p-2 text-gray-600">{p.phone}</td>

                {/* Action Buttons */}
                <td className="p-2 flex items-center gap-3 min-w-[120px]">
                  <button
                    className="text-indigo-600 hover:text-indigo-800 transition"
                    onClick={() => onEdit?.(i)}
                  >
                    <Pencil size={14} />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition"                     onClick={() => onDelete(i)}
>
                    <Trash2 size={14} />
                  </button>

                  {/* Toggle Button*/}
                  <button
                    onClick={() => toggleSwitch(i)}
                    className="transition-transform duration-200"
                  >
                    {activeSwitches[i] ? (
                      <FiToggleRight
                        size={25}
                        className="text-green-600 hover:text-gray-600"
                      />
                    ) : (
                      <FiToggleLeft
                        size={25}
                        className="text-red-600 hover:text-gray-800"
                      />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="border-2 border-gray-200"></hr>
      </div>
    </div>
  );
}
