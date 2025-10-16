import React, { createContext, useContext, useState, useEffect } from "react";

const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const [viewport, setViewport] = useState("desktop"); // "desktop" | "mobile"
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // inside useEffect

    const checkSize = () => {
      // Both Craft.js preview AND window width must indicate desktop
      const matchesDesktop = viewport === "desktop" && window.innerWidth >= 768;
      setIsDesktop(matchesDesktop);
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

// // Hook to use the context
// export const useViewport = () => {
//   const context = useContext(ViewportContext);
//   if (!context) {
//     throw new Error("useViewport must be used within a ViewportProvider");
//   }
//   return context;
// };

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    // Safe defaults if no provider wraps this component
    return { viewport: "desktop", setViewport: () => {}, isDesktop: true };
  }
  return context;
};
