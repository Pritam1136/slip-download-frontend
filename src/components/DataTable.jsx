/* eslint-disable react/prop-types */

import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDF from "../PDF/MyPDF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faSpinner,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const DataTable = ({ filteredData }) => {
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [checkmarkIndex, setCheckmarkIndex] = useState(null);

  const handleDownload = (rowIndex, row) => {
    return (
      <PDFDownloadLink
        document={<MyPDF data={[row]} />}
        fileName={`PaySlip_${row[1]}_${row[2]}.pdf`}
        onClick={() => {
          setCheckmarkIndex(null);

          toast.success(`Slip for ${row[1]} ${row[2]} is downloading!`);

          setLoadingIndex(null); // Hide spinner after 2 seconds
          setCheckmarkIndex(rowIndex); // Show checkmark for 3 seconds
          setTimeout(() => setCheckmarkIndex(null), 3000); // Hide checkmark after 3 seconds
        }}
      >
        {({ loading }) =>
          loading || loadingIndex === rowIndex ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : checkmarkIndex === rowIndex ? (
            <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          ) : (
            <span className="hover:text-gray-500">
              Download <FontAwesomeIcon icon={faArrowDownLong} />
            </span>
          )
        }
      </PDFDownloadLink>
    );
  };

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#a651eb] text-white">
            <th className="tableHead">S.No</th>
            <th className="tableHead">Month</th>
            <th className="tableHead">Year</th>
            <th className="tableHead">Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-[#f2edf7]" : "bg-white"}
              >
                <td className="tableData">{rowIndex + 1}</td>
                <td className="tableData">{row[1] ? row[1] : "Apr"}</td>
                <td className="tableData">{row[2]}</td>
                <td className="tableData">{handleDownload(rowIndex, row)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ textAlign: "center", padding: "2px" }} colSpan="4">
                No data matched.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
