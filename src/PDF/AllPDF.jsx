/* eslint-disable react/prop-types */
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./style";
import { imageSrc } from "../URL";

const AllPDF = ({ data }) => {
  // Ensure data exists and skip the first row (header)
  if (!Array.isArray(data) || data.length < 2) {
    return null; // Handle error or return a placeholder
  }

  return (
    <Document style={styles.table}>
      {data.map((row, index) => (
        <Page key={index} size={"A4"} style={styles.page}>
          <View style={styles.header}>
            <Image style={styles.image} src={imageSrc} cache={false} />
            <View>
              <Text style={[styles.boldText, styles.headingText]}>
                FORWARDCODE TECHSTUDIO PRIVATE LIMITED
              </Text>
              <Text style={styles.headingText}>
                75, Line No. 5, Hirasingh Bagan, Kasidih, Jamshedpur, Jharkhand
                - 831001
              </Text>
            </View>
          </View>
          <View style={styles.slip}>
            <Text>
              Pay Slip for {row[1]} - {row[2]} {/* Month and Year */}
            </Text>
          </View>

          {/* Employee details */}
          <View style={styles.details}>
            <Text>Employee Name: {row[3]}</Text>
            <Text>Designation: {row[4]}</Text>
            <Text>Date of Joining: {row[6]}</Text>
            <Text>Bank Name: {row[11]}</Text>
            <Text>Bank Account No: {row[12]}</Text>
            <Text>PAN No: {row[13]}</Text>
          </View>

          {/* Earnings and Deductions */}
          <View style={styles.earnings}>
            <Text>Basic: ₹{row[14]}</Text>
            <Text>HRA: ₹{row[15]}</Text>
            <Text>Other Allowances: ₹{row[16]}</Text>
          </View>
          <View style={styles.deductions}>
            <Text>EPF: ₹{row[17]}</Text>
            <Text>Professional Tax: ₹{row[18]}</Text>
            <Text>Health Insurance: ₹{row[19]}</Text>
            <Text>TDS: ₹{row[20]}</Text>
          </View>
          <View style={styles.netPay}>
            <Text>Gross Salary: ₹{row[21]}</Text>
            <Text>Reimbursement: ₹{row[22]}</Text>
            <Text>Net Pay: ₹{row[23]}</Text>
          </View>

          {/* Footer Note */}
          <View style={[styles.footerNote, { textAlign: "left" }]}>
            <Text style={[{ fontWeight: "heavy", fontSize: "10px" }]}>
              Note:
            </Text>
            <Text>
              This is a computer-generated payslip, hence no signature is
              required.
            </Text>
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default AllPDF;
