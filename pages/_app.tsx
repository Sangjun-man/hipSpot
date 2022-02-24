import "../commons/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { initTheme } from "../commons/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={initTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
