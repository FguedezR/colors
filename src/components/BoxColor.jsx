import { useRef } from "react";

const Boxcolor = ({ color, inputValue, boxRef }) => {
  const isMatch = inputValue === color;

  return (
    <div
      ref={boxRef}
      className={`box ${color}`}
      style={{
        backgroundColor: isMatch ? color : "#1a1a2e",
        border: isMatch
          ? `2px solid ${color}`
          : "2px solid rgba(255,255,255,0.08)",
        transform: isMatch ? "scale(1.06)" : "scale(1)",
        boxShadow: isMatch ? `0 0 28px ${color}80` : "none",
      }}
    >
      <span className="box-label">{inputValue ? inputValue : "..."}</span>
      <span className="box-status">
        {isMatch ? `¡Soy ${color}!` : `No soy ${color}`}
      </span>
    </div>
  );
};

export default Boxcolor;
