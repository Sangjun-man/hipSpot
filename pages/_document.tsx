import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log(process.env.NEXT_PUBLIC_NAVER_ID);
  return (
    <Html>
      <Head>
        <script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
          async></script>

        <meta property="og:title" content="HipSpot" />
        <meta
          property="og:description"
          content="hipspot : 지금 어딜 가면 좋을까요? 근처의 힙플레이스를 찾아보세요"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
