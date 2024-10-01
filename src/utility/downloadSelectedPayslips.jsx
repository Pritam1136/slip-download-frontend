import JSZip from "jszip";
import MyPDF from "../PDF/MyPDF";
import { pdf } from "@react-pdf/renderer";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";

// Function to handle downloading all or selected payslips
const downloadSelectedPayslips = async (data, selectedData = null) => {
  const zip = new JSZip();

  // If selectedData is passed, use it, otherwise use all data
  const payslipData = selectedData ? selectedData : data;

  if (payslipData.length > 0) {
    for (const row of payslipData) {
      if (row) {
        const pdfBlob = await pdf(<MyPDF data={[row]} />).toBlob();
        zip.file(`Payslip_${row[1]}_${row[2]}.pdf`, pdfBlob);
      } else {
        console.error("Row data is null or undefined", row);
      }
    }

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, selectedData ? "selected_payslips.zip" : "payslips.zip");
    toast.success(
      selectedData
        ? "Selected payslips downloaded successfully."
        : "All payslips downloaded successfully.",
    );
  } else {
    toast.warn("No payslips available.");
  }
};

export default downloadSelectedPayslips;
