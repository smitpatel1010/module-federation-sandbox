import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { useTheme } from "../contexts/ThemeProvider";

const Button = ({
  children,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const theme = useTheme();
  console.log("BUTTON THEME", theme);
  return <button {...props}>{children}</button>;
};

export { Button };
