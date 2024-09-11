/* eslint-disable react/prop-types */

function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed left-0 top-0 mt-[72px] h-full w-64 bg-[#D1E9F6] p-4 transition-transform duration-300 lg:mt-[78px] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:block lg:translate-x-0`}
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
