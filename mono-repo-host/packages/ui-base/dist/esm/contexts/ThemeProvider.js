import { createContext, useContext } from "react";
var ThemeContext = createContext("light");
var useTheme = function () { return useContext(ThemeContext); };
export { useTheme, ThemeContext };
