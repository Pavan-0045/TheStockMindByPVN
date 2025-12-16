import React, { useState } from "react";
import SuppliersTable from "../suppliers/SuppliersTable.jsx";
import Cards from "../common/Cards.jsx";
import SupplierLayout from "../layout/SupplierLayout.jsx";

const SupplierPage = () => {
  const [activeCard, setActiveCard] = useState("Active Suppliers");

  const metrics = [
    { title: "Active Suppliers", value: 100, description: "↑ 12% vs last month" },
    { title: "Inactive Suppliers", value: 19, description: "↑ 12% vs last month" },
    { title: "Deleted Suppliers", value: 10, description: "↑ 12% vs last month" },
  ];

  return (
    <SupplierLayout>
      <div className="flex-1 p-4 bg-gray-50 min-h-screen">

        <button className="text-sm text-indigo-600 hover:underline mb-3">
          ← Back
        </button>

        <div>

          {/* Page Heading */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-800">Suppliers</h1>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                onClick={() => setActiveCard(metric.title)}
                className="cursor-pointer"
              >
                <Cards
                  title={metric.title}
                  value={metric.value}
                  description={metric.description}
                  isPrimary={activeCard === metric.title}
                />
              </div>
            ))}
          </div>

          {/* Active Card Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {activeCard}
          </h2>

          {/* Table Section */}
          <SuppliersTable activeStatus={activeCard} />

        </div>
      </div>
    </SupplierLayout>
  );
};

export default SupplierPage;