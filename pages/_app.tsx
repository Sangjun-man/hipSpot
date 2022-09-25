import "../libs/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    };
    setVh();
  });

  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
export default MyApp;
