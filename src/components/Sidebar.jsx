/* eslint-disable react/prop-types */
import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import MyPDF from "../PDF/MyPDF";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faRightFromBracket,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

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
    // Pass the year value (not the whole object) to onFilterChange
    onFilterChange({ year: selectedOption.value });
  };

  const handleFinancialYearChange = (selectedOption) => {
    const financialYear = selectedOption.value;
    setSelectedFinancialYear(selectedOption);

    const financialYearStart = financialYear - 1;
    const financialYearEnd = financialYear;

    // Pass the financial year start and end to onFilterChange
    onFilterChange({
      financialYear: { start: financialYearStart, end: financialYearEnd },
    });
  };

  const handleDownloadZip = async () => {
    const zip = new JSZip();

    for (const row of data) {
      if (row) {
        const pdfBlob = await pdf(<MyPDF data={[row]} />).toBlob();
        zip.file(`Payslip_${row[1]}.pdf`, pdfBlob);
      } else {
        console.error("Row data is null or undefined", row);
      }
    }

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "payslips.zip");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div
      className={`sidebar fixed left-0 mt-[2px] h-full w-64 bg-[#fff] p-4 shadow-xl transition-transform duration-300 ${
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
              className="optionStyles"
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
              isSearchable={false}
            />
          </li>
          <li
            className="border-sl-300 mx-3 border-spacing-3 cursor-pointer rounded-[3px] border p-[6px] font-sans font-medium shadow-md hover:border-gray-400"
            onClick={handleDownloadZip}
          >
            <button>Download all</button>
          </li>
        </ul>

        <div className="mb-20 space-y-2">
          <div
            className={`mx-3 cursor-pointer py-2 hover:bg-gray-100 ${isDarkMode ? "text-red-600" : "text-red-600"}`}
            onClick={logout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="ml-2">Logout</span>
          </div>
          <div
            className={`mx-3 cursor-pointer py-2 hover:bg-gray-100 ${isDarkMode ? "text-white" : "text-black"}`}
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
