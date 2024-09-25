import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDF from "./PDF/MyPDF";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./URL";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong, faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  // Fetch data when the component mounts
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

        // Assuming the data is an array of rows
        if (Array.isArray(result) && Array.isArray(result[0])) {
          setData(result);

          // Default filter for the current year (e.g., 2024)
          setFilteredData(result.slice(1).filter((row) => row[2] === "2024"));
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        console.error(err); // Log error
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Log out function
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  // Filter data based on year or financial year
  const handleFilterChange = ({ year, financialYear }) => {
    if (financialYear) {
      const { start, end } = financialYear;
      const filtered = data.slice(1).filter((row) => {
        const rowYear = Number(row[2].trim());
        const rowMonth = row[1]?.trim().toLowerCase();
        return (
          (rowYear === start &&
            [
              "apr",
              "may",
              "jun",
              "jul",
              "aug",
              "sep",
              "oct",
              "nov",
              "dec",
            ].includes(rowMonth)) ||
          (rowYear === end && ["jan", "feb", "mar"].includes(rowMonth))
        );
      });
      setFilteredData(filtered);
    } else if (year) {
      const filtered = data.slice(1).filter((row) => row[2] === String(year)); // Ensure year is string
      setFilteredData(filtered);
    }
  };

  // Download a single PDF for each row
  const handleDownload = (_rowIndex, row) => {
    return (
      <PDFDownloadLink
        document={<MyPDF data={[row]} />}
        fileName={`PaySlip_${row[1]}_${row[2]}.pdf`}
      >
        {({ loading }) =>
          loading ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <span className="hover:text-gray-500">
              Download <FontAwesomeIcon icon={faArrowDownLong} />
            </span>
          )
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
      <div className="loadingText">
        {error}
        <div className="flex w-full justify-center pt-6 align-middle">
          <button className="buttonDesign max-w-20" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    );

  return (
    <div>
      {/* Header component that contains the filtering options */}
      <Header onFilterChange={handleFilterChange} data={filteredData} />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:ml-64">
        <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
          <h1 className="heading block text-center text-4xl font-black leading-9 tracking-tight text-[#a651eb] lg:hidden">
            SlipStream
          </h1>
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
                      className={
                        rowIndex % 2 === 0 ? "bg-[#f2edf7]" : "bg-white"
                      }
                    >
                      <td className="tableData">{rowIndex + 1}</td>
                      <td className="tableData">{row[1]}</td>
                      <td className="tableData">{row[2]}</td>
                      <td className="tableData">
                        {handleDownload(rowIndex, row)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      style={{ textAlign: "center", padding: "2px" }}
                      colSpan="4"
                    >
                      No data matched.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
