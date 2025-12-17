import React from "react";

export default function Pagination({ currentPage = 1, totalPages = 7, onPageChange }) {
    const pageNumbers = [];

    // First 3 pages
    for (let i = 1; i <= 3 && i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Ellipsis if needed
    if (totalPages > 5) pageNumbers.push("...");

    // Last 3 pages
    for (let i = totalPages - 2; i <= totalPages; i++) {
        if (i > 3) pageNumbers.push(i);
    }

    return (
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full py-3 px-1 gap-3">

    {/* Previous */}
    <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center text-gray-600 text-xs sm:text-sm md:text-base hover:text-black 
        px-2 py-1 border border-gray-300 rounded-md disabled:opacity-40 disabled:cursor-not-allowed">
        ← Previous
    </button>

    {/* Page numbers */}
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
        {pageNumbers.map((num, idx) =>
            num === "..." ? (
                <span key={idx} className="px-1 text-xs sm:text-base">
                    ...
                </span>
            ) : (
                <button
                    key={idx}
                    onClick={() => onPageChange(num)}
                    className={`px-2 py-1 rounded-md text-xs sm:text-sm md:text-base ${
                        num === currentPage
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "hover:bg-gray-100"
                    }`}>
                    {num}
                </button>
            )
        )}
    </div>

    {/* Next */}
    <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center text-gray-600 text-xs sm:text-sm md:text-base hover:text-black 
        px-2 py-1 border border-gray-300 rounded-md disabled:opacity-40 disabled:cursor-not-allowed">
        Next →
    </button>
</div>

    );
}
