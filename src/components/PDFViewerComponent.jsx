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
    padding: "15 10 20 10",
    fontFamily: "Noto Sans Devanagari",
    fontSize: 10,
  },
  container: {
    border: "1pt solid black",
    padding: "10 5",
    width: "100%",
    maxWidth: "100%",
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
    marginBottom: 5,
    alignItems: "flex-start",
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
    marginRight: 10,
    fontFamily: "Noto Sans Devanagari",
    fontWeight: 700,
  },
  permitNumberValue: {
    fontWeight: "bold",
  },
  twoColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
  boldText: {
    fontFamily: "Noto Sans Devanagari",
    fontWeight: 700,
  },
  singleLineField: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  singleLineLabel: {
    width: "auto",
    marginRight: 5,
  },
  singleLineValue: {
    flex: 1,
    fontFamily: "Noto Sans Devanagari",
    fontWeight: 700,
  },
  noteText: {
    fontSize: 8,
    marginTop: 10,
    marginBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },
  certificationText: {
    fontSize: 8,
    marginBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
});

const HindiDocument = ({ data }) => {
  const renderPairedField = (label1, value1, label2, value2) => (
    <View style={styles.fieldRow}>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldPair}>
          <Text style={styles.fieldLabel}>{label1}</Text>
          <Text style={[styles.fieldValue, styles.boldText]}>{value1 || " "}</Text>
        </View>
        <View style={styles.fieldPair}>
          <Text style={styles.fieldLabel}>{label2}</Text>
          <Text style={[styles.fieldValue, styles.boldText]}>{value2 || " "}</Text>
        </View>
      </View>
    </View>
  );

  const renderSingleField = (label, value) => (
    <View style={styles.fieldRow}>
      <View style={styles.fieldContainer}>
        <View style={styles.fieldPair}>
          <Text style={styles.fieldLabel}>{label}</Text>
          <Text style={[styles.fieldValue, styles.boldText]}>{value || " "}</Text>
        </View>
      </View>
    </View>
  );

  const renderSingleLineField = (label, value) => (
    <View style={styles.singleLineField}>
      <Text style={styles.singleLineLabel}>{label}</Text>
      <Text style={styles.singleLineValue}>{value}</Text>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.originalCopy}>मूल प्रति</Text>
          <Text style={styles.dateTime}>
            <Text style={styles.boldText}>{data?.printDate} {data?.printTime}</Text>
          </Text>

          <Text style={styles.topText}>"केवल राज्य के बाहर उपयोग हेतु"</Text>
          <Text style={styles.title}>अनुज्ञा-पत्र</Text>
          <Text style={styles.subtitle}>कृषि उपज मंडी समिति - <Text style={styles.boldText}>Dabra</Text></Text>
          <Text style={styles.subtitle}>जिला - <Text style={styles.boldText}>Gwalior</Text></Text>
          <Text style={styles.subtitle}>अधिनियम की धारा-19(6) तथा उपविधि 20(10)</Text>
          <Text style={styles.subtitle}>(मूल मंडी क्षेत्र अथवा मंडी प्रांगण से माल बाहर ले जाने के लिये)</Text>

          <View style={styles.permitNumber}>
            <Text>अनुज्ञा-पत्र क्रमांक : <Text style={styles.boldText}>{data?.permitNumber}</Text></Text>
          </View>

          {/* Numbered fields as per the image */}
          {renderPairedField("1. कृषि उपज का नाम", data?.cropName, "किस्म", data?.millQuality)}
          {renderPairedField("2. कृषि उपज की मात्रा-नग संख्या", data?.cropQuantityUnits, "कुल वजन(क्विंटल में)", data?.totalWeight)}
          {renderSingleField("3. कृषि उपज के स्वामी / विक्रेता का नाम :", data?.ownerName)}
          {renderPairedField("4. वाहन का प्रकार", data?.vehicleType, "वाहन क्रमांक", data?.vehicleNumber)}
          {renderSingleField("5. तौल कांटा का नाम एवं स्थान", data?.weighingStation)}
          {renderSingleField("6. तौल कांटा पर्ची नंबर", data?.weighingSlipNumber)}
          {renderSingleField("7. वाहन चालक का नाम", data?.driverName)}
          {renderPairedField("8. जमा की गई मंडी फीस / अनुज्ञापत्र का विवरण", data?.marketFeeDetails, "बाहर ले जाने का उद्देश्य", data?.purposeOfTransport)}

          <View style={styles.twoColumns}>
            <View style={styles.column}>
              <Text style={styles.columnTitle}>व्यापारी के लिये</Text>
              {renderSingleField("अनुज्ञप्ति क्रमांक/मान नंबर", data?.licenseNumber)}
              {renderSingleField("कृषि उपज का विवरण", data?.cropDetails)}
              {renderSingleField("क्रय दिनांक", data?.purchaseDate)}
              {renderSingleField("कुल क्रय मात्रा (क्विंटल में) :", data?.totalPurchaseQuantity)}
            </View>
            <View style={styles.column}>
              <Text style={styles.columnTitle}>क्रेता के लिये</Text>
              {renderSingleField("कुल लाई गई मात्रा", data?.totalBroughtQuantity)}
              {renderSingleField("वापिस ले जाई गई मात्रा", data?.returnedQuantity)}
              {renderSingleField("वापिस ले जाने का कारण", data?.returnReason)}
              {renderSingleField("व्यापारी के पास इस अनुज्ञापत्र से निकासी के बाद शेष स्कंध वजन (क्विंटल में) :", data?.remainingStockWeight)}
            </View>
          </View>

          {/* Buyer/Trader Information at bottom as per image */}
          {renderSingleLineField("क्रेता व्यापारी / फर्म / स्थान,जहाँ कृषि उपज (विक्रय/प्रोसेसिंग) के उद्देश्य से ले जायी जाती है का नाम :", data?.buyerTraderName)}
          {renderPairedField("जी.एस.टी. पंजीयन क्रमांक", data?.gstNumber, "मान नंबर", data?.manNumber)}
          {renderPairedField("मंडी समिति का जिला", data?.marketDistrict, "मंडी समिति", data?.marketCommittee)}
          {renderSingleField("जिला/प्रदेश", data?.districtState)}

          {/* Delivery Trader Information */}
          {renderSingleLineField("गंतव्य / डिलीवरी क्रेता व्यापारी / फर्म / स्थान जहाँ कृषि उपज (विक्रय / प्रोसेसिंग) के उद्देश्य से भेजी जाना है का नाम :", data?.deliveryTraderName)}
          {renderPairedField("जी.एस.टी. पंजीयन क्रमांक", data?.deliveryGSTNumber, "मान नंबर", data?.deliveryManNumber)}

          {/* Note text */}
          <Text style={styles.noteText}>
            (नोट - क्रेता व्यापारी को जारी इस अनुज्ञापत्र के आधार पर ही मंडी शुल्क / विकास शुल्क का भुगतान किया जाकर नवीन / डिलीवरी क्रेता के पक्ष में अनुज्ञापत्र जारी किया जा सकेगा । )
          </Text>

          {/* Certification text */}
          <Text style={styles.certificationText}>
            मैं प्रमाणित करता हूँ (व्यापारी के लिये लागू) अनुज्ञप्त्र में दर्ज कृषि उपज का भुगतान विक्रता को किया जा चुका है तथा इस देय मंडी शुल्क / नियतिथ सहायतार्थ राशि का पूर्ण भुगतान किया जा चुका है।
          </Text>

          {/* Signature section */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, marginBottom: 10, paddingRight: 20 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 10, marginBottom: 20 }}>( M/S SWASTIK FOOD PRODUCT )</Text>
              <Text style={{ fontSize: 10, marginBottom: 5 }}>हस्ताक्षर</Text>
              <Text style={{ fontSize: 10 }}>(कृषि उपज के स्वामी / प्रतिनिधि के)</Text>
            </View>
          </View>

          <View style={styles.qrCode}>
            {/* QR Code placeholder */}
          </View>
            {/* Additional certification text */}
          <Text style={[styles.certificationText, { marginTop: 5 }]}>
            उपरोक्त कृषि उपज को मंडी प्रांगण के बाहर ले जाने की अनुमति प्रदान की जाती है। प्रमाणित किया जाता है कि जहाँ तक यह व्यापार के सार पर लागू होता है, मैंने भलीभांति जाँच कर अपने आक्याक्षर कर दिया है कि अनुज्ञप्ति में निकासी हेतु दर्शायी गई कृषि उपज का पूर्ण भुगतान विक्रेता को किया जा चुका है। तथा इस पर देय मंडी शुल्क एवं नियतिथ सहायता राशि का भुगतान प्राप्त किया जा चुका है।
          </Text>

          {/* Bottom details section */}
          <View style={{ marginTop: 20, paddingLeft: 5 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ fontSize: 10, width: 200 }}>स्थान:</Text>
              <Text style={[styles.boldText, { fontSize: 10 }]}>{data?.place || ""}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ fontSize: 10, width: 200 }}>जारी करने का दिनांक एवं समय:</Text>
              <Text style={[styles.boldText, { fontSize: 10 }]}>{new Date().toLocaleDateString('en-IN')} {new Date().toLocaleTimeString('en-IN')}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ fontSize: 10, width: 200 }}>प्रिंट दिनांक एवं समय:</Text>
              <Text style={[styles.boldText, { fontSize: 10 }]}>{new Date().toLocaleDateString('en-IN')} {new Date().toLocaleTimeString('en-IN')}</Text>
            </View>
          </View>

          {/* Market employee signature section */}
          <View style={{ position: 'absolute', right: 20, bottom: 40, textAlign: 'center' }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>सक्षम मंडी कर्मचारी</Text>
            <Text style={{ fontSize: 10 }}>हस्ताक्षर / सील</Text>
          </View>

          {/* Computer generated note */}
          <Text style={{ fontSize: 8, textAlign: 'center', position: 'absolute', bottom: 10, left: 0, right: 0 }}>
            This is Computer Generated and No signature is required.
          </Text>
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
