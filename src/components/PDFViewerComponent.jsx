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
    padding: 15,
    margin: 10,
  },
  header: {
    marginBottom: 15,
    textAlign: "center",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    fontSize: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 3,
    textAlign: "center",
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    padding: 3,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
    borderBottom: "0.5pt dotted #000",
    paddingBottom: 2,
  },
  label: {
    width: "40%",
    paddingRight: 5,
  },
  value: {
    width: "60%",
  },
  twoColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
  qrCode: {
    position: "absolute",
    top: 40,
    right: 40,
    width: 80,
    height: 80,
    border: "1pt solid black",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 8,
    borderTop: "1pt solid black",
    paddingTop: 10,
  }
});

const HindiDocument = ({ data }) => {
  const renderField = (label, value) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "_____________"}</Text>
    </View>
  );

  const renderSection = (title, fields) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {fields.map(([label, value]) => renderField(label, value))}
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.headerTop}>
            <Text>मूल प्रति</Text>
            <Text>{data?.printDate} {data?.printTime}</Text>
          </View>

          <View style={styles.header}>
            <Text style={styles.subtitle}>"केवल राज्य के बाहर उपयोग हेतु"</Text>
            <Text style={styles.title}>अनुज्ञा-पत्र</Text>
            <Text style={styles.subtitle}>कृषि उपज मंडी समिति - {data?.marketPlace}</Text>
            <Text style={styles.subtitle}>जिला - {data?.marketDistrict}</Text>
            <Text style={styles.subtitle}>अधिनियम की धारा-19(6) तथा उपविधि 20(10)</Text>
            <Text style={styles.subtitle}>(मूल मंडी क्षेत्र अथवा मंडी प्रांगण से माल बाहर ले जाने के लिये)</Text>
          </View>

          <View style={styles.qrCode}>
            {/* QR Code placeholder */}
          </View>

          {renderSection("कृषि उपज की जानकारी", [
            ["कृषि उपज का नाम", data?.cropName],
            ["किस्म", data?.millQuality],
            ["कृषि उपज की मात्रा", `${data?.cropQuantityUnits || ""} नग`],
            ["कुल वजन", `${data?.totalWeight || ""} क्विंटल`],
            ["कृषि उपज का विवरण", data?.cropDetails]
          ])}

          {renderSection("वाहन एवं तौल की जानकारी", [
            ["वाहन का प्रकार", data?.vehicleType],
            ["वाहन क्रमांक", data?.vehicleNumber],
            ["वाहन चालक का नाम", data?.driverName],
            ["तौल कांटा का नाम एवं स्थान", data?.weighingStation],
            ["तौल कांटा पर्ची नंबर", data?.weighingSlipNumber]
          ])}

          <View style={styles.twoColumns}>
            <View style={styles.column}>
              {renderSection("क्रय विवरण", [
                ["कुल लाई गई मात्रा", data?.totalBroughtQuantity],
                ["वापस ले जाई गई मात्रा", data?.returnedQuantity],
                ["क्रय दिनांक", data?.purchaseDate],
                ["कुल क्रय मात्रा", data?.totalPurchaseQuantity],
                ["शेष स्कंध वजन", data?.remainingStockWeight]
              ])}
            </View>
            <View style={styles.column}>
              {renderSection("मंडी विवरण", [
                ["मंडी फीस विवरण", data?.marketFeeDetails],
                ["बाहर ले जाने का उद्देश्य", data?.purposeOfTransport],
                ["मंडी समिति", data?.marketCommittee],
                ["जिला / प्रदेश", data?.districtState]
              ])}
            </View>
          </View>

          {renderSection("क्रेता की जानकारी", [
            ["क्रेता व्यापारी का नाम", data?.buyerTraderName],
            ["जी.एस.टी. पंजीयन क्रमांक", data?.gstNumber],
            ["मान नंबर", data?.buyerManNumber],
            ["गंतव्य स्थान", data?.destinationPlace],
            ["डिलीवरी क्रेता व्यापारी", data?.deliveryTrader],
            ["गंतव्य जी.एस.टी.", data?.destinationGST],
            ["गंतव्य मान नंबर", data?.destinationManNumber]
          ])}

          <View style={styles.footer}>
            <Text>यह कम्प्यूटर द्वारा जनरेट किया गया दस्तावेज है और इस पर हस्ताक्षर की आवश्यकता नहीं है।</Text>
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
