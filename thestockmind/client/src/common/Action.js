import { FiEdit2, FiRefreshCcw, FiMapPin, FiInfo } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa6";

export const actions = {
  edit: { icon: FiEdit2, color: "text-purple-600 hover:text-purple-800 my-1" },
  delete: { icon: RiDeleteBin6Line, color: "text-red-700 hover:text-red-800 my-1" },
  pdf: { icon: FaRegFilePdf, color: "text-gray-800 hover:text-gray-900 my-1" },
  refresh: { icon: FiRefreshCcw, color: "text-gray-800 hover:text-gray-900 my-1" },
  location: { icon: FiMapPin, color: "text-gray-800 hover:text-gray-900 my-1" },
  unavailable: { icon: FiInfo, color: "text-red  p-0.5 ", message: "Product Stock Not Available"   
 }
};
