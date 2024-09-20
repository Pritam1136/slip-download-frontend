/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Sidebar({ isOpen, onFilterChange }) {
  const years = Array.from(
    new Array(10),
    (_val, index) => Number(new Date().getFullYear() - 1) - index,
  );

  const [selectedYear, setSelectedYear] = useState("2024");
  // const [date, setDate] = useState(new Date());
  const [isFinancialYear, setIsFinancialYear] = useState(false);

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setIsFinancialYear(false); // Reset financial year mode
    setSelectedYear(newYear);
    onFilterChange({ year: newYear });
  };

  const handleFinancialYearSelection = () => {
    const financialYearStart = Number(selectedYear) - 1;
    const financialYearEnd = Number(selectedYear);
    setIsFinancialYear(true);

    onFilterChange({
      financialYear: { start: financialYearStart, end: financialYearEnd },
    });
  };

  return (
    <div
      className={`fixed left-0 top-0 mt-[74px] h-full w-64 bg-[#fff] p-4 shadow-2xl transition-transform duration-300 lg:mt-[78px] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:block lg:translate-x-0`}
    >
      <ul className="space-y-4 text-black">
        <li className="sidebarOptions">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="optionStyles"
          >
            <option value="2024">2024</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </li>
        <li className="sidebarOptions">
          <button onClick={handleFinancialYearSelection}>
            {`${selectedYear - 1}-${selectedYear}`}
          </button>
        </li>
        <li className="sidebarOptions">Download all</li>
      </ul>
    </div>
  );
}

export default Sidebar;
