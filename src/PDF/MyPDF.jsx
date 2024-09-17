/* eslint-disable react/prop-types */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { imageSrc } from "../URL";
import EmploeeDetailPDF from "../Components/PDFComponents/EmploeeDetailPDF";
import EarningAndDeductionDetailPDF from "../Components/PDFComponents/EarningAndDeductionDetailPDF";
import OtherInfoPDF from "../Components/PDFComponents/OtherInfoPDF";

// Custom styles for the PDF layout
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

const MyPDF = ({ data }) => {
  const [row] = data;

  return (
    <Document style={styles.table}>
      <Page size={"A4"} style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.image} src={imageSrc} cache={false} />
          <View>
            <Text style={[styles.boldText, styles.headingText]}>
              FORWARDCODE TECHSTUDIO PRIVATE LIMITED
            </Text>
            <Text style={styles.headingText}>
              75, Line No. 5, Hirasingh Bagan, Kasidih, Jamshedpur, Jharkhand -
              831001
            </Text>
          </View>
        </View>
        <View style={styles.slip}>
          <Text>
            Pay Slip for {row[1]} - {row[2]}
          </Text>
        </View>
        {/* Employee details */}
        <EmploeeDetailPDF data={data} />

        {/* Earnings and Deductions */}
        <EarningAndDeductionDetailPDF data={data} />

        {/* Other Information */}
        <OtherInfoPDF data={data} />

        {/* Footer Note */}
        <View style={[styles.footerNote, { textAlign: "left" }]}>
          <Text style={[{ fontWeight: "heavy", fontSize: "10px" }]}>Note:</Text>
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
