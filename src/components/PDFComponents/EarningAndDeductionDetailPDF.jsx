/* eslint-disable react/prop-types */
import { StyleSheet, Text, View } from "@react-pdf/renderer";

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

function EarningAndDeductionDetailPDF({ data }) {
  const [row] = data;

  return (
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
  );
}

export default EarningAndDeductionDetailPDF;
