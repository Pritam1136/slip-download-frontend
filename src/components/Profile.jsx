import { useDarkMode } from "../context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faRightFromBracket,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleMode } = useDarkMode();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

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
            <li className="profileMenu" onClick={toggleMode}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              <span className="ml-2">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </li>
            <li>
              <div className="profileMenu text-red-600" onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
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
