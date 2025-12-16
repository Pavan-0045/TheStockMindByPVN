import React from "react";
import { shipment } from "../../page/ShipmentData.js";  
import { Status } from "../common/Status.jsx";
import { actions as actionIcons } from "../common/Action.js";

function ShipmentTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-2 border-gray-300 mt-6 text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr className="border-2 border-gray-300">
            <th className="px-3 py-3 text-left">Shipped Date</th>
            <th className="px-3 py-3 text-left">Shipment ID</th>
            <th className="px-3 py-3 text-left">Sales Order ID</th>
            <th className="px-3 py-3 text-left">Tracking ID</th>
            <th className="px-3 py-3 text-left">ETD</th>
            <th className="px-3 py-3 text-left">Status</th>
            <th className="px-3 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {shipment.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 transition">
              {/* Ordered Date */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap">
                <div className="flex flex-col items-start">
                  <span>{order.shippedDate}</span>
                  <span className="text-sm">{order.shippedTime}</span>
                </div>
              </td>

              {/* sales Order ID */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap">
                {order.shipmentId}
              </td>

              {/* Supplier ID */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap font-semibold underline cursor-pointer text-gray-700">
                {order.salesOrderId}
              </td>

              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap font-semibold underline cursor-pointer text-gray-700">
                {order.trackingId}
              </td>

              {/* ETD */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap">
                {order.etd}
              </td>

              {/* Status */}
              <td className="border-b-2 border-gray-300 px-3 py-2 whitespace-nowrap items-start">
                <Status color={order.status.color} label={order.status.label} />
              </td>

              {/* Actions */}
              <td className="border-b-2 border-gray-300 px-3 py-5 flex items-start space-x-2 relative">
                {order.actions.map((action) => {
                  const act = actionIcons[action];
                  if (!act) return null;

                  const Icon = act.icon;

                  return (
                    <div
                      key={action}
                      className="relative group flex items-center justify-center"
                    >
                      <button
                        className={`${act.color} transition flex items-center justify-center`}
                      >
                        <Icon size={18} />
                      </button>

                      {act.message && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:flex flex-col items-start bg-white border rounded shadow px-2 py-1 z-50 max-w-xs">
                          <span className="text-red-600 font-semibold">
                            Remark:
                          </span>
                          <span className="text-black">{act.message}</span>
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

export default ShipmentTable;
