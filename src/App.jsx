import './App.css'

import PageBuilder from './pages/PageBuilder';
import { PreviewProvider } from "./Context/PreviewContext";
import { SectionProvider } from "./Context/SectionContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { ViewportProvider } from "./Context/ViewportContext";



function App() {

  return (
    <>
      <div>
        <ThemeProvider>
          <ViewportProvider>
            <SectionProvider>
              <PreviewProvider>
                <PageBuilder />
              </PreviewProvider>
            </SectionProvider>
          </ViewportProvider>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
