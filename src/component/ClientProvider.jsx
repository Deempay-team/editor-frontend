// src/components/ClientProviders.jsx
"use client";

import ShopContextProvider from "../Context/ShopContext";

export default function ClientProviders({ children }) {
  return (
    <>
      {" "}
      <ShopContextProvider>{children}</ShopContextProvider>{" "}
    </>
  );
}
