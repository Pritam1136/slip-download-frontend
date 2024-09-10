import { useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar"; // Import the Sidebar component

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a
            href="https://www.linkedin.com/company/forwardcode-techstudio/mycompany/"
            className="flex items-center"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQH6fJz1s57_eA/company-logo_200_200/company-logo_200_200/0/1630509348990/forwardcode_techstudio_logo?e=1733961600&v=beta&t=RgWEdt4YnKk8_oIG7LCGqhbfGeahg7QswWTmFXmcxjg"
              className="mr-3 h-6 sm:h-9"
              alt="FCTS Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              FCTS
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="mr-2 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5">
              <Profile />
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"  // Hide button on large screens
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} />  {/* Sidebar opens or closes on small screens */}
    </header>
  );
}
