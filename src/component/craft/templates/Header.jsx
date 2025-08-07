import React from "react";
import { useNode } from "@craftjs/core";
import { CancelIcon } from "lucide-react";

export const Header = ({
  logoText = "My Website",
  bgColor = "#fff",
  textColor = "#000",
  menuItems = ["Home", "About", "Contact"],
  fullWidth = true,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <header
      ref={(ref) => connect(drag(ref))}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      <div style={{ fontWeight: "bold" }}>{logoText}</div>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export const HeaderSettings = () => {
  const {
    actions: { setProp },
    logoText,
    bgColor,
    textColor,
    menuItems,
    fullWidth,
  } = useNode((node) => ({
    logoText: node.data.props.logoText,
    bgColor: node.data.props.bgColor,
    textColor: node.data.props.textColor,
    menuItems: node.data.props.menuItems,
    fullWidth: node.data.props.fullWidth,
  }));

  const updateMenuItem = (index, value) => {
    setProp((props) => {
      props.menuItems[index] = value;
    }, 500);
  };

  const addMenuItem = () => {
    setProp((props) => {
      props.menuItems.push("New Item");
    }, 500);
  };

  const removeMenuItem = (index) => {
    setProp((props) => {
      props.menuItems.splice(index, 1);
    }, 500);
  };

  return (
    <div style={{ padding: "10px" }}>
      <label>Logo Text</label>
      <input
        type="text"
        value={logoText}
        onChange={(e) =>
          setProp((props) => (props.logoText = e.target.value), 500)
        }
      />

      <label>Background Color</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) =>
          setProp((props) => (props.bgColor = e.target.value), 500)
        }
      />

      <label>Text Color</label>
      <input
        type="color"
        value={textColor}
        onChange={(e) =>
          setProp((props) => (props.textColor = e.target.value), 500)
        }
      />

      <label>Menu Items</label>
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={{ display: "flex", gap: "5px", marginBottom: "5px" }}
        >
          <input
            type="text"
            value={item}
            onChange={(e) => updateMenuItem(index, e.target.value)}
          />
          <button onClick={() => removeMenuItem(index)}>❌</button>
        </div>
      ))}
      <button onClick={addMenuItem}>➕ Add Menu Item</button>

      <div style={{ marginTop: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={fullWidth}
            onChange={(e) =>
              setProp((props) => (props.fullWidth = e.target.checked), 500)
            }
          />
          Full Width
        </label>
      </div>
    </div>
  );
};

Header.craft = {
  displayName: "Header",
  props: {
    logoText: "My Website",
    bgColor: "#fff",
    textColor: "#000",
    menuItems: ["Home", "About", "Contact"],
  },
  related: {
    settings: HeaderSettings,
  },
};
