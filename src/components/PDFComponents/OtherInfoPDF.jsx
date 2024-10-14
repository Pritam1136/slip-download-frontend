/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../PDF/style";
import { toWords } from "number-to-words";

function OtherInfoPDF({ data }) {
  const [row] = data;
  const netPay = row[23]; // Net Pay amount
  const amountInWords = toWords(netPay); // Convert to words

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
          <Text>{amountInWords} Only</Text>
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
