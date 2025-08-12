import './App.css'
import PageBuilder from './pages/PageBuilder';
import { PreviewProvider } from "./Context/PreviewContext";
import { SectionProvider } from "./Context/SectionContext";
import { ThemeProvider } from "./Context/ThemeContext";


function App() {

  return (
    <>
      <div>
        <ThemeProvider>
          <SectionProvider>
            <PreviewProvider>
              <PageBuilder />
            </PreviewProvider>
          </SectionProvider>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
