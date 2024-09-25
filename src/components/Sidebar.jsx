/* eslint-disable react/prop-types */
import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import MyPDF from "../PDF/MyPDF";
import Select from "react-select";

function Sidebar({ isOpen, onFilterChange, data }) {
  const years = Array.from(
    new Array(10),
    (_val, index) => Number(new Date().getFullYear()) - index,
  ).map(year => ({ value: year, label: year }));

  const [selectedYear, setSelectedYear] = useState({ value: 2024, label: "2024" });
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

  return (
    <div
      className={`sidebar fixed left-0 top-0 mt-[74px] h-full w-64 bg-[#fff] p-4 shadow-2xl transition-transform duration-300 lg:mt-[78px] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:block lg:translate-x-0`}
    >
      <ul className="space-y-4 text-black">
        <li className="sidebarOptions">
          <Select
            value={selectedYear}
            onChange={handleYearChange}
            options={years}
            className="optionStyles"
          />
        </li>
        <li className="sidebarOptions">
          <Select
            value={selectedFinancialYear}
            onChange={handleFinancialYearChange}
            options={years.map(year => ({
              value: year.value,
              label: `${year.value - 1} - ${year.value}`,
            }))}
            className="optionStyles"
          />
        </li>
        <li className="sidebarOptions">
          <button onClick={handleDownloadZip} className="btn">
            Download All as ZIP
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
