/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { url } from "./URL";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleDownload = (rowIndex, row) => {
    console.log(`Download clicked for ${rowIndex + 1}`, row);
  };

  if (loading) return <p className="loadingText">Loading...</p>;
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:pl-72 lg:pr-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-indigo-600">
            Google Sheets Data
          </h1>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    S.No
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Month
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Year
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="tableData">{rowIndex + 1}</td>
                    <td className="tableData">{row[5]}</td>
                    <td className="tableData">{row[6]}</td>
                    <td className="tableData flex justify-center align-middle">
                      <button
                        className="buttonDesign rounded bg-indigo-600 px-2 py-1 text-white"
                        onClick={() => handleDownload(rowIndex, row)}
                      >
                        Download
                      </button>
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
