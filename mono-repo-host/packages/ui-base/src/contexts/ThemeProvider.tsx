import { createContext, useContext } from "react";

const ThemeContext = createContext<"light" | "dark">("light");

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeContext };
