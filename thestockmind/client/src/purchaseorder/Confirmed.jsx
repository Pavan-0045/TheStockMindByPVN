import React from 'react';
import Warning_IMG from '../../assets/images/Icon.png'

function Confirmed({ onYes, onNo }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">

      <div className="relative bg-white rounded-xl shadow-xl p-8 w-full max-w-lg mx-4 border border-gray-200 text-center space-y-4">
       
        <div className="flex justify-center mb-4">
          <img
            src={Warning_IMG}
            alt="Warning"
            className="w-12 h-12"
          />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-black">
          Do you really want to place the purchase order! <br />
          Are you sure?
        </h3>

        <div className="flex justify-center gap-4">
          <button
            onClick={onYes}
            className="px-12 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-violet-700 hover:text-white transition"
          >
            Yes
          </button>
          <button
            onClick={onNo}
            className="px-12 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-violet-700 hover:text-white transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmed;


