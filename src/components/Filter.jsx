/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = Array.from(
    new Array(10),
    (_val, index) => Number(new Date().getFullYear()) - index,
  ); // Last 10 years

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    onFilterChange({ month: e.target.value, year: selectedYear });
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    onFilterChange({ month: selectedMonth, year: e.target.value });
  };

  return (
    <div className="mb-4 flex space-x-4">
      <select
        value={selectedMonth}
        onChange={handleMonthChange}
        className="form-select"
      >
        <option value="">Select Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>

      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="form-select"
      >
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
