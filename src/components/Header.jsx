/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ onFilterChange, data }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const savedSidebarState = localStorage.getItem("isSidebarOpen");
    if (savedSidebarState !== null) {
      setSidebarOpen(JSON.parse(savedSidebarState));
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem("isSidebarOpen", JSON.stringify(newState));
  };

  return (
    <header>
      <nav className="mainHeader bg-slate-100 px-4 py-3 shadow-sm lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to={"/"} className="flex items-center">
            <img
              src={
                isDarkMode
                  ? "./forwardcode_logo_white.svg"
                  : "./forwardcode_logo_black_text.svg"
              }
              className="mr-3 h-6 sm:h-9"
              alt="FCTS Logo"
            />
          </Link>
          <div>
            <h1 className="heading hidden font-black leading-9 text-[#a651eb] lg:block lg:text-4xl">
              SlipStream
            </h1>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              {isSidebarOpen ? (
                // Cross icon when sidebar is open
                <svg
                  className="h-6 w-6 rotate-90 transform transition-transform duration-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                // Hamburger icon when sidebar is closed
                <svg
                  className="h-6 w-6 transform transition-transform duration-700"
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
              )}
            </button>
          </div>
        </div>
      </nav>
      <Sidebar
        isOpen={isSidebarOpen}
        onFilterChange={onFilterChange}
        data={data}
      />
    </header>
  );
}
