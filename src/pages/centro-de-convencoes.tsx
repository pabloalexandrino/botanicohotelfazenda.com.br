import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuildingCircleCheck,
    faCarAlt,
    faListCheck,
    faMaximize,
    faNetworkWired,
    faPalette,
    faPeopleGroup,
    faPeopleLine,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Acomodacoes: NextPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div
                    className="hero h-[600px]"
                    style={{
                        backgroundImage: `url(/8e41a135-80a2-4643-bb31-3da7dc9b3b21-1600x1200.jpg)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">
                                Faça seu evento aqui
                            </h1>
                            <p className="mb-5">
                                Conheça o Centro de Convenções & Praça de
                                Eventos do Botânico Hotel Fazenda
                            </p>
                            <hr className="max-w-xs mx-auto mt-6" />
                            <Link
                                href="https://wa.me/5518991979000"
                                className="btn btn-success mt-12"
                                target={"_blank"}
                            >
                                Faça sua cotação
                            </Link>
                        </div>
                    </div>
                </div>
                <section className="pb-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8 max-w-7xl -mt-16">
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faMaximize} size="3x" />
                                <span>Salão de 600m²</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon
                                    icon={faNetworkWired}
                                    size="3x"
                                />
                                <span>Infraestrutura Completa</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faCarAlt} size="3x" />
                                <span>Estacionamento para 500 veículos</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faPalette} size="3x" />
                                <span>
                                    Personalizável para o seu tipo de evento
                                </span>
                            </div>
                        </div>
                    </div>
                    <section className="text-center px-6">
                        <hr className="max-w-xs mx-auto my-6" />
                        <h3 className="text-center max-w-lg mx-auto leading-tight my-12">
                            Contamos com um espaço coberto de 600m², equipadas
                            com tecnologia de tratamento acústico, climatizado
                            com 580.000 BTUs e excelente estrutura para seu
                            evento Corporativo, Social, Musical, Casamentos,
                            Palestras, Convenções e etc. <br />
                            <br />
                            Venha fazer uma visita técnica, faça seu Briefing e
                            solicite seu orçamento.
                        </h3>
                        <a href="#" className="btn btn-success">
                            Visualizar Planta Baixa
                        </a>
                        <hr className="max-w-xs mx-auto my-6" />
                    </section>
                    <section className="w-full mb-8 text-center text-white">
                        <div className="max-w-7xl grid md:grid-cols-2 gap-8">
                            <img
                                src="/foto-nova-fachada-salao-1842x1202.jpg"
                                className="rounded-lg shadow-lg hover:scale-105 duration-300"
                                alt=""
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <div className="card bg-success shadow-lg hover:scale-105 duration-300">
                                    <div className="card-body justify-center">
                                        <FontAwesomeIcon
                                            icon={faPeopleGroup}
                                            size="3x"
                                        />
                                        Capacidade do Centro de Convenções até
                                        1.200 pessoas
                                    </div>
                                </div>
                                <div className="card bg-success shadow-lg hover:scale-105 duration-300">
                                    <div className="card-body justify-center">
                                        <FontAwesomeIcon
                                            icon={faPeopleLine}
                                            size="3x"
                                        />
                                        Capacidade da Praça de Eventos até 4.000
                                        pessoas
                                    </div>
                                </div>
                                <div className="card bg-success shadow-lg hover:scale-105 duration-300">
                                    <div className="card-body justify-center">
                                        <FontAwesomeIcon
                                            icon={faListCheck}
                                            size="3x"
                                        />
                                        100% Adaptável
                                        <br />
                                        <span className="text-xs">
                                            Aniversários, Palestras, Reuniões de
                                            Trabalho, Convenções, Cursos e etc.
                                        </span>
                                    </div>
                                </div>
                                <div className="card bg-success shadow-lg hover:scale-105 duration-300">
                                    <div className="card-body justify-center">
                                        <FontAwesomeIcon
                                            icon={faBuildingCircleCheck}
                                            size="3x"
                                        />
                                        Estrutura Profissional
                                        <br />
                                        <span className="text-xs">
                                            cozinha, banheiros, estacionamento,
                                            duas varandas sociais, cortinas
                                            blackout e tratamento acústico
                                            profissional.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center bg-white max-w-7xl mx-auto">
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/2f72c5a6-93cc-44cb-bbc2-06f89c33c222-679x508.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/451d3fd4-081b-48c7-97ac-314540f87d6b-679x509.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/c0158fcd-884b-4b12-b345-438412518683-679x508.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/centro-de-convencoes1-679x605.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/centro-de-convencoes2-679x580.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/centro-de-convencoes3-533x519.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Acomodacoes;
