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

function OtherInfoPDF({ data }) {
  const [row] = data;
  return (
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
  );
}

export default OtherInfoPDF;
