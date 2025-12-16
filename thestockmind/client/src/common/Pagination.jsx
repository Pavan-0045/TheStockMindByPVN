import React from 'react'

function Pagination() {
  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-gray-50 border-t border-gray-400 text-sm">
        <button className="px-3 py-1 rounded-lg border text-gray-700 hover:bg-purple-50">← Previous</button>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-md border bg-purple-100 text-purple-700">1</button>
          <button className="px-3 py-1 rounded-md border hover:bg-purple-50">2</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 rounded-md border hover:bg-purple-50">10</button>
        </div>
        <button className="px-3 py-1 rounded-lg border text-gray-700 hover:bg-purple-50">Next →</button>
      </div>
  )
}

export default Pagination
