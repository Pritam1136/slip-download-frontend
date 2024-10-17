import { useEffect, useState } from "react";
import { url } from "./URL";
import Header from "./Components/Header";
import TextSpinnerLoader from "./Components/TextSpinner/TextSpinner";
import LogoutButton from "./utility/Logout";
import DataTable from "./Components/DataTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setfilteredData] = useState([]);

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

        if (Array.isArray(result) && Array.isArray(result[0])) {
          setData(result);
          setfilteredData(result.slice(1).filter((row) => row[2] === "2024"));
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleFilterChange = ({ year, financialYear }) => {
    if (financialYear) {
      const { start, end } = financialYear;
      const filtered = data.filter((row) => {
        const rowYear = Number(row[2]);
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
      setfilteredData(filtered);
    } else if (year) {
      const filtered = data.filter((row) => {
        const rowYear = Number(row[2]);
        return rowYear === Number(year);
      });
      console.log(filtered);
      setfilteredData(filtered);
    }
  };

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextSpinnerLoader message={"Gathering data from sheets."} />
      </div>
    );
  if (error)
    return (
      <div className="loadingText">
        {error}
        <div className="flex w-full justify-center pt-6 align-middle">
          <button className="buttonDesign max-w-20">
            <LogoutButton />
          </button>
        </div>
      </div>
    );

  return (
    <div>
      <Header onFilterChange={handleFilterChange} data={filteredData} />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:ml-64">
        <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
          <h1 className="heading block text-center text-4xl font-black leading-9 tracking-tight text-[#a651eb] lg:hidden">
            SlipStream
          </h1>
          <DataTable filteredData={filteredData} />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
