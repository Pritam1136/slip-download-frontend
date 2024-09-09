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

  // const downloadPDF = () => {
  //   const doc = new jsPDF("p", "mm", "a4");
  //   let yPosition = 20; // Vertical position on the PDF page

  //   // Add a title to the PDF
  //   doc.setFontSize(16);
  //   doc.text("Google Sheets Data", 14, yPosition);
  //   yPosition += 10; // Add some space after the title

  //   // Get the table data
  //   const table = document.getElementById("table-to-pdf");
  //   const rows = table.querySelectorAll("tr");

  //   // Loop through table rows
  //   rows.forEach((row, _rowIndex) => {
  //     const cells = row.querySelectorAll("td, th");

  //     cells.forEach((cell, cellIndex) => {
  //       // Add each cell's text to the PDF
  //       doc.setFontSize(12);
  //       doc.text(cell.textContent, 14 + cellIndex * 40, yPosition); // Adjust horizontal position based on cell index
  //     });

  //     // Move to the next line in the PDF
  //     yPosition += 10;

  //     // Add new page if the content goes beyond page height
  //     if (yPosition >= 280) {
  //       doc.addPage();
  //       yPosition = 20; // Reset vertical position on new page
  //     }
  //   });

  //   // Save the PDF
  //   doc.save("data.pdf");
  // };

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
