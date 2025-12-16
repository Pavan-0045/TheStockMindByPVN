import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CubeIcon,
  TruckIcon,
  Squares2X2Icon,
  BanknotesIcon,
  UsersIcon,
  LifebuoyIcon,
  Cog8ToothIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ArrowRightStartOnRectangleIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  BookOpenIcon,
  PercentBadgeIcon,
  DocumentChartBarIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    Payment: false,
    Roles: false,
    Support: false,
  });

  const menu = [
    { name: "Overview", icon: HomeIcon, path: "/overview" },
    { name: "Products", icon: CubeIcon, path: "/products" },
    { name: "Supplier", icon: TruckIcon, path: "/supplier" },
    { name: "Category", icon: Squares2X2Icon, path: "/category" },
    { name: "Warehouse", icon: CubeIcon, path: "/warehouse" },
    { name: "Stock", icon: ChartBarIcon, path: "/stock" },
    { name: "Payment", icon: BanknotesIcon, hasDropdown: true },
    { name: "Roles", icon: UsersIcon, hasDropdown: true },
    { name: "Support", icon: LifebuoyIcon, hasDropdown: true },
    { name: "Invoice", icon: DocumentChartBarIcon, path: "/invoice" },
    { name: "Settings", icon: Cog8ToothIcon, path: "/settings" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 bg-purple-600 text-white p-2 rounded-lg shadow-md transition-all duration-300 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col justify-between transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-center">
          <img
            src="/src/assets/Images/Vector.png"
            alt="Logo"
            className="w-40 object-contain"
          />
        </div>

        {/* Search */}
        <div className="px-4 py-2 mt-0">
          <div className="flex items-center gap-2 border rounded-lg px-2 py-1.5">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-sm outline-none"
            />
          </div>
        </div>

        {/* Menu */}
        <ul className="px-2 flex-1 overflow-y-auto">
          {menu.map((item) => (
            <li key={item.name} className="mb-1">
              <div
                className="flex justify-between items-center px-4 py-2.5 rounded-lg hover:bg-purple-50 hover:text-purple-700"
                onClick={() =>
                  item.hasDropdown &&
                  setDropdown((prev) => ({
                    ...prev,
                    [item.name]: !prev[item.name],
                  }))
                }
              >
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 w-full transition-all duration-200 ${
                        isActive
                          ? "text-purple-700 font-medium bg-purple-50"
                          : "text-gray-700"
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </NavLink>
                ) : (
                  <div className="flex items-center gap-3 text-gray-700">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                )}
                {item.hasDropdown && (
                  <ChevronDownIcon
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      dropdown[item.name] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.hasDropdown && dropdown[item.name] && (
                <ul className="ml-10 mt-1 text-sm text-gray-600">
                  <li className="py-1 hover:text-purple-600 cursor-pointer">
                    Option 1
                  </li>
                  <li className="py-1 hover:text-purple-600 cursor-pointer">
                    Option 2
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Admin Info */}
        <div className="border-t border-gray-400 mx-5 mb-3 mt-2 pt-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/Images/Avatar.png"
                alt="Admin"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Olivia Rhye</p>
                <p className="text-sm text-gray-500">Admin</p>
              </div>
            </div>
            <button
              title="Logout"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
