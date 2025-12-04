import "./styles.css";
import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function generateRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomColor(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRgbColor() {
    const r = generateRandomColor(256);
    const g = generateRandomColor(256);
    const b = generateRandomColor(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  return (
    <div
      className="color-component"
      style={{
        height: "100vh",
        weidth: "100vw",
        backgroundColor: color,
      }}
    >
      <button className="color-btn" onClick={() => setColorType("rgb")}>
        Create RGB Color
      </button>
      <button className="color-btn" onClick={() => setColorType("hex")}>
        Create HEX Color
      </button>
      <button
        className="color-btn"
        onClick={colorType === "hex" ? handleHexColor : handleRgbColor}
      >
        Generate Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "36px",
          marginTop: "50px",
        }}
      >
        <h1>color: {color}</h1>
      </div>
    </div>
  );
}
