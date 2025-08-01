import React from "react";

export const HeaderPreview = ({ logoText = "My Website", bgColor = "#fff", textColor = "#000" }) => {
  return (
    <header
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: "bold" }}>{logoText}</div>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
