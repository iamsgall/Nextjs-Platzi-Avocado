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