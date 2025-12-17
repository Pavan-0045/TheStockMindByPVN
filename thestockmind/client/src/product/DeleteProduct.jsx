// DeleteProduct.js
import React from 'react';

function DeleteProduct({ onYes, onNo }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative bg-white rounded-xl shadow-xl p-8 w-full max-w-lg mx-4 border border-gray-200 text-center space-y-4">
        <div className="flex justify-center mb-4">
          <img src="./src/assets/ProductImages/alert.png" alt="Warning" className="w-12 h-12" />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-black">
          Do you really want to delete the selected product(s)? <br /> Are you sure?
        </h3>

        <div className="flex justify-center gap-4">
          <button onClick={onYes} className="px-12 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-violet-700 hover:text-white transition">
            Yes
          </button>
          <button onClick={onNo} className="px-12 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-violet-700 hover:text-white transition">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
