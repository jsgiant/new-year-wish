import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import useColor from "../hooks/useColor";

function MyApp({ Component, pageProps }: AppProps) {
  const { currentColor } = useColor();
  return (
    <ThemeProvider theme={currentColor}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
