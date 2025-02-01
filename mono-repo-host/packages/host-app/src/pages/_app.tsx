import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContext } from "ui-base/contexts/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext.Provider value="dark">
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
