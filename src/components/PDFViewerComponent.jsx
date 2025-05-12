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
  family: "Nirmala",
  src: "/fonts/Nirmala.ttf",
});
Font.register({
  family: "NirmalaBold",
  src: "/fonts/NirmalaB.ttf",
});

const styles = StyleSheet.create({
  boldText: {
    width: "40%",
    fontSize: 6.85,
    fontWeight: "bold",
  },
  page: {
    padding: "40.74 40.3425",
    fontFamily: "Nirmala",
    fontSize: 10,
  },
  container: {
    border: "1pt solid black",
    padding: "10 0",
    width: "auto",
    margin: 0,
    position: 'relative',
  },
  headerDate: {
    position: 'absolute',
    top: 10,
    left: 18,
    fontSize: 8,
  },
  headerTitle: {
    position: 'absolute',
    top: 10,
    right: 230,
    fontSize: 8,
  },
  topText: {
    textAlign: "center",
    fontSize: 9.4846,
    marginBottom: 11.26,
    fontWeight: "bold",
  },
  title: {//anugya patra
    fontSize: 12.6134,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "NirmalaBold",
    marginBottom: 20.47,
  },
  subtitle1: { //krishi upaj
    fontSize: 8.4308,
    textAlign: "center",
    marginBottom: 3.46,
    fontFamily: "NirmalaBold",
  },
  subtitle2: { //jila
    fontSize: 8.4308,
    textAlign: "center",
    marginBottom: 3.46,
  },
  subtitle3: { //adhiniyam
    fontSize: 8.4308,
    textAlign: "center",
    marginBottom: 3.46,
  },
  subtitle4: { //mool mandi
    fontSize: 8.4308,
    textAlign: "center",
    marginBottom: 12.53,
    fontFamily: "NirmalaBold",
  },
  permitNumber: { //anukramak number
    marginTop: 10,
    marginBottom: 9.29,
    textAlign: "center",
    fontSize: 9.4846,

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
    width: "45%",
    fontSize: 6.85,
    marginRight: 4
  },
  fieldValue: {
    flex: 1,
    marginRight: 10,
    fontFamily: "Nirmala",
    fontWeight: 700,
    fontSize: 8.99,
  },
  fieldRow1: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "flex-start",
  },
  fieldContainer1: {
    flex: 1,
    flexDirection: "row",
  },
  fieldPair1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5
  },
  fieldPair2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10
  },
  fieldPair3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  fieldLabel1: {
    width: "28%",
    fontSize: 6.85,
    marginRight: 4
  },
  fieldLabel2: {
    width: "60%",
    fontSize: 6.85,
    marginRight: 4
  },
  fieldLabel3: {
    width: "65%",
    fontSize: 6.85,
    marginRight: 4
  },
  fieldValue1: {
    flex: 1,
    marginRight: 10,
    fontFamily: "Nirmala",
    fontWeight: 700,
    fontSize: 8.99,
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
    marginLeft: 5,
  },
  columnTitle: {
    fontSize: 6.85,
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
    fontFamily: "NirmalaBold",
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
    fontSize: 6.3231,
  },
  singleLineValue: {
    flex: 1,
    fontFamily: "Nirmala",
    fontWeight: 700,
  },
  noteText: {
    fontSize: 5.7962,
    marginTop: 10,
    marginBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 5,
  },
  noteText2: {
    fontSize: 5.7962,
    marginTop: 10,
    marginBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 25,
  },
  certificationText: {
    fontSize: 5.7962,
    marginBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 8,
  },
  footerLink: {
    position: 'absolute',
    bottom: 30,
    left: 48,
    fontSize: 8,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 30,
    right: 48,
    fontSize: 8,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 130,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  footerLine: {
    position: 'relative',
    width: '90%',
    height: 1,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  footerTopLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottom: '0.15pt solid #666666',
  },
  footerBottomLine: {
    position: 'absolute',
    top: 1.5,
    left: 0,
    right: 0,
    borderBottom: '0.15pt solid #666666',
  },
  nicText: {
    textAlign: 'center',
    fontSize: 8,
    marginBottom: 5,
    color: '#000000',
  },
  footerRow: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
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
      <Page size={[595.28, 1050]} style={styles.page}>
        <Text style={styles.headerDate}>{data?.printDate}, {data?.printTime}</Text>
        <Text style={styles.headerTitle}>Anugya-Patra</Text>
        <View style={styles.container}>
          <Text style={styles.originalCopy}>मूल प्रति</Text>
          {/* <Text style={styles.dateTime}>
            <Text style={styles.boldText}>{data?.printDate} {data?.printTime}</Text>
          </Text> */}

          <Text style={styles.topText}>"केवल राज्य के बाहर उपयोग हेतु"</Text>
          <Text style={styles.title}>अनुज्ञा-पत्र</Text>
          <Text style={styles.subtitle1}>कृषि उपज मंडी समिति - <Text style={styles.boldText}>Dabra</Text></Text>
          <Text style={styles.subtitle2}>जिला - <Text style={styles.boldText}>Gwalior</Text></Text>
          <Text style={styles.subtitle3}>अधिनियम की धारा-19(6) तथा उपविधि 20(10)</Text>
          <Text style={styles.subtitle4}>(मूल मंडी क्षेत्र अथवा मंडी प्रांगण से माल बाहर ले जाने के लिये)</Text>

          <View style={styles.permitNumber}>
            <Text>अनुज्ञा-पत्र क्रमांक : <Text style={styles.boldText}>{data?.permitNumber}</Text></Text>
          </View>

          {/* Numbered fields as per the image */}
          {renderPairedField("1. कृषि उपज का नाम", data?.cropName, "किस्म", data?.millQuality)}
          {renderPairedField("2. कृषि उपज की मात्रा-नग संख्या", data?.cropQuantityUnits, "कुल वजन(क्विंटल में)", data?.totalWeight)}
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel1}>3. कृषि उपज के स्वामी / विक्रेता का नाम :</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.ownerName || " "}</Text>
              </View>
            </View>
          </View>
          {/* {renderSingleField("3. कृषि उपज के स्वामी / विक्रेता का नाम :", data?.ownerName)} */}

          {renderPairedField("4. वाहन का प्रकार", data?.vehicleType, "वाहन क्रमांक", data?.vehicleNumber)}
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel1}>5. तौल कांटा का नाम एवं स्थान</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.weighingStation || " "}</Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel1}>6. तौल कांटा पर्ची नंबर</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.weighingSlipNumber || " "}</Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel1}>7. वाहन चालक का नाम</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.driverName || " "}</Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel2}>8. जमा की गई मंडी फीस / अनुज्ञापत्र का विवरण</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.marketFeeDetails || " "}</Text>
              </View>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel}>बाहर ले जाने का उद्देश्य</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.purposeOfTransport || " "}</Text>
              </View>
            </View>
          </View>

          <View style={styles.twoColumns}>
            <View style={styles.column}>
              <Text style={styles.columnTitle}><Text style={styles.boldText}>व्यापारी के लिये</Text></Text>
              {renderSingleField("अनुज्ञप्ति क्रमांक/मान नंबर", data?.licenseNumber)}
              {renderSingleField("कृषि उपज का विवरण", data?.cropDetails)}
              {renderSingleField("क्रय दिनांक", data?.purchaseDate)}
              {renderSingleField("कुल क्रय मात्रा (क्विंटल में) :", data?.totalPurchaseQuantity)}
            </View>
            <View style={styles.column}>
              <Text style={styles.columnTitle}><Text style={styles.boldText}>कृषको के लिये</Text></Text>
              {renderSingleField("कुल लाई गई मात्रा", data?.totalBroughtQuantity)}
              {renderSingleField("वापिस ले जाई गई मात्रा", data?.returnedQuantity)}
              {renderSingleField("वापिस ले जाने का कारण", data?.returnReason)}
              {renderSingleField("व्यापारी के पास इस अनुज्ञापत्र से निकासी के बाद शेष स्कंध वजन (क्विंटल में) :", data?.remainingStockWeight)}
            </View>
          </View>

          {/* Buyer/Trader Information at bottom as per image */}
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair1}>
                <Text style={styles.fieldLabel2}><Text style={styles.boldText}>क्रेता व्यापारी / फर्म / स्थान,जहाँ कृषि उपज (विक्रय/प्रोसेसिंग)</Text> के उद्देश्य से ले जायी जाती है का नाम :</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.buyerTraderName || " "}</Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair2}>
                <Text style={styles.fieldLabel}>जी.एस.टी. पंजीयन क्रमांक</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.gstNumber || " "}</Text>
              </View>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel}>मान नंबर</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.manNumber || " "}</Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair2}>
                <Text style={styles.fieldLabel}>मंडी समिति का जिला</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.marketDistrict || " "}</Text>
              </View>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel}>मंडी समिति</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.marketCommittee || " "}</Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair2}>
                <Text style={styles.fieldLabel}>जिला/प्रदेश</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.marketDistrict || " "}</Text>
              </View>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel}></Text>
                <Text style={[styles.fieldValue, styles.boldText]}></Text>
              </View>
            </View>
          </View>
         

          {/* Delivery Trader Information */}
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair1}>
                <Text style={styles.fieldLabel3}><Text style={styles.boldText}>गंतव्य / डिलीवरी क्रेता व्यापारी / फर्म / स्थान जहाँ कृषि उपज (विक्रय / प्रोसेसिंग)</Text> के उद्देश्य से भेजी जाना है का नाम :</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.deliveryTraderName || " "}</Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldRow}>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldPair2}>
                <Text style={styles.fieldLabel}>जी.एस.टी. पंजीयन क्रमांक</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.deliveryGSTNumber || " "}</Text>
              </View>
              <View style={styles.fieldPair}>
                <Text style={styles.fieldLabel}>मान नंबर</Text>
                <Text style={[styles.fieldValue, styles.boldText]}>{data?.deliveryManNumber || " "}</Text>
              </View>
            </View>
          </View>
          {/* Note text */}
          <Text style={styles.noteText}>
            (नोट - क्रेता व्यापारी को जारी इस अनुज्ञापत्र के आधार पर ही मंडी शुल्क / विकास शुल्क का भुगतान किया जाकर नवीन / डिलीवरी क्रेता के पक्ष में अनुज्ञापत्र जारी किया जा सकेगा । )
          </Text>
          <Text style={styles.noteText2}>
            मैं प्रमाणित करता हूँ (व्यापारी के लिये लागू) अनुजापत में दर्ज कृषि उपज का भुगतान विक्रता को किया जा चुका है तथा इस देय मंडी शुल्क / नियतिथ सहायतार्थ राशि का पूर्ण भुगतान किया जा चुका है।
          </Text>


          {/* Signature section */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5, marginBottom: 5, paddingRight: 20 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 10, marginBottom: 10 }}>................................................</Text>

              <Text style={{ fontSize: 7.342, marginBottom: 10, fontWeight: 'bold' }}>( M/S SWASTIK FOOD PRODUCT )</Text>
              <Text style={{ fontSize: 10, marginBottom: 3 }}>हस्ताक्षर</Text>
              <Text style={{ fontSize: 10 }}>(कृषि उपज के स्वामी / प्रतिनिधि के)</Text>
            </View>
          </View>

          <View style={styles.qrCode}>
            {/* QR Code placeholder */}
          </View>

          {/* Additional certification text */}
          <Text style={[styles.certificationText, { marginTop: 3, marginBottom: 3 }]}>
            उपरोक्त कृषि उपज को मंडी प्रांगण के बाहर ले जाने की अनुमति प्रदान की जाती है। प्रमाणित किया जाता है कि जहाँ तक यह व्यापार के सार पर लागू होता है, मैंने भलीभांति जाँच कर अपने आक्याक्षर कर दिया है कि अनुज्ञप्ति में निकासी हेतु दर्शायी गई कृषि उपज का पूर्ण भुगतान विक्रेता को किया जा चुका है। तथा इस पर देय मंडी शुल्क एवं नियतिथ सहायता राशि का भुगतान प्राप्त किया जा चुका है।
          </Text>

          {/* Bottom details section */}
          <View style={{ marginTop: 10, paddingLeft: 5 }}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ fontSize: 6.943, width: 200 }}>स्थान:</Text>
              <Text style={[styles.boldText, { fontSize: 10 }]}>{data?.place || ""}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ fontSize: 6.85, width: 200 }}>जारी करने का दिनांक एवं समय:</Text>
              <Text style={[styles.boldText, { fontSize: 10 }]}>{data?.issueDate} {data?.issueTime}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ fontSize: 6.85, width: 200 }}>प्रिंट दिनांक एवं समय:</Text>
              <Text style={[styles.boldText, { fontSize: 10 }]}>{data?.printDate} {data?.printTime}</Text>
            </View>
          </View>

          {/* Market employee signature section */}
          <View style={{ position: 'absolute', right: 20, bottom: 30, textAlign: 'center' }}>
            <Text style={{ fontSize: 6.85, marginBottom: 3 }}>सक्षम मंडी कर्मचारी</Text>
            <Text style={{ fontSize: 6.85, textAlign: 'center' }}>हस्ताक्षर / सील</Text>
          </View>

          {/* Computer generated note */}
          <Text style={{ fontSize: 8, textAlign: 'center', marginTop: 20, marginBottom: 10, }}>
            This is Computer Generated and No signature is required.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerLine}>
            <View style={styles.footerTopLine} />
            <View style={styles.footerBottomLine} />
          </View>
          <Text style={styles.nicText}>
            NIC NIC BHOPAL(MP) © 2025-2026
          </Text>
        </View>
        <View style={styles.footerRow}>
          <Text style={{ fontSize: 7, color: '#333333' }}>
            https://eanugya.mp.gov.in/Trader.aspx
          </Text>
          <Text style={{ fontSize: 7, color: '#333333' }}>
            1/1
          </Text>
        </View>

      </Page>
    </Document>
  );
};

const PDFViewerComponent = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full" style={{ height: "1000px" }}>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <HindiDocument data={data} />
        </PDFViewer>
      </div>

      <div className="flex justify-end relative" style={{ zIndex: 9999 }}>
        <style>
          {`
            .download-btn {
              background-color: #32cd32;
              color: white;
              padding: 16px 32px;
              border-radius: 8px;
              font-weight: 500;
              font-size: 16px;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 12px;
              cursor: pointer;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .download-btn:hover {
              background: linear-gradient(90deg, #50E150, #32CD32);
              transform: translateY(-2px);
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
          `}
        </style>
        <PDFDownloadLink
          document={<HindiDocument data={data} />}
          fileName="anugya-patra.pdf"
          className="download-btn"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Loading...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </span>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PDFViewerComponent;
