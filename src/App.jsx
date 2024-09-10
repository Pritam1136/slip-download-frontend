import { useEffect, useState } from "react";
import { url } from "./URL";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${url}/api/sheet-data?spreadsheetId=1dztvIjzznPl_5ywIpY1RFbwWybfHdvkvXg7DfFlFhOo&sheetName=Sheet1`,
          {
            headers: {
              // Include your auth token if required
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          },
        );

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
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="loadingText">Loading...</p>;
  if (error) return <p className="loadingText">{error}</p>;

  return (
    <div>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-indigo-600">
            Google Sheets Data
          </h1>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  {data[0] &&
                    data[0].map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 text-left text-sm font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border-t border-gray-300 px-4 py-2 text-sm text-gray-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <a
              href={
                "https://hackernoon.com/lang/es/como-usar-google-sheets-api-con-nodejs-cz3v316f"
              }
              className="inline-block rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download Salary Slip
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
