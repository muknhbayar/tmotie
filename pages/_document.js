import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
 
export default function Document() {
  return (
    <Html>
      <Head >      
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" async></script>
        
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        
      </Head>
      <body>
        <Main />
        <NextScript />
        
 
      </body>
    </Html>
  )
}