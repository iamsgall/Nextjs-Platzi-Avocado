import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* FAVICON */}
                    {/* wEBFONTS */}
                    {/* STYLESHEET */}
                    {/* SCRIPT/JS */}
                    {/* BOOTSTRAP CSS CDN */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css"></link>
                </Head>
                <body className="testing-class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument