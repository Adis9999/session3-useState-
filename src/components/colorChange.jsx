import React, { useState } from "react";

const ColorChange = (props) => {
  const [color, setColor] = useState(null);

  const changeColor = () => {
    setColor((prevColor) =>
      prevColor === props.color1 ? props.color2 : props.color1
    );
  };

  return (
    <div className="change">
      <h1 style={{ color: color }}>Color is changing</h1>
      <button onClick={changeColor}>Change to other color</button>
    </div>
  );
};

export default ColorChange;
