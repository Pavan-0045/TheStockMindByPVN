import React, { useState } from "react";
import CategoryTable from "../components/category/CategoryTable.jsx";
import DateRangeSelector from "../components/common/DateRangeSelector.jsx";
import ActionButton from "../components/common/ActionButton.jsx";
import Cards from "../components/common/Cards.jsx";
import { CategoryLayout } from "../layouts/CategoryLayout.jsx";

const CategoryPage = () => {
  const [activeCard, setActiveCard] = useState("Active Categories");
  const [selectedRange, setSelectedRange] = useState("1m");
  const [selectedDate, setSelectedDate] = useState(null);

  const metrics = [
    { title: "Active Categories", value: 100, description: "↑ 12% vs last month" },
    { title: "Inactive Categories", value: 19, description: "↑ 12% vs last month" },
    { title: "Deleted Categories", value: 10, description: "↑ 12% vs last month" },
  ];

  return (
    <CategoryLayout>
      <div className="flex-1 p-3 sm:p-4 md:p-6 bg-gray-50 min-h-screen">
        <button className="text-sm text-indigo-600 hover:underline mb-2">
          ← Back
        </button>

        <div className="space-y-5 sm:space-y-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 sm:gap-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Category
            </h1>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap w-full lg:w-auto">
              <DateRangeSelector />
              <ActionButton text="Select Dates" iconName="calendar" />
            </div>
          </div>

          {/*  CARDS  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                onClick={() => setActiveCard(metric.title)}
                className={`rounded-xl transition-all ${activeCard === metric.title ? "bg-purple-600 text-white" : ""}`}
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

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {activeCard}
          </h2>

          <CategoryTable activeStatus={activeCard} />
        </div>
      </div>
    </CategoryLayout>
  );
};

export default CategoryPage;
