import React from "react";

export const statusColors = {
  gray: { bg: "bg-gray-400 text-white", dot: "bg-white" },
  yellow: { bg: "bg-yellow-100 text-yellow-600", dot: "bg-yellow-700" },
  green: { bg: "bg-green-100 text-green-600", dot: "bg-green-700" },
  red: { bg: "bg-red-100 text-red-600", dot: "bg-red-700" },
  purple: {bg: "bg-purple-100 text-purple-500", dot: "bg-purple-700" },
};


export function Status({ color = "gray", label = "Unknown" }) {
  
  const style = statusColors[color] || statusColors.gray;

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${style.bg}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${style.dot}`}></span>
      {label}
    </span>
  );
}

export default Status;
