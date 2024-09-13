/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 30,
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionParagraph: {
    fontSize: 9,
    marginBottom: 5,
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
  },
  tableCellHeader: {
    fontWeight: "bold",
    fontSize: 10,
  },
  tableCell: {
    fontSize: 9,
  },
  note: {
    fontWeight: "bold",
    fontSize: 8,
    marginTop: 15,
  },
  footerText: {
    fontSize: 8,
    marginTop: 5,
  },
  netPayText: {
    fontSize: 9,
    marginTop: 10,
    fontWeight: "bold",
  },
});

const MyPDF = ({ data }) => {
  const [row] = data;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Company Info */}
        <Text style={styles.sectionTitle}>
          FORWARDCODE TECHSTUDIO PRIVATE LIMITED
        </Text>
        <Text style={styles.sectionParagraph}>
          75, Line No. 5, Hirasingh Bagan, Kasidih, Jamshedpur, Jharkhand
          -831001
        </Text>

        {/* Pay Slip Title */}
        <Text style={styles.sectionTitle}>
          Pay Slip for {row[1]} - {row[2]}
        </Text>

        {/* Employee Details */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Employee Name:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[3]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Designation:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[4]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Employee ID:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[0]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Department:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[5]}</Text>
            </View>
          </View>
        </View>

        {/* Earnings Section */}
        <Text style={styles.sectionTitle}>Earnings</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Basic</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[14]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>HRA</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[15]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Other Allowances</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[16]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Total Working days</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[8]}</Text>
            </View>
          </View>
        </View>

        {/* Deductions Section */}
        <Text style={styles.sectionTitle}>Deductions</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>EPF</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[17]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Professional Tax</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[18]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Health Insurance/ESI</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[20]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>TDS</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[20]}</Text>
            </View>
          </View>
        </View>

        {/* Net Pay and Bank Details */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Gross Salary</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[21]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Net Pay</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[23]}</Text>
            </View>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>HAR</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[15]}</Text>
            </View>
          </View>
        </View>

        {/* Net Pay in Words */}
        <Text style={styles.netPayText}>
          Net Pay (In words): Sixteen Thousand Only
        </Text>

        {/* Additional Info */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Bank Name</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[11]}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Bank A/c No.</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[12]}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>PAN No.</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{row[13]}</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.note}>Note:</Text>
        <Text style={styles.footerText}>
          "This is a computer-generated payslip, hence no signature is
          required."
        </Text>
      </Page>
    </Document>
  );
};

export default MyPDF;
