import React, { useState } from "react";

const ColorChange = ({ color1, color2 }) => {
  const [color, setColor] = useState(null);

  const changeColor = () => {
    setColor((prevColor) => (prevColor === color1 ? color2 : color1));
  };

  return (
    <div className="change">
      <h1 style={{ color: color }}>Color is changing</h1>
      <button onClick={changeColor}>Change to other color</button>
    </div>
  );
};

export default ColorChange;
