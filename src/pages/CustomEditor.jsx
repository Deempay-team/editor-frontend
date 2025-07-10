import { useState, useEffect, useRef } from "react";
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';
import thePlugin from 'grapesjs-plugin-export';
import blocks from 'grapesjs-blocks-basic';
//import plugin from 'grapesjs-preset-newsletter';
import 'grapesjs/dist/css/grapes.min.css'

import gjsForms from 'grapesjs-plugin-forms';
import navbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';
import flexbox from 'grapesjs-blocks-flexbox';

import bg from 'grapesjs-style-bg';
import 'grapick/dist/grapick.min.css';

import tabs from 'grapesjs-tabs';
import grapesjsTouch from 'grapesjs-touch';




export default function CustomEditor() {
    const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
    editorRef.current =  grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '100vh',
      width: 'auto',
      plugins: [plugin, thePlugin, blocks, gjsForms, navbar, pluginCountdown, flexbox, bg, tabs, grapesjsTouch],
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      }, 
      deviceManager: {
        devices:
        [
          {
            id: 'desktop',
            name: 'Desktop',
            width: '',
          },
          {
            id: 'tablet',
            name: 'Tablet',
            width: '768px',
            widthMedia: '992px',
          },
          {
            id: 'mobilePortrait',
            name: 'Mobile portrait',
            width: '320px',
            widthMedia: '575px',
          },
        ]
      },
      pluginsOpts: {
        [ plugin ]: {
          blocks: ['link-block', 'quote', 'text-basic' ],
            // Disable default basic blocks
            // block: (blockId) => {
            //   // You can customize specific blocks here
            //   if (blockId === 'Link') {
            //     return { category: 'Bassic' };
            //   }
            //   return {};
            // },
            showStylesOnChange: true,
          useCustomTheme: true,
          textCleanCanvas: 'Are you sure you want to clear the canvas?'
        },
      }
    })

    // Customizing the UI
    const editor = editorRef.current;

    // Change Panel Colors
    document.querySelector(".gjs-pn-views").style.backgroundColor = "#FABB05"; // Your brand color

    // Add a Custom Button
    editor.Panels.addButton("options", {
      id: "custom-btn",
      className: "fa fa-star",
      command: "custom-command",
      attributes: { title: "Custom Action" },
    });

    // Add a Custom Block
    editor.BlockManager.add("custom-block", {
      label: "My Block",
      category: "Custom",
      content: '<div style="padding:20px; background:#FABB05; color:white;">Custom Block</div>',
    });

    // Customize Default Styles
    editor.setStyle(`
      body { font-family: Arial, sans-serif; }
      .gjs-one-bg { background-color: #4285F4 !important; }
      .gjs-two-color { color: #FABB05 !important; }
    `);

    //editor.Panels.removeButton("options", "preview"); // Remove preview button
    editor.Panels.addButton("options", {
      id: "save",
      className: "fa fa-save",
      command: (editor) => alert("Saved!"),
      attributes: { title: "Save Project" },
    });

    editor.BlockManager.remove("text"); // Remove default text block
    editor.BlockManager.add("custom-block", {
      label: "Custom Block",
      category: "My Blocks",
      content: "<div style='padding:20px; background:#4285F4; color:white;'>Hello</div>",
    });

    editor.setComponents(`
      <section style="background:#4285F4; color:white; padding:20px;">
        <h1>Welcome to My Custom UI</h1>
      </section>
    `);

  }
  },[])

  return (
   <>
    <div id="gjs"></div>
   </>
  );
}