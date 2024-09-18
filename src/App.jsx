/* eslint-disable no-unused-vars */
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDF from "./PDF/MyPDF";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./URL";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${url}/api/sheet-data`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Validate the format of the result
        if (Array.isArray(result) && Array.isArray(result[0])) {
          setData(result);
          setFilteredData(result.slice(1)); // Initialize with all data
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        setError(`You are not an employee....`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleFilterChange = ({ month, year }) => {
    const filtered = data.slice(1).filter((row) => {
      const rowMonth = row[1]?.trim().toLowerCase();
      const rowYear = row[2]?.trim();
      return (
        (month ? rowMonth === month.trim().toLowerCase() : true) &&
        (year ? rowYear === year.trim() : true)
      );
    });
    setFilteredData(filtered);
  };

  const handleDownload = (rowIndex, row) => {
    return (
      <PDFDownloadLink
        document={<MyPDF data={[row]} />}
        fileName={`PaySlip_${row[1]}_${row[2]}.pdf`}
      >
        {({ loading }) =>
          loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Download"
        }
      </PDFDownloadLink>
    );
  };

  if (loading)
    return (
      <p className="loadingText">
        <FontAwesomeIcon icon={faSpinner} spin />
      </p>
    );
  if (error)
    return (
      <p className="loadingText">
        {error}
        <div className="flex w-full justify-center pt-6 align-middle">
          <button className="buttonDesign max-w-20" onClick={logout}>
            Logout
          </button>
        </div>
      </p>
    );

  return (
    <div>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
          <Filter onFilterChange={handleFilterChange} />
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="tableHead">S.No</th>
                  <th className="tableHead">Month</th>
                  <th className="tableHead">Year</th>
                  <th className="tableHead">Download</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="tableData">{rowIndex + 1}</td>
                    <td className="tableData">{row[1]}</td>
                    <td className="tableData">{row[2]}</td>
                    <td className="tableData flex justify-center align-middle">
                      {handleDownload(rowIndex, row)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
