/* eslint-disable react/prop-types */
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { imageSrc } from "../URL";
import EmployeeDetailPDF from "../Components/PDFComponents/EmployeeDetailPDF";
import EarningAndDeductionDetailPDF from "../Components/PDFComponents/EarningAndDeductionDetailPDF";
import OtherInfoPDF from "../Components/PDFComponents/OtherInfoPDF";
import { styles } from "./style";

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
        <EmployeeDetailPDF data={data} />

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
