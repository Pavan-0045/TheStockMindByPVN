import {
    Bars3Icon,
    XMarkIcon,
    MagnifyingGlassIcon,
    ArrowRightStartOnRectangleIcon,
    HomeIcon,
    ShoppingCartIcon,
    UsersIcon,
    ChartPieIcon,
    BuildingStorefrontIcon,
    CreditCardIcon,
    UserGroupIcon,
    LifebuoyIcon,
    Cog8ToothIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
    { name: "Overview", icon: HomeIcon, path: "/" },
    { name: "Products", icon: ShoppingCartIcon, path: "/products" },
    { name: "Supplier", icon: UsersIcon, path: "/supplier" },
    { name: "Category", icon: ChartPieIcon, path: "/category" },
    { name: "Warehouse", icon: BuildingStorefrontIcon, path: "/warehouse" },
    { name: "Payment", icon: CreditCardIcon, path: "/payment" },
    { name: "Roles", icon: UserGroupIcon, path: "/roles" },
    { name: "Support", icon: LifebuoyIcon, path: "/support" },
    { name: "Settings", icon: Cog8ToothIcon, path: "/settings" },

];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     localStorage.removeItem("authToken");
    //     localStorage.removeItem("user");

    //     alert("You’ve been logged out.");

    //     navigate("/login");
    // };

    return (
        <>
            {/* Mobile Toggle Button */}
            {!isOpen && (
                <div className="lg:hidden fixed top-4 left-4 z-50 flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md focus:ring-2 focus:ring-indigo-800">
                        <Bars3Icon className="w-6 h-6" />
                    </button>
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed lg:static top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg p-4
                flex flex-col transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}>
                {/* Logo + Search */}
                <div className="flex flex-col items-center m-2">
                    <div className="flex items-center justify-between w-full lg:justify-center">
                        <img
                            src="./src/assets/ProductImages/stack_mind.png"
                            alt="TheStockMind Logo"
                            className="w-40 lg:h-auto lg:w-full object-cover mb-3"
                        />
                        {isOpen && (
                            <button
                                onClick={() => setIsOpen(false)}
                                className="lg:hidden rounded-md focus:ring-2 focus:ring-indigo-800 ml-3 mb-2">
                                <XMarkIcon className="w-8 h-8" />
                            </button>
                        )}
                    </div>
                    <div className="w-full relative mt-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-10 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-2 top-2" />
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 overflow-y-auto">
                    {menuItems.map((item) => {
                        if (item.name === "Overview" || item.name === "Settings") {
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center w-full px-3 py-2 rounded-lg transition
                    ${
                        isActive
                            ? "bg-indigo-100 text-indigo-600"
                            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    }`
                                    }
                                    onClick={() => setIsOpen(false)}>
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </NavLink>
                            );
                        } else {
                            const isDropdownOpen = openDropdown === item.name;
                            return (
                                <div key={item.name}>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(isDropdownOpen ? null : item.name)
                                        }
                                        className="flex items-center w-full px-3 py-2 rounded-lg transition text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                                        <item.icon className="w-5 h-5 mr-3" />
                                        {item.name}
                                        <ChevronDownIcon
                                            className={`w-4 h-4 ml-auto transition-transform ${
                                                isDropdownOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="ml-6 mt-1">
                                            <NavLink
                                                to={item.path}
                                                className={({ isActive }) =>
                                                    `flex items-center w-full px-3 py-1 rounded-lg transition text-sm
                    ${
                        isActive
                            ? "bg-indigo-100 text-indigo-600"
                            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    }`
                                                }
                                                onClick={() => setIsOpen(false)}>
                                                {item.name}
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                            );
                        }
                    })}
                </nav>

                {/* Footer (User Info) */}
                <div className="border-t pt-4 mt-4 text-sm text-gray-300 relative mb-4">
                    <div className="flex items-center justify-between pl-2">
                        {/* Admin Info */}
                        <div className="flex items-center space-x-2">
                            <img
                                src="./src/assets/ProductImages/67da9fddd372b1b5b44ffef41eed6ceb810ddf8a.jpg"
                                alt="avatar"
                                className="rounded-full w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-gray-700">Olivia Rhye</p>
                                <p className="text-xs text-gray-500">Admin</p>
                            </div>
                        </div>

                        {/* Logout Icon */}
                        <button
                            title="Logout"
                            // onClick={handleLogout}
                            className="pr-4 text-gray-400 hover:text-red-500 transition">
                            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}