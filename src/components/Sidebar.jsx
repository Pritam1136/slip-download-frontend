/* eslint-disable react/prop-types */
import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import MyPDF from "../PDF/MyPDF";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faRightFromBracket,
  faSun,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sidebar({ isOpen, onFilterChange, data }) {
  const navigate = useNavigate();
  const { isDarkMode, toggleMode } = useDarkMode();

  const years = Array.from(
    new Array(10),
    (_val, index) => Number(new Date().getFullYear()) - index,
  ).map((year) => ({ value: year, label: year }));

  const [selectedYear, setSelectedYear] = useState({
    value: 2024,
    label: "2024",
  });
  const [selectedFinancialYear, setSelectedFinancialYear] = useState({
    value: 2024,
    label: "2023 - 2024",
  });

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    onFilterChange({ year: selectedOption.value });
  };

  const handleFinancialYearChange = (selectedOption) => {
    const financialYear = selectedOption.value;
    setSelectedFinancialYear(selectedOption);

    const financialYearStart = financialYear - 1;
    const financialYearEnd = financialYear;

    onFilterChange({
      financialYear: { start: financialYearStart, end: financialYearEnd },
    });
  };

  const handleDownloadZip = async () => {
    const zip = new JSZip();
    for (const row of data) {
      if (row) {
        const pdfBlob = await pdf(<MyPDF data={[row]} />).toBlob();
        zip.file(`Payslip_${row[1]}_${row[2]}.pdf`, pdfBlob);
      } else {
        console.error("Row data is null or undefined", row);
      }
    }

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "payslips.zip");
    toast.success(`payslip downloaded`);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  // Custom MenuList for custom scrollbar
  const CustomMenuList = (props) => (
    <components.MenuList {...props} className="custom-scrollbar">
      {props.children}
    </components.MenuList>
  );

  // Custom Option to display tick mark
  const CustomOption = (props) => (
    <components.Option {...props}>
      {props.isSelected && (
        <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-blue-50" />
      )}
      {props.label}
    </components.Option>
  );

  // Custom styles for the Select components
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: !isDarkMode && state.isFocused ? "#a651eb" : "#fff", // Change border color on focus in light mode
      boxShadow:
        !isDarkMode && state.isFocused
          ? `0 0 0 1px #a651eb`
          : provided.boxShadow, // Focus shadow only in light mode
      "&:hover": {
        borderColor:
          !isDarkMode && state.isFocused ? "#a651eb" : provided.borderColor, // Hover color for light mode when focused
      },
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "250px",
      overflowY: "auto",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? isDarkMode
          ? "#2d3748"
          : "#a651eb"
        : "transparent",
      color: isDarkMode ? "black" : "black",
      "&:hover": {
        backgroundColor: "#e2e8f0",
      },
    }),
  };

  return (
    <div
      className={`sidebar fixed left-0 mt-[2px] h-full w-64 bg-[#fff] p-4 shadow-xl transition-transform duration-700 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:block lg:translate-x-0`}
    >
      <div className="flex h-full flex-col justify-between">
        <ul className="space-y-4 text-black">
          <li className="mx-3 font-sans font-medium shadow-md">
            <Select
              value={selectedYear}
              onChange={handleYearChange}
              options={years}
              className={`optionStyles ${isDarkMode ? "bg-gray-700" : "bg-slate-100"}`}
              components={{ MenuList: CustomMenuList, Option: CustomOption }}
              styles={customStyles}
              isSearchable={false}
            />
          </li>
          <li className="mx-3 font-sans font-medium shadow-md">
            <Select
              value={selectedFinancialYear}
              onChange={handleFinancialYearChange}
              options={years.map((year) => ({
                value: year.value,
                label: `${year.value - 1} - ${year.value}`,
              }))}
              className="optionStyles"
              components={{ MenuList: CustomMenuList, Option: CustomOption }}
              styles={customStyles}
              isSearchable={false}
            />
          </li>
          <li
            className={`mx-3 border-spacing-3 cursor-pointer rounded-[3px] border bg-slate-100 p-[6px] font-sans font-medium shadow-md`}
            onClick={handleDownloadZip}
          >
            <button>Download all</button>
          </li>
        </ul>

        <div className="mb-20 space-y-2">
          <div
            className={`mx-3 cursor-pointer rounded-md p-2 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} text-red-600`}
            onClick={logout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="ml-2">Logout</span>
          </div>
          <div
            className={`mx-3 cursor-pointer rounded-md p-2 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-slate-100"} ${isDarkMode ? "text-white" : "text-black"}`}
            onClick={toggleMode}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            <span className="ml-2">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
