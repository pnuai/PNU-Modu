import React from "react";

import PdfButton from "../components/PdfButton";
import LayoutSettings from "../components/LayoutSettings";

export default function Root({ children }) {
  return (
    <>
      {children}

      <LayoutSettings />
      <PdfButton />
    </>
  );
}
