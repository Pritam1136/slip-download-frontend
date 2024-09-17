/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../PDF/style";

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
