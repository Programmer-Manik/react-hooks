import React, { useContext } from "react";
import { contextProvider, contextUseState } from "./ThemeProvider";
const ButtonToggle = () => {
  const { dark, setDark } = useContext(contextProvider) as contextUseState;
  return (
    <button className="bg-blue-500" onClick={() => setDark(!dark)}>
      Toggle
    </button>
  );
};

export default ButtonToggle;