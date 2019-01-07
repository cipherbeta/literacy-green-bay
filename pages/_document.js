/*
    Custom server-sided document handling. Allows for modification of the document head.
*/

import Document, { Head, Main, NextScript } from 'next/document'

export default class nDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
          <html className="has-navbar-fixed-top">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,900" rel="stylesheet"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
            </Head>
            <body className="App">
              <Main />
              <NextScript />
            </body>
          </html>
        )
    }
}