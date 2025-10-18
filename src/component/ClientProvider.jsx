// src/components/ClientProviders.jsx
"use client";

import { PreviewProvider } from "@/Context/PreviewContext";
import ShopContextProvider from "../Context/ShopContext";
import { SectionProvider } from "@/Context/SectionContext";
import { ThemeProvider } from "@/Context/ThemeContext";

export default function ClientProviders({ children }) {
  return (
    <>
      {" "}
      <ThemeProvider>
        <SectionProvider>
          <PreviewProvider>
            <ShopContextProvider>{children}</ShopContextProvider>
          </PreviewProvider>
        </SectionProvider>
      </ThemeProvider>{" "}
    </>
  );
}
