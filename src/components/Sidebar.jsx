/* eslint-disable react/prop-types */

function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-slate-200 p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
    >
      <ul className="space-y-4 text-black">
        <li className="sidebarOptions">Option 1</li>
        <li className="sidebarOptions">Option 2</li>
        <li className="sidebarOptions">Option 3</li>
      </ul>
    </div>
  );
}

export default Sidebar;
