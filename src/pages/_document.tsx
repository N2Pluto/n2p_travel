/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>N2P T</title>
        <link rel='shortcut icon' href='/fav-icon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
