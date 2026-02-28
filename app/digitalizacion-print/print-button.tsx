"use client";

import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      onClick={handlePrint}
      className="bg-emerald-600 hover:bg-emerald-700 text-white"
    >
      <FileDown className="w-4 h-4 mr-2" />
      Descargar PDF
    </Button>
  );
}
