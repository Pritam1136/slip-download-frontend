/* eslint-disable react/prop-types */
import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import MyPDF from "../PDF/MyPDF";

function Sidebar({ isOpen, onFilterChange, data }) {
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
