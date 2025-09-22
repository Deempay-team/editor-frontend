// "use client";

// import { useRouter } from "next/navigation";
// import { createContext, useState } from "react";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const router = useRouter();
//   const currency = "₦ ";
//   const delivery_fee = 1000;
//   const [showSearchNow, setShowSearchNow] = useState(false);
//   const [search, setSearch] = useState(" ");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   // const [storeUrl, setStoreUrl] = useState("bzqcdfl-ica");
//   const [storeUrl, setStoreUrl] = useState("m2wdoyk-ytf");
//   const [storeId, setStoreId] = useState("S1092130773747671040");
//   const [computeCartCount, setComputeCartCount] = useState(0);
//   const [dialogData, setDialogData] = useState({});
//   const [activeSection, setActiveSection] = useState("account-info");

//   const value = {
//     currency,
//     delivery_fee,
//     showSearchNow,
//     setShowSearchNow,
//     search,
//     setSearch,
//     router,
//     isLoggedIn,
//     setIsLoggedIn,
//     isLoading,
//     setIsLoading,
//     storeUrl,
//     computeCartCount,
//     setComputeCartCount,
//     dialogData,
//     setDialogData,
//     activeSection,
//     setActiveSection,
//     storeId,
//   };

//   return (
//     <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
