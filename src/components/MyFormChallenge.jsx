import { useRef, useState } from "react";
import Boxcolor from "./Boxcolor";

const colors = [
  "red",
  "green",
  "pink",
  "yellow",
  "purple",
  "white",
  "blue",
  "aqua",
  "olive",
];

const Myformchallenge = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const boxRefs = useRef(colors.map(() => useRef(null)));

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase().trim());
  };

  return (
    <div className="challenge-wrapper">
      <div className="input-area">
        <input
          ref={inputRef}
          type="text"
          placeholder="Escribe un color..."
          onChange={handleChange}
          className="color-input"
          autoFocus
        />
      </div>
      <div className="grid">
        {colors.map((color, i) => (
          <Boxcolor
            key={color}
            color={color}
            inputValue={inputValue}
            boxRef={boxRefs.current[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default Myformchallenge;
