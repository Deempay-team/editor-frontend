"use client";

import {
  getFromLocalStorage,
  getFromLocalStorageCurrentPage,
  setToLocalStorage,
} from "@/utils/storage";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import craftDefaultPages from "../data/craftDefaultPages";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const router = useRouter();
  const currency = "₦ ";
  const delivery_fee = 1000;
  const [showSearchNow, setShowSearchNow] = useState(false);
  const [search, setSearch] = useState(" ");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [storeUrl, setStoreUrl] = useState("bzqcdfl-ica");
  const [storeUrl, setStoreUrl] = useState("m2wdoyk-ytf");
  const [storeId, setStoreId] = useState("S1092130773747671040");
  const [computeCartCount, setComputeCartCount] = useState(0);
  const [dialogData, setDialogData] = useState({});
  const [activeSection, setActiveSection] = useState("account-info");
  const [currentPage, setCurrentPage] = useState(() =>
    getFromLocalStorageCurrentPage("currentPage", "checkout")
  ); // default to home
  const [pageProgress, setPageProgress] = useState(0);
  const [pages, setPages] = useState(craftDefaultPages); // Default pages

  // console.log("currentPage", currentPage);
  useEffect(() => {
    const saved = getFromLocalStorage("pages", craftDefaultPages);
    setPages(saved);
  }, []);

  // Load from localStorage on first render
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);

  // Save to localStorage whenever currentPage changes
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // 🔄 Save to localStorage (debounced)
  useEffect(() => {
    const id = setTimeout(() => {
      if (pages) {
        setToLocalStorage("pages", pages);
      }
    }, 400);
    return () => clearTimeout(id);
  }, [pages]);

  const value = {
    currency,
    delivery_fee,
    showSearchNow,
    setShowSearchNow,
    search,
    setSearch,
    router,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    storeUrl,
    computeCartCount,
    setComputeCartCount,
    dialogData,
    setDialogData,
    activeSection,
    setActiveSection,
    storeId,
    currentPage,
    setCurrentPage,
    pages,
    setPages,
    pageProgress,
    setPageProgress,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
