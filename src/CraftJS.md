# 📘 Using ThemeProvider with Text Components in CraftJS

This guide shows you how to make your **Text component** automatically use the global theme while still allowing per-component overrides.

---

## 1️⃣ Prerequisites

- **ThemeProvider** is already implemented and wraps your editor:

```jsx
import { ThemeProvider } from "@/Contexts/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Pagebuilder/>
    </ThemeProvider>
  );
}
```

- `useTheme()` is available to pull global values.

---

```jsx
const defaultTheme = {
  id: "defaultTheme",
  name: "Default Theme",
  colors: {
    primary: { "r": 13, "g": 71, "b": 161, "a": 1, hex: "#0D47A1" },
    secondary: { "r": 255, "g": 191, "b": 0, "a": 1, hex: "#FFBF00" },
    accent1: { "r": 25, "g": 135, "b": 84, "a": 1, hex: "#198754" },
    accent2: { "r": 220, "g": 53, "b": 69, "a": 1, hex: "#DC3545" },
    accent3: { "r": 33, "g": 37, "b": 41, "a": 1, hex: "#212529" },
    accent4: { "r": 108, "g": 117, "b": 125, "a": 1, hex: "#6C757D" },
    background: { "r": 248, "g": 249, "b": 250, "a": 1, hex: "#F8F9FA" },
  },
  font: {
    heading: { name: "Space Grotesk", family: "'Space Grotesk', sans-serif" },
    paragraph: { name: "Open Sans", family: "'Open Sans', sans-serif" }
  }
};
```




## 2️⃣ Accessing Theme in the Text Component

In your `Text` component:

```jsx
import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import { useTheme } from "@/Contexts/ThemeProvider";

export const Text = ({
  text,
  fontSize,
  fontSizeMobile,
  textAlign,
  textAlignMobile,
  fontWeight,
  fontWeightMobile,
  color,
  colorMobile,
  lineHeight,
  charSpacing,
  margin,
  padding,
  width,
  fontFamily,
}) => {
  const { connectors: { connect, drag }, hasSelectedNode, actions: { setProp } } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  const { theme } = useTheme(); // 👈 Get theme defaults

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (!hasSelectedNode) setEditable(false);
  }, [hasSelectedNode]);

  return (
    <>
      <style>
        {`
          .responsive-text {
            font-size: var(--font-size, 16px);
            text-align: var(--text-align, left);
            font-weight: var(--font-weight, 400);
            color: var(--color, #000);
            font-family: var(--font-family, sans-serif);
            color: var(--color, #000);
            font-family: var(--font-family, sans-serif);
          }

          @media (max-width: 600px) {
            .responsive-text {
              font-size: var(--font-size-mobile, var(--font-size));
              text-align: var(--text-align-mobile, var(--text-align));
              font-weight: var(--font-weight-mobile, var(--font-weight));
              color: var(--color-mobile, var(--color));
            }
          }
        `}
      </style>

      <div
        ref={(ref) => connect(drag(ref))}
        onClick={() => setEditable(true)}
        className="responsive-text"
        style={{
          "--font-size": \`\${fontSize || 16}px\`,
          "--font-size-mobile": fontSizeMobile ? \`\${fontSizeMobile}px\` : undefined,
          "--text-align": textAlign || "left",
          "--text-align-mobile": textAlignMobile || undefined,
          "--font-weight": fontWeight || 400,
          "--font-weight-mobile": fontWeightMobile || undefined,
          "--font-family":  theme.font.heading.family, 
          "--color": color || theme.colors.primary.hex,
          "--color-mobile": colorMobile || undefined,
        }}
      >
        <p>{text}</p>
      </div>
    </>
  );
};
```

---

## 3️⃣ How It Works

- **Global defaults**:  
  If `color` or `fontFamily` aren’t provided via props, they fall back to the **ThemeProvider** values.
  
- **Overrides**:  
  If you pass `color="#ff0000"` or `fontFamily="Roboto"`, the component uses those **instead of the theme**.

---

## 4️⃣ Updating the the text.craft

In any settings panel or toolbar:
Dont set the values of the default in the  in your craft.prop, instead set the value as null

## 4️⃣ Updating the component settings

```jsx
const { theme } = useTheme(); 

<div className="space-y-2">
 <Label>Text Color (Desktop)</Label>
 <Input
   type="color"
   value={props.color || theme.colors.primary.hex}
   onChange={(e) => setProp((props) => (props.color = e.target.value))}
 />
 </div>

```


---

## 5️⃣ Result

- All text components that **do not** have a custom color or font will automatically update when the theme changes.
- Components with custom values stay unchanged.
