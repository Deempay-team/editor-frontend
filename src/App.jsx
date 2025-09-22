import "./App.css";
import PageBuilder from "./pages/PageBuilder";
import { PreviewProvider } from "./Context/PreviewContext";
import { SectionProvider } from "./Context/SectionContext";
import { ThemeProvider } from "./Context/ThemeContext";
// import ClientProviders from "./component/ClientProvider";

function App() {
  return (
    <>
      <div>
        <ThemeProvider>
          <SectionProvider>
            <PreviewProvider>
              {/* <ClientProviders> */}
              <PageBuilder />
              {/* </ClientProviders> */}
            </PreviewProvider>
          </SectionProvider>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
