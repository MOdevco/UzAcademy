import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

export default function Document() {

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "dark")
  }, [])

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}