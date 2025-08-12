import React, { createContext, useContext, useState, useEffect } from "react";

const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const [viewport, setViewport] = useState("desktop"); // "desktop" | "mobile"
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      // Both Craft.js preview AND window width must indicate desktop
      setIsDesktop(viewport === "desktop" && window.innerWidth >= 768);
    };

    checkSize(); // Run immediately on mount & preview change
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [viewport]);

  return (
    <ViewportContext.Provider value={{ viewport, setViewport, isDesktop }}>
      {children}
    </ViewportContext.Provider>
  );
};

// Hook to use the context
export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }
  return context;
};
