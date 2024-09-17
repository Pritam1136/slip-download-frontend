/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../PDF/style";

function EmployeeDetailPDF({ data }) {
  const [row] = data;

  return (
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
  );
}

export default EmployeeDetailPDF;
