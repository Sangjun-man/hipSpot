import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="HipSpot" />
        <meta
          property="og:description"
          content="hipspot : 지금 어딜 가면 좋을까요? 근처의 힙플레이스를 찾아보세요"
        />
        <meta property="og:type" content="website" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <script type="text/javascript"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
