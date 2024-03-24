/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* <link rel='shortcut icon' href='/fav-icon.png' /> */}
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&family=Playpen+Sans:wght@100;200;500&family=Roboto+Mono:wght@100&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
