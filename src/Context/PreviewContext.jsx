import React, { createContext, useContext, useState } from "react";

const PreviewContext = createContext();

export const PreviewProvider = ({ children }) => {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <PreviewContext.Provider value={{ isPreview, setIsPreview }}>
      {children}
    </PreviewContext.Provider>
  );
};

// export const usePreview = () => useContext(PreviewContext);

// //Hook to use the context
// export const useViewport = () => {
//     const context = useContext(ViewportContext);
//     if (!context) {
//       throw new Error("useViewport must be used within a ViewportProvider");
//     }
//     return context;
//   };

export const usePreview = () => {
  const context = useContext(PreviewContext);
  if (!context) {
    // Safe fallback to avoid destructuring undefined
    // return { isPreview: false, setIsPreview: () => {} };
    throw new Error("usePreview must be used within a PreviewProvider");
  }
  return context;
};
