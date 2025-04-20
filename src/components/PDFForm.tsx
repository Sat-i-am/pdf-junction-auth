import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PDFFormData } from "@/types/pdf";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface PDFFormProps {
  formData: PDFFormData;
  onChange: (newData: PDFFormData) => void;
}

const PDFForm = ({ formData, onChange }: PDFFormProps) => {
  const { t } = useLanguage();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      [name]: value,
    });
  };

  const handleNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      [name]: value === "" ? 0 : Number(value),
    });
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="title">शीर्षक (Title)</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="permitNumber">अनुज्ञा-पत्र क्रमांक (Permit Number)</Label>
            <Input
              id="permitNumber"
              name="permitNumber"
              value={formData.permitNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Crop Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="cropName">कृषि उपज का नाम (Crop Name)</Label>
            <Input
              id="cropName"
              name="cropName"
              value={formData.cropName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="millQuality">किस्म (Quality)</Label>
            <Input
              id="millQuality"
              name="millQuality"
              value={formData.millQuality}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cropQuantityUnits">कृषि उपज की मात्रा - नग संख्या (Quantity Units)</Label>
            <Input
              id="cropQuantityUnits"
              name="cropQuantityUnits"
              type="number"
              value={formData.cropQuantityUnits}
              onChange={handleNumberChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalWeight">कुल वजन (क्विंटल में) (Total Weight in Quintals)</Label>
            <Input
              id="totalWeight"
              name="totalWeight"
              type="number"
              step="0.01"
              value={formData.totalWeight}
              onChange={handleNumberChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cropDetails">कृषि उपज का विवरण (Crop Details)</Label>
            <Input
              id="cropDetails"
              name="cropDetails"
              value={formData.cropDetails}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Owner/Seller Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="ownerName">कृषि उपज के स्वामी / विक्रेता का नाम (Owner/Seller Name)</Label>
            <Input
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseNumber">अनुज्ञप्ति क्रमांक / मान नंबर (License/Man Number)</Label>
            <Input
              id="licenseNumber"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="vehicleType">वाहन का प्रकार (Vehicle Type)</Label>
            <Input
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicleNumber">वाहन क्रमांक (Vehicle Number)</Label>
            <Input
              id="vehicleNumber"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="driverName">वाहन चालक का नाम (Driver Name)</Label>
            <Input
              id="driverName"
              name="driverName"
              value={formData.driverName}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Weighing Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="weighingStation">तौल कांटा का नाम एवं स्थान (Weighing Station)</Label>
            <Input
              id="weighingStation"
              name="weighingStation"
              value={formData.weighingStation}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weighingSlipNumber">तौल कांटा पर्ची नंबर (Weighing Slip Number)</Label>
            <Input
              id="weighingSlipNumber"
              name="weighingSlipNumber"
              value={formData.weighingSlipNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Market Fee and Purpose */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="marketFeeDetails">जमा की गई मंडी फीस / अनुज्ञापत्र का विवरण (Market Fee Details)</Label>
            <Input
              id="marketFeeDetails"
              name="marketFeeDetails"
              value={formData.marketFeeDetails}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purposeOfTransport">बाहर ले जाने का उद्देश्य (Purpose of Transport)</Label>
            <Input
              id="purposeOfTransport"
              name="purposeOfTransport"
              value={formData.purposeOfTransport}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Purchase Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="totalBroughtQuantity">कुल लाई गई मात्रा (Total Brought Quantity)</Label>
            <Input
              id="totalBroughtQuantity"
              name="totalBroughtQuantity"
              type="number"
              step="0.01"
              value={formData.totalBroughtQuantity}
              onChange={handleNumberChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="returnedQuantity">वापस ले जाई गई मात्रा (Returned Quantity)</Label>
            <Input
              id="returnedQuantity"
              name="returnedQuantity"
              type="number"
              step="0.01"
              value={formData.returnedQuantity}
              onChange={handleNumberChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purchaseDate">क्रय दिनांक (Purchase Date)</Label>
            <Input
              id="purchaseDate"
              name="purchaseDate"
              type="date"
              value={formData.purchaseDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="returnReason">वापस ले जाने का कारण (Return Reason)</Label>
            <Input
              id="returnReason"
              name="returnReason"
              value={formData.returnReason}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalPurchaseQuantity">कुल क्रय मात्रा (क्विंटल में) (Total Purchase Quantity)</Label>
            <Input
              id="totalPurchaseQuantity"
              name="totalPurchaseQuantity"
              type="number"
              step="0.01"
              value={formData.totalPurchaseQuantity}
              onChange={handleNumberChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="remainingStockWeight">शेष स्कंध वजन (क्विंटल में) (Remaining Stock Weight)</Label>
            <Input
              id="remainingStockWeight"
              name="remainingStockWeight"
              type="number"
              step="0.01"
              value={formData.remainingStockWeight}
              onChange={handleNumberChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Buyer Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="buyerTraderName">क्रेता व्यापारी / फर्म का नाम (Buyer/Trader Name)</Label>
            <Input
              id="buyerTraderName"
              name="buyerTraderName"
              value={formData.buyerTraderName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gstNumber">जी.एस.टी. पंजीयन क्रमांक (GST Number)</Label>
            <Input
              id="gstNumber"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="buyerManNumber">मान नंबर (Man Number)</Label>
            <Input
              id="buyerManNumber"
              name="buyerManNumber"
              value={formData.buyerManNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="marketDistrict">मंडी समिति का जिला (Market District)</Label>
            <Input
              id="marketDistrict"
              name="marketDistrict"
              value={formData.marketDistrict}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="marketCommittee">मंडी समिति (Market Committee)</Label>
            <Input
              id="marketCommittee"
              name="marketCommittee"
              value={formData.marketCommittee}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="districtState">जिला / प्रदेश (District/State)</Label>
            <Input
              id="districtState"
              name="districtState"
              value={formData.districtState}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Destination Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="destinationPlace">गंतव्य स्थान (Destination Place)</Label>
            <Input
              id="destinationPlace"
              name="destinationPlace"
              value={formData.destinationPlace}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deliveryTrader">डिलीवरी क्रेता व्यापारी / फर्म (Delivery Trader/Firm)</Label>
            <Input
              id="deliveryTrader"
              name="deliveryTrader"
              value={formData.deliveryTrader}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destinationGST">जी.एस.टी. पंजीयन (GST Registration)</Label>
            <Input
              id="destinationGST"
              name="destinationGST"
              value={formData.destinationGST}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destinationManNumber">मान नंबर (Man Number)</Label>
            <Input
              id="destinationManNumber"
              name="destinationManNumber"
              value={formData.destinationManNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Date and Time Information */}
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="issueDate">जारी करने का दिनांक (Issue Date)</Label>
            <Input
              id="issueDate"
              name="issueDate"
              type="date"
              value={formData.issueDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="issueTime">जारी करने का समय (Issue Time)</Label>
            <Input
              id="issueTime"
              name="issueTime"
              type="time"
              value={formData.issueTime}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="printDate">प्रिंट दिनांक (Print Date)</Label>
            <Input
              id="printDate"
              name="printDate"
              type="date"
              value={formData.printDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="printTime">प्रिंट समय (Print Time)</Label>
            <Input
              id="printTime"
              name="printTime"
              type="time"
              value={formData.printTime}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PDFForm;
