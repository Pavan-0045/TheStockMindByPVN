import Sidebar from "./Sidebar"; 
export default function Layout({ children }) {
  return (
    <div className="flex bg-gray-50 h-screen overflow-y-auto">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}