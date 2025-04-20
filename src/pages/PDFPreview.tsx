import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePDF, PDFDocument } from "@/contexts/PDFContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Edit } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import PDFViewerComponent from "@/components/PDFViewerComponent";

const PDFPreview = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const { getDocument } = usePDF();
  const navigate = useNavigate();
  const [documentData, setDocument] = useState<PDFDocument | null>(null);

  useEffect(() => {
    if (id) {
      const doc = getDocument(id);
      if (doc) {
        setDocument(doc);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Document not found",
        });
        navigate("/dashboard");
      }
    }
  }, [id, getDocument, navigate]);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM dd, yyyy");
    } catch (error) {
      return dateString;
    }
  };

  if (!documentData) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          {t("common.loading")}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="p-0 h-auto"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">{documentData.title}</h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate(`/pdf-generator/${id}`)}
            >
              <Edit className="h-4 w-4" />
              {t("dashboard.edit")}
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Permit Number</p>
              <p className="font-medium">{documentData.permitNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Crop Name</p>
              <p className="font-medium">{documentData.cropName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Created On</p>
              <p className="font-medium">{formatDate(documentData.createdAt)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="font-medium">{formatDate(documentData.updatedAt)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4" style={{ height: "calc(100vh - 300px)", minHeight: "800px" }}>
          <PDFViewerComponent data={documentData} />
        </div>
      </div>
    </Layout>
  );
};

export default PDFPreview;
