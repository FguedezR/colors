import { useRef } from "react";

function boxColor({ color, inputvalue, boxRef }) {
  const isMatch = inputValue === color;

  return (
    <div
      className={`box ${color}`}
      style={{
        backgroundColor: isMatch ? color : "#1a1a2e",
        border: isMatch
          ? `2px solid ${color}`
          : "2px solid rgba(255,255,255,0.08)",
        transform: isMatch ? "scale(1.06)" : "scale(1)",
        boxShadow: isMatch ? `0 0 28px ${color}80` : "none",
      }}
    ></div>
  );
}

export default boxColor;
