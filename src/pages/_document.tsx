import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Botânico Hotel Fazenda</title>
                <meta
                    name="keywords"
                    content="Hotel Fazenda, Hotel Araçatuba, Botânico Araçatuba, Lazer em Araçatuba, Descanso em Araçatuba"
                />
                <meta
                    name="description"
                    content="O Botânico Hotel Fazenda fica em meio a natureza, com traços da vida no campo típicos de nossa região."
                />
                <link
                    rel="shortcut icon"
                    href="/icone-hotel-copy-147x108.png"
                    type="image/x-icon"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
