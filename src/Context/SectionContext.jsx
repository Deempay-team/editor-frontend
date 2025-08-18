import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [ isSection, setIsSection ] = useState(true); 

  return (
    <SectionContext.Provider value={{ isSection, setIsSection }}>
      {children}
    </SectionContext.Provider>
  );
};

// Hook to use the context
//export const useSection = () => useContext(SectionContext);


//Hook to use the context
// export const useSection = () => {
//     const context = useContext(SectionContext);
//     if (!context) {
//       throw new Error("useSection must be used within a SectionProvider");
//     }
//     return context;
//   };

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    // Safe defaults if no provider wraps this component
    return { isSection: true, setIsSection: () => {} };
  }
  return context;
};