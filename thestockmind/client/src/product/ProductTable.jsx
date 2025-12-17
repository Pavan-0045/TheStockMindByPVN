import React from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function ProductTable({ products, onDelete, onEdit }) {
  return (
    <div className="relative w-full ">
      <div className="overflow-x-auto w-full ">
        <table className="min-w-max w-full text-xs font-inter text-gray-700 leading-[18px]">
          <thead className=" text-gray-600 md:bg-gray-100  font-medium text-[12px] ">
            <tr className="whitespace-nowrap divide-y divide-gray-200">
              <th className="p-4 text-left whitespace-nowrap">Product Name</th>
              <th className="p-3 text-left whitespace-nowrap">Product ID</th>
              <th className="p-3 text-left whitespace-nowrap">Supplier ID</th>
              <th className="p-3 text-left whitespace-nowrap">Category</th>
              <th className="p-3 text-left whitespace-nowrap">Price</th>
              <th className="p-3 text-left whitespace-nowrap">Weight</th>
              <th className="p-3 text-left whitespace-nowrap">Stock Level</th>
              <th className="p-3 text-left whitespace-nowrap">Rec. Level</th>
              <th className="p-3 text-left whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          {/* line between data*/}
          <tbody className="divide-y divide-gray-200">
            {products.map((p, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 text-gray-700 font-medium"
              >
                <td className="flex items-center gap-3 p-2 min-w-[180px]">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-indigo-500 rounded-sm"
                  />

                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-8 h-8 rounded-full cursor-pointer object-cover border border-gray-200 shadow-sm"
                  />

                  <span className="font-medium text-[13px] text-gray-900 truncate">
                    {p.name}
                  </span>
                </td>

                <td className="p-2 text-gray-600 whitespace-nowrap">
                  {p.productId}
                </td>

                <td className="p-2 flex items-center gap-2 text-[#667085] font-inter whitespace-nowrap">
                  <span className="underline cursor-pointer">
                    {p.supplierId}
                  </span>
                  {p.action && (
                    <button
                      onClick={() => alert(`Action clicked! ${p.name}`)}
                      className="w-[25px] h-[17px] flex items-center justify-center border border-indigo-400 rounded-full text-[10px] font-semibold text-[#475467] hover:bg-indigo-200 transition"
                    >
                      {p.action}
                    </button>
                  )}
                </td>

                <td className="p-2 text-[#667085] underline font-semibold cursor-pointer whitespace-nowrap">
                  {p.category}
                </td>

                <td className="p-2 text-gray-600 whitespace-nowrap">
                  {p.price}
                </td>
                <td className="p-2 text-gray-600 whitespace-nowrap">
                  {p.weight}
                </td>
                <td className="p-2 text-gray-600 whitespace-nowrap">
                  {p.stock}
                </td>
                <td className="p-2 text-gray-600 whitespace-nowrap">
                  {p.reorder}
                </td>

                {/* ACTION BUTTONS */}
                <td className="p-2 flex items-center gap-3 whitespace-nowrap">
                  <button
                    className="text-indigo-600 hover:text-indigo-800 transition"
                    onClick={() => onEdit(i)}
                  >
                    <Pencil size={14} />
                  </button>

                  <button
                    className="text-red-500 hover:text-red-700 transition"
                    onClick={() => onDelete(i)}
                  >
                    <Trash2 size={14} />
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
