/* eslint-disable react/prop-types */
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 20,
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
    width: "33.33%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
  },
  tableCellHeader: {
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

const MyPDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Google Sheets Data</Text>

        {/* Table Header */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, styles.tableCellHeader]}>
              <Text>Month</Text>
            </View>
            <View style={[styles.tableCol, styles.tableCellHeader]}>
              <Text>Year</Text>
            </View>
          </View>

          {/* Table Data */}
          {data.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row[5]}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{row[6]}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default MyPDF;
