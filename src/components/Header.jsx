/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext"; // Import Dark Mode context

export default function Header({ onFilterChange, data }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { isDarkMode } = useDarkMode(); // Get the current mode (dark or light)

  // Load sidebar state from localStorage on initial render
  useEffect(() => {
    const savedSidebarState = localStorage.getItem("isSidebarOpen");
    if (savedSidebarState !== null) {
      setSidebarOpen(JSON.parse(savedSidebarState));
    }
  }, []);

  // Toggle sidebar and save state to localStorage
  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem("isSidebarOpen", JSON.stringify(newState));
  };

  return (
    <header>
      <nav className="mainHeader my-2 bg-slate-100 px-4 py-2.5 shadow-sm lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to={"/"} className="flex items-center">
            <img
              src={
                isDarkMode
                  ? "./forwardcode_logo_white.svg" // Light logo for dark mode
                  : "./forwardcode_logo_black_text.svg" // Dark logo for light mode
              }
              className="mr-3 h-6 sm:h-9"
              alt="FCTS Logo"
            />
          </Link>
          <div>
            <h1 className="heading hidden font-bold leading-9 text-[#a651eb] lg:block lg:text-4xl">
              SlipStream
            </h1>
          </div>
          <div className="flex items-center lg:order-2">
            <div>
              <Profile />
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
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
      <Sidebar
        isOpen={isSidebarOpen}
        onFilterChange={onFilterChange}
        data={data}
      />
      {/* Sidebar toggles on small screens */}
    </header>
  );
}
