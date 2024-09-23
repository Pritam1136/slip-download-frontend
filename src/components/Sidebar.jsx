/* eslint-disable react/prop-types */
import { useState } from "react";

function Sidebar({ isOpen, onFilterChange }) {
  const years = Array.from(
    new Array(10),
    (_val, index) => Number(new Date().getFullYear()) - index,
  );

  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedFinancialYear, setSelectedFinancialYear] = useState("2024");

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setSelectedYear(newYear);
    onFilterChange({ year: newYear });
  };

  const handleFinancialYearChange = (e) => {
    const financialYear = e.target.value;
    setSelectedFinancialYear(financialYear);

    const financialYearStart = Number(financialYear) - 1;
    const financialYearEnd = Number(financialYear);

    onFilterChange({
      financialYear: { start: financialYearStart, end: financialYearEnd },
    });
  };

  return (
    <div
      className={`sidebar fixed left-0 top-0 mt-[74px] h-full w-64 bg-[#fff] p-4 shadow-2xl transition-transform duration-300 lg:mt-[78px] ${
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
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </li>
        <li className="sidebarOptions">
          <select
            value={selectedFinancialYear}
            onChange={handleFinancialYearChange}
            className="optionStyles"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year - 1} - {year}
              </option>
            ))}
          </select>
        </li>
        <li className="sidebarOptions">Download all</li>
      </ul>
    </div>
  );
}

export default Sidebar;
