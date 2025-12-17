import React from "react";
import { purchaseOrders } from "../../page/PurchaseOrdersData.js";
import { Status } from "../common/Status.jsx";
import { actions } from "../common/Action.js";

function PurchaseOrderTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-2 border-gray-300 mt-6 text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr className="border-2 border-gray-300">
            <th className="px-3 py-3 text-left">Ordered Date</th>
            <th className="px-3 py-3 text-left">Purchase Order ID</th>
            <th className="px-3 py-3 text-left">Supplier ID</th>
            <th className="px-3 py-3 text-left">ETA</th>
            <th className="px-3 py-3 text-left">Status</th>
            <th className="px-3 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {purchaseOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 transition">
              
              {/* Ordered Date */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap">
                <div className="flex flex-col items-start">
                  <span>{order.orderedDate}</span>
                  <span className="text-sm">{order.orderTime}</span>
                </div>
              </td>

              {/* Purchase Order ID */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap">
                {order.purchaseOrderId}
              </td>

              {/* Supplier ID */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap font-semibold underline cursor-pointer text-gray-700">
                {order.supplierId}
              </td>

              {/* ETA */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap">
                {order.eta}
              </td>

              {/* Status */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap items-start">
                <Status color={order.status.color} label={order.status.label} />
              </td>

              {/* Actions */}
              <td className="border-b-2 border-gray-300 px-3 py-5 flex items-center space-x-3">
                {order.actions.map((action) => {
                  const act = actions[action]; 
                  if (!act) return null;

                  const Icon = act.icon;
                
                  return (
                    <div key={action} className="relative group">
                      {/* Action Button */}
                      <button className={`flex items-center justify-center transition  
                   ${act.color}`}>
                        <Icon size={18} />
                      </button>

                      {/* Tooltip only if message exists */}
                      {act.message && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-white border rounded shadow px-2 py-1 z-50 max-w-xs">
                          <p className="text-red-600 font-semibold">Remark:</p>
                          <p className="text-black">{act.message}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PurchaseOrderTable;
