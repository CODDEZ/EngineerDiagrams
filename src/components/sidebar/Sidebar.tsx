import Sidebarnodes from "./Sidebarnodes";

export default function Sidebar() {
  return (
    <div className="h-full bg-gray-800 w-64 fixed left-0 top-0 z-10 shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Engineering Diagrams</h1>
      </div>
      <Sidebarnodes />
    </div>
  );
}
