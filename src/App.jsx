import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://slip-download-backend.onrender.com/api/sheet-data?spreadsheetId=1dztvIjzznPl_5ywIpY1RFbwWybfHdvkvXg7DfFlFhOo&sheetName=Sheet1",
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="p-5 text-center text-4xl font-bold text-yellow-900">
        Google Sheets Data
      </h1>
      <div
        className="m-5 flex justify-center p-5 align-middle"
        id="table-to-pdf"
      >
        <table>
          <thead>
            <tr>
              {data[0] &&
                data[0].map((header, index) => <th key={index}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="m-6 flex justify-center align-middle">
        <a
          href={
            "https://hackernoon.com/lang/es/como-usar-google-sheets-api-con-nodejs-cz3v316f"
          }
        >
          Download as PDF
        </a>
      </div>
    </div>
  );
}

export default App;
