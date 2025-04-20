import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

// Register Hindi Font
Font.register({
  family: "Noto Sans Devanagari",
  src: "/fonts/NotoSansDevanagari-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Noto Sans Devanagari",
    fontSize: 10,
  },
  container: {
    border: "1pt solid black",
    padding: 10,
  },
  topText: {
    textAlign: "center",
    fontSize: 11,
    marginBottom: 5,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    textAlign: "center",
    marginBottom: 2,
  },
  permitNumber: {
    marginTop: 10,
    marginBottom: 10,
  },
  fieldRow: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "flex-start",
  },
  fieldNumber: {
    width: 15,
    marginRight: 5,
  },
  fieldContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fieldPair: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  fieldLabel: {
    width: "40%",
  },
  fieldValue: {
    flex: 1,
    borderBottom: "0.5pt dotted black",
    minHeight: 14,
    marginRight: 10,
  },
  fieldValueSmall: {
    width: 100,
    borderBottom: "0.5pt dotted black",
    marginRight: 5,
    minHeight: 14,
  },
  twoColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTop: "1pt solid black",
    paddingTop: 5,
    width: "100%",
  },
  column: {
    width: "50%",
    paddingHorizontal: 5,
  },
  columnTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    borderBottom: "0.5pt solid black",
    paddingBottom: 2,
    marginHorizontal: 5,
  },
  qrCode: {
    position: "absolute",
    top: 40,
    right: 40,
    width: 100,
    height: 100,
  },
  originalCopy: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 10,
  },
  dateTime: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 8,
  },
});

const HindiDocument = ({ data }) => {
  const renderPairedField = (number, label1, value1, label2, value2) => (
    <View style={styles.fieldRow}>
      <Text style={styles.fieldNumber}>{number}.</Text>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldPair}>
          <Text style={styles.fieldLabel}>{label1}</Text>
          <Text style={styles.fieldValue}>{value1 || ""}</Text>
        </View>
        <View style={styles.fieldPair}>
          <Text style={styles.fieldLabel}>{label2}</Text>
          <Text style={styles.fieldValue}>{value2 || ""}</Text>
        </View>
      </View>
    </View>
  );

  const renderSingleField = (number, label, value) => (
    <View style={styles.fieldRow}>
      <Text style={styles.fieldNumber}>{number}.</Text>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldPair}>
          <Text style={styles.fieldLabel}>{label}</Text>
          <Text style={styles.fieldValue}>{value || ""}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.originalCopy}>मूल प्रति</Text>
          <Text style={styles.dateTime}>{data?.printDate} {data?.printTime}</Text>

          <Text style={styles.topText}>"केवल राज्य के बाहर उपयोग हेतु"</Text>
          <Text style={styles.title}>अनुज्ञा-पत्र</Text>
          <Text style={styles.subtitle}>कृषि उपज मंडी समिति - Dabra</Text>
          <Text style={styles.subtitle}>जिला - Gwalior</Text>
          <Text style={styles.subtitle}>अधिनियम की धारा-19(6) तथा उपविधि 20(10)</Text>
          <Text style={styles.subtitle}>(मूल मंडी क्षेत्र अथवा मंडी प्रांगण से माल बाहर ले जाने के लिये)</Text>

          <View style={styles.permitNumber}>
            <Text>अनुज्ञा-पत्र क्रमांक : {data?.permitNumber}</Text>
          </View>

          {renderPairedField("1", "कृषि उपज का नाम", data?.cropName, "किस्म", data?.millQuality)}
          {renderPairedField("2", "कृषि उपज की मात्रा-नग संख्या", data?.cropQuantityUnits, "कुल वजन(क्विंटल में)", data?.totalWeight)}
          {renderSingleField("3", "कृषि उपज के स्वामी / विक्रेता का नाम :", data?.ownerName)}
          {renderPairedField("4", "वाहन का प्रकार", data?.vehicleType, "वाहन क्रमांक", data?.vehicleNumber)}
          {renderSingleField("5", "तौल कांटा का नाम एवं स्थान", data?.weighingStation)}
          {renderSingleField("6", "तौल कांटा पर्ची नंबर", data?.weighingSlipNumber)}
          {renderSingleField("7", "वाहन चालक का नाम", data?.driverName)}
          {renderPairedField("8", "जमा की गई मंडी फीस / अनुज्ञापत्र का विवरण", data?.marketFeeDetails, "बाहर ले जाने का उद्देश्य :", data?.purposeOfTransport)}

          <View style={styles.twoColumns}>
            <View style={[styles.column, { borderRight: "0.5pt solid black" }]}>
              <Text style={styles.columnTitle}>व्यापारी के लिये</Text>
              {renderSingleField("", "अनुज्ञप्ति क्रमांक/मान नंबर", data?.licenseNumber)}
              {renderSingleField("", "कृषि उपज का विवरण", data?.cropDetails)}
              {renderSingleField("", "क्रय दिनांक", data?.purchaseDate)}
              {renderSingleField("", "कुल क्रय मात्रा (क्विंटल में) :", data?.totalPurchaseQuantity)}
            </View>
            <View style={styles.column}>
              <Text style={styles.columnTitle}>क्रेता के लिये</Text>
              {renderSingleField("", "कुल लाई गई मात्रा", data?.totalBroughtQuantity)}
              {renderSingleField("", "वापिस ले जाई गई मात्रा", data?.returnedQuantity)}
              {renderSingleField("", "वापिस ले जाने का कारण", data?.returnReason)}
              {renderSingleField("", "व्यापारी के पास इस अनुज्ञापत्र से निकासी के बाद शेष स्कंध वजन (क्विंटल में) :", data?.remainingStockWeight)}
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text>क्रेता व्यापारी / फर्म / स्थान,जहाँ कृषि उपज (विक्रय/प्रोसेसिंग) के उद्देश्य से ले जायी जाती है का नाम :</Text>
            <Text style={[styles.fieldValue, { marginTop: 5 }]}>{data?.buyerTraderName}</Text>
            
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <View style={{ flex: 1 }}>
                <Text>जी.एस.टी. पंजीयन क्रमांक</Text>
                <Text style={styles.fieldValue}>{data?.gstNumber}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text>मान नंबर</Text>
                <Text style={styles.fieldValue}>{data?.buyerManNumber}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <View style={{ flex: 1 }}>
                <Text>मंडी समिति का जिला</Text>
                <Text style={styles.fieldValue}>{data?.marketDistrict}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text>मंडी समिति</Text>
                <Text style={styles.fieldValue}>{data?.marketCommittee}</Text>
              </View>
            </View>

            <View style={{ marginTop: 5 }}>
              <Text>जिला/प्रदेश</Text>
              <Text style={styles.fieldValue}>{data?.districtState}</Text>
            </View>
          </View>

          <View style={styles.qrCode}>
            {/* QR Code placeholder */}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const PDFViewerComponent = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full" style={{ height: "800px" }}>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <HindiDocument data={data} />
        </PDFViewer>
      </div>

      <div className="text-center">
        <PDFDownloadLink
          document={<HindiDocument data={data} />}
          fileName="anugya-patra.pdf"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PDFViewerComponent;
