/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../PDF/style";

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
