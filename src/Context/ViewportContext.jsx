import React, { createContext, useContext, useState } from "react";

const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const [viewport, setViewport] = useState("desktop");

  return (
    <ViewportContext.Provider value={{ viewport, setViewport }}>
      {children}
    </ViewportContext.Provider>
  );
};

//export const useViewport = () => useContext(ViewportContext);

//Hook to use the context
export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }
  return context;
};
