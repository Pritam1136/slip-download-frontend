/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionParagraph: {
    fontSize: 10,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "semibold",
  },
  table: {
    display: "table",
    width: "auto",
    margin: "10px 0",
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
    fontSize: 12,
  },
  tableCell: {
    fontSize: 10,
  },
  footerText: {
    fontSize: 8,
    marginTop: 6,
    textAlign: "left",
  },
  note: {
    fontWeight: "bold",
    fontSize: 8,
    marginTop: 10,
    textAlign: "left",
  },
});

const MyPDF = ({ data }) => {
  const [row] = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>
          FORWARDCODE TECHSTUDIO PRIVATE LIMITED
        </Text>
        <Text style={styles.sectionParagraph}>
          75, Line No. 5, Hirasingh Bagan, Kasidih, Jamshedpur, Jharkhand
          -831001
        </Text>

        <Text style={styles.sectionTitle}>
          Pay Slip for {row[5]} - {row[6]}
        </Text>

        {/* Employee Details */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Employee Name:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>XXXXXX XXXXXXX</Text>
            </View>

            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Designation:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>
                Trainee Software Engineer
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Employee ID:</Text>
              <Text style={styles.tableCell}>MMYYYY-00XX</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>MMYYYY-00XX</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Department:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>N/A</Text>
            </View>
          </View>
        </View>

        {/* Earnings and Deductions */}
        <Text style={styles.sectionTitle}>Earnings</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Basic</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>8160.00</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>HRA</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>3200.00</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Other Allowances</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>4640.00</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Total Earnings</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>16000.00</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Deductions</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>EPF</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>0.00</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Professional Tax</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>0.00</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>Health Insurance/ESI</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>0.00</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCellHeader}>TDS</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>0.00</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.note}>Note:</Text>
        <Text style={styles.footerText}>
          "This is a computer-generated payslip, hence no signature required."
        </Text>
      </Page>
    </Document>
  );
};

export default MyPDF;
