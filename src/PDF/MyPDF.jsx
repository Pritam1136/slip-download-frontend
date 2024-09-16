/* eslint-disable react/prop-types */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { imageSrc } from "../URL";

// Custom styles for the PDF layout
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    padding: 10,
  },
  headingText: {
    padding: 5,
  },
  slip: {
    marginTop: 2,
    marginBottom: 2,
    textAlign: "center",
    border: 1,
    borderStyle: "solid",
    padding: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "left",
  },
  footerNote: {
    marginTop: 20,
    fontSize: 8,
    textAlign: "center",
  },
  sectionTitle: {
    padding: 5,
    fontWeight: "bold",
    borderWidth: 1,
    borderStyle: "solid",
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 10, 
  },
});

const MyPDF = ({ data }) => {
  const [row] = data;

  return (
    <Document style={styles.table}>
      <Page size={"LETTER"} style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.image} src={imageSrc} cache={false} />
          <View>
            <Text style={[styles.boldText, styles.headingText]}>
              FORWARDCODE TECHSTUDIO PRIVATE LIMITED
            </Text>
            <Text style={styles.headingText}>
              75, Line No. 5, Hirasingh Bagan, Kasidih, Jamshedpur, Jharkhand -
              831001
            </Text>
          </View>
        </View>
        <View style={styles.slip}>
          <Text>
            Pay Slip for {row[1]} - {row[2]}
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Employee Name</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[3]}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Employee ID</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[0]}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Date of Joining</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[6]}</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>UAN</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[7]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Designation</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[4]}</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Total working days</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[8]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>LOP days</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[9]}</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Paid days</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[10]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Pan no</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[13]}</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Department</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[5]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Bank Name</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[11]}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Bank A/c No.</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>{row[12]}</Text>
            </View>
          </View>
        </View>

        {/* Earnings and Deductions */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.sectionTitle, { textAlign: "center" }]}>
                Earnings
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.sectionTitle, { textAlign: "center" }]}>
                Deductions
              </Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Basic</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[14]}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>EPF</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[17]}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>HRA</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[15]}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Professional Tax</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[18]}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Other Allowances</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[16]}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Health Insurance/ESI</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[19]}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Gross Salary</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[21]}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>TDS</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[20]}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Net Pay</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>{row[23]}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Total Deductions</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>0.00</Text>
            </View>
          </View>
        </View>

        {/* Other Information */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Reimbursement</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{row[22]}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Amount in Words</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Sixteen Thousand Only</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Mode of Payment</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Bank Transfer</Text>
            </View>
          </View>
        </View>

        {/* Footer Note */}
        <View style={[styles.footerNote, { textAlign: "left" }]}>
          <Text style={[{ fontWeight: "heavy", fontSize: "10px" }]}>Note:</Text>
          <Text>
            This is a computer generated payslip, hence no signature is
            required.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPDF;
