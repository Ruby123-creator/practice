import React from "react";

import ThemedBtn from "./Button";
import ThemedInput from "./Input";
const Main = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [theme, setTheme] = React.useState({ background: "lightgray", color: "black" });
    const handleInputChange = event => {
      setInputValue(event.target.value);
    };
    return (
      <div>
        <ThemedBtn theme={theme}>Click me</ThemedBtn>
        <ThemedInput type="text" value={inputValue} onChange={handleInputChange} theme={theme} />
      </div>
    );
  };

  
  export default Main;