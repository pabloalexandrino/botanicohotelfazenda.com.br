import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CardAcomodacoes from "../components/cardAcomodacoes";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Acomodacoes: NextPage = () => {
    return (
        <>
            <Head>
                <title>Botânico Hotel Fazenda</title>
            </Head>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div
                    className="hero h-96"
                    style={{
                        backgroundImage: `url(/acomodacao.webp)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">
                                Acomodações
                            </h1>
                            <p className="mb-5">
                                Todas as nossas diárias contam com o serviço de
                                PENSÃO COMPLETA
                                <br />
                                (Café da manhã, Almoço da Fazenda e Jantar
                                inclusos)
                            </p>
                            <hr className="max-w-xs mx-auto mt-6" />
                            <Link
                                href="https://wa.me/5518991979000"
                                className="btn btn-success mt-12 hover:scale-105 duration-300"
                                target={"_blank"}
                            >
                                Agendar agora
                            </Link>
                        </div>
                    </div>
                </div>
                <section className="text-center px-6">
                    <hr className="max-w-xs mx-auto my-6" />
                    <h3 className="text-center max-w-lg leading-tight my-12">
                        Nossas acomodações são equipadas com camas king size, ar
                        condicionado, água aquecida nos lavatórios e chuveiros,
                        duchas deca pressurizadas, Tv (canais abertos),
                        frigobar, janelas amplas e fechadura digital. Com
                        medidas entre 36m² e até 40m², adaptável entre single
                        até quadruplo e berço.
                    </h3>
                    <hr className="max-w-xs mx-auto my-6" />

                    <h3 className="font-bold text-2xl my-12">
                        Nossos Apartamentos e Suítes
                    </h3>
                </section>
                <section className="pb-12 px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center bg-white max-w-7xl mx-auto">
                        <CardAcomodacoes
                            title="Apartamento Luxo"
                            images={[
                                "botanicohotel-503-ap-luxo1-1538x1025.webp",
                                "46f3824b-9d13-44a7-b513-be56ee544c82-1-1200x1600.webp",
                                "botanicohotel-503-ap-luxo1-1538x1025.webp",
                                "botanicohotel-503-ap-luxo2-1130x753.webp",
                                "botanicohotel-503-ap-luxo3-1685x1123.webp",
                                "botanicohotel-503-ap-luxo4-1530x1020.webp",
                                "botanicohotel-503-ap-luxo5-1461x974.webp",
                                "botanicohotel-503-ap-luxo6-988x659.webp",
                            ]}
                            items={[
                                "Duplo, Triplo ou Quádruplo",
                                "Cama Casal King size",
                                "Cama Solteiro extra 1,20x1,93 (mediante cotação)",
                                "Ar condicionado ",
                                "Água quente e fria nos lavatórios e duchas",
                                "TV (canais abertos)",
                                "Banheira Jacuzzi",
                                "Frigobar",
                                "Fechadura Digital",
                            ]}
                        />

                        <CardAcomodacoes
                            title="Suíte master"
                            images={[
                                "botanicohotel-495-suite-master3-1616x1077.webp",
                                "botanicohotel-495-suite-master1-1338x892.webp",
                                "botanicohotel-495-suite-master2-1602x1068.webp",
                                "botanicohotel-495-suite-master4-1074x715.webp",
                                "botanicohotel-495-suite-master5-2000x1333.webp",
                                "img-3700-1200x1600.webp",
                                "img-3704-1200x1600.webp",
                            ]}
                            items={[
                                "Duplo, Triplo ou Quádruplo",
                                "Cama Casal King size (mediante cotação)",
                                "Ar condicionado ",
                                "Água quente e fria nos lavatórios e duchas",
                                "Banheira Jacuzzi",
                                "Sala de estar",
                                "TV (canais abertos)",
                                "Frigobar",
                                "Fechadura Digital",
                            ]}
                        />

                        <CardAcomodacoes
                            title="Suíte Imperial"
                            images={[
                                "botanicohotel-479-1-imperial1-1496x998.webp",
                                "botanicohotel-479-1-imperial3-980x653.webp",
                                "botanicohotel-479-1-imperial4-2000x1333.webp",
                                "botanicohotel-479-1-imperial5-1080x719.webp",
                                "botanicohotel-479-1-imperial6-1130x753.webp",
                                "botanicohotel-479-1-imperial7-1576x1051.webp",
                                "imperial-photo-2022-01-25-09-41-51-2-1200x1600.webp",
                                "imperial-photo-2022-01-25-09-41-52-1200x1600.webp",
                            ]}
                            items={[
                                "Cama Casal King size",
                                "Ar condicionado ",
                                "Água quente e fria nos lavatórios e duchas",
                                "TV (canais abertos)",
                                "Banheira Jacuzzi dupla",
                                "Frigobar",
                                "Fechadura Digital",
                            ]}
                        />

                        <CardAcomodacoes
                            title="Flat (Botânico Residencial Club)"
                            images={[
                                "botanico-56-1080x720.webp",
                                "botanico-56-flat1-1459x973.webp",
                                "botanico-56-flat2-1505x1003.webp",
                                "botanico-56-flat3-2000x1333.webp",
                                "botanicohotel-503-ap-luxo2-1130x753.webp",
                                "photo-2022-01-25-09-40-51-1600x1200.webp",
                                "photo-2022-01-25-09-40-51-1200x1600.webp",
                                "photo-2022-01-25-09-40-50-2-1200x1600.webp",
                            ]}
                            items={[
                                "Cama Casal King size",
                                "Cama Solteiro (extra) 1,20x1,93 (mediante cotação)",
                                "Ar condicionado ",
                                "Água quente e fria nos lavatórios e duchas",
                                "Geladeira",
                                "Fogão",
                                "Solário",
                                "TV (canais abertos)",
                                "Fechadura Digital",
                                "*Consulte disponibilidade para hospedagem longa",
                            ]}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Acomodacoes;
