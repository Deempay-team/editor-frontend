import { useState } from 'react'
import { Theme, ThemePanel } from "@radix-ui/themes";
import reactLogo from './assets/react.svg'


import './App.css'
import CustomEditor from "./pages/CustomEditor"
import WebBuilder from "./pages/WebBuilder"
import CraftBuilder from "./pages/CraftBuilder"

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
