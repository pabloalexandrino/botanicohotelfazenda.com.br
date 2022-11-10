import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCar,
    faHorseHead,
    faShop,
    faSpa,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";

const Servicos: NextPage = () => {
    return (
        <>
            <Head>
                <title>Botânico Hotel Fazenda</title>
            </Head>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div
                    className="hero h-[600px]"
                    style={{
                        backgroundImage: `url(/3-costela-2000x1328.webp)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">
                                Serviços
                            </h1>
                            <hr className="max-w-xs mx-auto mt-6" />
                            <Link
                                href="https://wa.me/5518991979000"
                                className="btn btn-success btn-block mt-12 hover:scale-105 duration-300"
                                target={"_blank"}
                            >
                                Agendar agora
                            </Link>
                        </div>
                    </div>
                </div>
                <section className="bg-gray-100 w-full lg:p-12 mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8 max-w-7xl mx-auto -mt-24">
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faCar} size="3x" />
                                <span>Estacionamento Grátis</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faShop} size="3x" />
                                <span>Ítens de Conveniência (à solicitar)</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faSpa} size="3x" />
                                <span>SPA (cobrado à parte)</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faHorseHead} size="3x" />
                                <span>Haras (cobrado à parte)</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-bold text-4xl my-12 text-center">
                        Refeições
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-7xl mx-auto">
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/botanico-7-700x1084.webp"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Café da manhã (7h30 às 9h30)
                                </h3>
                                <p>
                                    Nosso café da manhã serve: chás, café preto,
                                    leite, sucos, iogurte, cereais e água entre
                                    as bebidas. Também servimos Ilha de frios,
                                    pães diversos, bolos, frutas, ovos, salsicha
                                    e salgados.
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/-mg-4425-700x1050.webp"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Almoço (12h30 às 14h30)
                                </h3>
                                <p>
                                    Culinária típica da Fazenda, servida no
                                    fogão a lenha e fogo de chão. Nosso cardápio
                                    é variável e serve pratos típicos
                                    brasileiros como Galinhada, Feijoada, Arroz
                                    Carreteiro, corte de Carne Tradicionais
                                    feitos à brasa, Legumes assados, saladas
                                    tradicionais e com especiarias da nossa
                                    horta e deliciosas sobremesas.
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/-mg-3596-700x1050.webp"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Jantar (19h30 às 21h30)
                                </h3>
                                <p>
                                    O menu do jantar segue a tradição da Fazenda
                                    e oferece um jantar leve e aconchegante, com
                                    massas e diversos tipos de molho, além de
                                    saborosas carnes variadas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 max-w-7xl px-6">
                    <hr className="max-w-xs mx-auto my-6" />
                    <h3 className="text-center max-w-lg mx-auto leading-tight my-12">
                        Valorizamos a integração com os ambientes do Hotel e as
                        refeições são servidas no Restaurante com fartas opções.
                        Desse modo,{" "}
                        <strong>não oferecemos serviço de quarto.</strong>
                    </h3>
                    <hr className="max-w-xs mx-auto my-6" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-7xl mx-auto">
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/botanico-31-1140x760.webp"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Quiosque das Piscinas
                                </h3>
                                <p>
                                    Nosso bar localizado ao lado das piscinas,
                                    serve opções clássicas de caipirinhas,
                                    drinks, cervejas, chopps, água, sucos,
                                    refrigerantes e porções saborosas. <br />
                                    <br />
                                    <span className="text-2xs">
                                        Os pedidos são feitos e retirados
                                        diretamente no balcão junto ao barman
                                        disponível para o seu atendimento.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-nova-spa-1920x1080.webp"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Spa com Banhos de Imersão e Massoterapia
                                </h3>
                                <p>
                                    Nosso Spa oferece um relaxamento completo e
                                    saudável com banhos de imersão com chá de
                                    ervas e massoterapia. Os valores são
                                    cobrados à parte.
                                    <br />
                                    <span className="text-2xs">
                                        Atividade sob agendamento prévio
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-haras-1140x760.webp"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Haras
                                </h3>
                                <p>
                                    Nosso Haras é localizado ao lado do hotel e
                                    possui administração própria com ênfase para
                                    iniciação à equitação de trabalho e
                                    esportiva para a prova dos 3 tambores.
                                    <br />
                                    <br />
                                    Etapas e Pré-requisitos para utilização do
                                    Haras: <br />
                                    <br />• Iniciação: Começa pelo trabalho
                                    dentro do Redondel.
                                    <br />• Pista Coberta: Após o período
                                    inicial no Redondel, o aluno passa a
                                    trabalhar na pista pequena coberta.
                                    <br />• Pista Oficial: Após cumprir todas as
                                    etapas iniciais, o aluno é promovido à pista
                                    oficial.
                                    <br />
                                    <span className="text-2xs">
                                        Atividade sob agendamento prévio
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Servicos;
