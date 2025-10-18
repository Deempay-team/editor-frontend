// src/App.jsx
import "./App.css";
// import PageBuilder from "./pages/PageBuilder";
import { PreviewProvider } from "./Context/PreviewContext";
import { SectionProvider } from "./Context/SectionContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { redirect } from "next/navigation";
import ClientProviders from "./component/ClientProvider";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <>
      <div>
        <ClientProviders>
          {/* <PageBuilder /> */}
          {redirect("/store/deempay123/themes/12345678/editor")}
        </ClientProviders>
      </div>
    </>
  );
}

export default App;
