import React, { useState } from "react";
import DepartmentTable from "../components/Department/DepartmentTable.jsx";
import Cards from "../components/common/Cards.jsx";
import { DepartmentLayout } from "../layouts/DepartmentLayout.jsx";

const DepartmentPage = () => {
  const [activeCard, setActiveCard] = useState("Active Departments");
  const [selectedRange, setSelectedRange] = useState("1m");
  const [selectedDate, setSelectedDate] = useState(null);

  const metrics = [
    { title: "Active Departments", value: 100, description: "↑ 12% vs last month" },
    { title: "Inactive Departments", value: 19, description: "↑ 12% vs last month" },
    { title: "Deleted Departments", value: 10, description: "↑ 12% vs last month" },
  ];

  const tableDataStatus =
    activeCard === "Active Departments"
      ? "active"
      : activeCard === "Inactive Departments"
      ? "inactive"
      : "deleted";

  return (
    <DepartmentLayout>
      <div className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50 min-h-screen">
        <button className="text-sm text-indigo-600 hover:underline -mt-2 mb-2">
          ← Back
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-800">Department</h1>
          </div>

          {/* ---- CARDS ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                onClick={() => setActiveCard(metric.title)}
                className={`rounded-xl transition-all ${
                  activeCard === metric.title ? "bg-purple-600 text-white" : "bg-white text-gray-800"
                } cursor-pointer`}
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

          {/* Active card title */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mt-2">
            <h2 className="text-2xl font-semibold text-gray-800">{activeCard}</h2>
          </div>

          {/* Department table */}
          <DepartmentTable
            activeStatus={tableDataStatus}
            searchTerm=""
            dateRange={selectedRange}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </DepartmentLayout>
  );
};

export default DepartmentPage;
