import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faRightFromBracket,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // New state for dark mode
  const navigate = useNavigate();
  const menuRef = useRef(null); // Create a ref for the menu

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <div className="profileMenu">
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-2">Account</span>
              </div>
            </li>
            <li
              onClick={toggleMode}
              className="flex cursor-pointer items-center"
            >
              <li onClick={toggleMode} className="profileMenu">
                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
                <span className="ml-2">
                  {isDarkMode ? "Dark Mode" : "Light Mode"}
                </span>
              </li>
            </li>
            <li>
              <div className="profileMenu text-red-600" onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />{" "}
                <span className="ml-2">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;

{
  /*  */
}

//
