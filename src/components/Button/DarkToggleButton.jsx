import React, { useState } from "react";
import useDarkSide from "../../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkToggleButton() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{
          float: "right",
          marginBottom: "2rem",
          position: "fixed",
          right: "2%",
          top: "2%",
        }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
        sunColor="#65a30d"
        moonColor="#fcd34d"
      />
    </>
  );
}
