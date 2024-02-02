/* eslint-disable react-hooks/rules-of-hooks */

import { useContext } from "react";
import { contextProvider, contextUseState } from "./ThemeProvider";
const buttonBackground = () => {
   const {dark, setDark} = useContext(contextProvider) as contextUseState
 return (
   <div className={`h-screen w-full flex justify-center items-center ${dark ? "bg-black":"bg-white"}`}>
      <button className="bg-blue-500" onClick={() => setDark(!dark)}>Toggle</button>
   </div>
 );
};

export default buttonBackground;