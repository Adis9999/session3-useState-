import React, { useState } from "react";

const OffOn = ({ offText, onText }) => {
  const [isOn, setIsOn] = useState(false);

  const offOn = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="off-on">
      <h1>{isOn ? onText : offText}</h1>
      <button onClick={offOn}>Переключить</button>
    </div>
  );
};

export default OffOn;
