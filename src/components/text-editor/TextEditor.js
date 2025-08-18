// // components/TextEditor.js
// import React, { useState, useEffect } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, ContentState } from "draft-js";
// import { convertToHTML, convertFromHTML } from "draft-convert";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./editorStyles.css";

// export function TextEditor({
//     value = "",
//     onChange = () => { },
//     onFocus = () => { },
// }) {
//     const [editorState, setEditorState] = useState(() => {
//         if (value) {
//             const contentState = convertFromHTML(value);
//             return EditorState.createWithContent(contentState);
//         }
//         return EditorState.createEmpty();
//     });

//     const [isFocused, setIsFocused] = useState(false);

//     useEffect(() => {
//         const contentState = editorState.getCurrentContent();
//         const html = contentState.hasText() ? convertToHTML(contentState) : "";
//         onChange(html);
//     }, [editorState, onChange]);

//     return (
//         <div className="custom-editor-container">
//             <Editor
//                 editorState={editorState}
//                 onEditorStateChange={setEditorState}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 toolbarClassName={`!text-foreground  ${isFocused ? '!border-gray-300' : '!border-gray-300'} !bg-[#F6F6F64D] !mb-0 !rounded-none !rounded-t-[8px]`}
//                 wrapperClassName="wrapper-class"
//                 editorClassName={`p-2 !bg-[#F6F6F64D] !border !rounded-b-[8px]  ${isFocused ? '!border-gray-300' : '!border-gray-300'}`}
//                 toolbar={{
//                     options: ["inline", "link"],
//                     inline: { options: ["bold", "italic", "underline"] },
//                     link: { inDropdown: false },
//                 }}
//             />
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./editorStyles.css";

export function TextEditor({ value = "", onChange = () => {}, onFocus = () => {} }) {
  const [editorState, setEditorState] = useState(() => {
    if (value) {
      const contentState = convertFromHTML(value);
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  const [isFocused, setIsFocused] = useState(false);
  const [Editor, setEditor] = useState(null);

  useEffect(() => {
    import("react-draft-wysiwyg").then(mod => setEditor(() => mod.Editor));
  }, []);

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const html = contentState.hasText() ? convertToHTML(contentState) : "";
    onChange(html);
  }, [editorState, onChange]);

  if (!Editor) return null; // or loading spinner

  return (
    <div className="custom-editor-container">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        toolbarClassName={`!text-foreground ${isFocused ? '!border-gray-300' : '!border-gray-300'} !bg-[#F6F6F64D] !mb-0 !rounded-none !rounded-t-[8px]`}
        wrapperClassName="wrapper-class"
        editorClassName={`p-2 !bg-[#F6F6F64D] !border !rounded-b-[8px] ${isFocused ? '!border-gray-300' : '!border-gray-300'}`}
        toolbar={{
          options: ["inline", "link"],
          inline: { options: ["bold", "italic", "underline"] },
          link: { inDropdown: false },
        }}
      />
    </div>
  );
}
