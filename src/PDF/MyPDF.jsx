/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Custom styles for the PDF layout
const styles = StyleSheet.create({
  page: {
    padding: 60,
    fontSize: 10,
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  boldText: {
    fontWeight: "900",
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
});

const MyPDF = ({ data }) => {
  return (
    <Document style={styles.table}>
      <Page size={"LETTER"} style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.boldText}>
            FORWARDCODE TECHSTUDIO PRIVATE LIMITED
          </Text>
          <Text>
            75, Line No. 5, Hirasingh Bagan, Kasidih, Jamshedpur, Jharkhand -
            831001
          </Text>
          <Text>Pay Slip for Jul - 2023</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Employee Name</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>XXXXXX XXXXXXX</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Employee ID</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>MMYYYY-00XX</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Date of Joining</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>DD-MM-YYYY</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>UAN</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>XXXXXXXXXX</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Date of Joining</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>DD-MM-YYYY</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>UAN</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>XXXXXXXXXX</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Date of Joining</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>DD-MM-YYYY</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>UAN</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>XXXXXXXXXX</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Date of Joining</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>DD-MM-YYYY</Text>
            </View>

            <View style={styles.tableCell}>
              <Text style={styles.boldText}>UAN</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>XXXXXXXXXX</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Bank Name</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>HDFC</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>Bank A/c No.</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.boldText}>XXX006412XXXXX</Text>
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
              <Text style={[{ textAlign: "right" }]}>16000.00</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>EPF</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>0.00</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>HRA</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>3200</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Professional Tax</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>0.00</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Other Allowances</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>8160.00</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Health Insurance/ESI</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>0.00</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Gross Salary</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>16000.00</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>TDS</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>0.00</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "left" }]}>Net Pay</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[{ textAlign: "right" }]}>16000.00</Text>
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
              <Text>0.00</Text>
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
        <View style={styles.footerNote}>
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
