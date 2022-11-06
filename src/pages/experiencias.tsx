import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";

const Experiencias: NextPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-center">
                <div
                    className="hero h-[600px]"
                    style={{
                        backgroundImage: `url(/17-piscina-2000x1268.jpg)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">
                                Experiências
                            </h1>
                            <p className="mb-5">
                                Conheça todas as atividades que o Botânico Hotel
                                Fazenda oferece
                            </p>
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
                <section className="pb-12 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-7xl mx-auto">
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/18-parquinho-1157x798.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Parquinho
                                </h3>
                                <p>
                                    Gangorra, Mini Escalada, Escorregadores e
                                    Montanha de Areia.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/botanico-16-volei-1156x771.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Vôlei de Praia
                                </h3>
                                <p>
                                    Medida oficial 16x8, Areia Salinizada,
                                    Irrigação e Equipamentos básicos.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-nova-beach-tenis-553x971.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Tênis de Areia
                                </h3>
                                <p>
                                    Medida oficial 16x8, Areia Salinizada,
                                    Irrigação, Equipamentos Básicos.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-haras-1157x772.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Haras Botânico
                                </h3>
                                <p>
                                    Localizado em área ao lado do Hotel, possui
                                    administração própria e atividades sob
                                    consulta.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-nova-fazendinha-montagem-990x660.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Fazendinha
                                </h3>
                                <p>
                                    Venha conhecer nossa fazendinha, com
                                    cavalos, ovelhas e galinhas.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-nova-bikes-990x660.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Trilha de Bike
                                </h3>
                                <p>
                                    Estações de ciclismo com Bike disponível,
                                    Trilha Botânica nas ruas dentro do Hotel e
                                    Trilha Aventura para grupos sob agendamento
                                    (Montain Bike). Você também pode trazer a
                                    sua bike.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/botanico-64-sauna-1156x771.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Saunas
                                </h3>
                                <p>
                                    Possuímos sauna feminina (seca) e Masculina
                                    (úmida).
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/20-piscina-social-1157x740.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Piscinas
                                </h3>
                                <p>
                                    3 piscinas para suas atividades: Oval
                                    Social, Semi Olímpica e Piscina Família
                                    (Espaço baby, Infantil, Ofurô e Adulto).
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-nova-banheira-spa-990x660.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Spa
                                </h3>
                                <p>
                                    Spa com Banhos de Imersão e Massoterapias.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-nova-skibum-990x660.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Skibum
                                </h3>
                                <p>
                                    Divirta-se escorregando de uma altura de 6
                                    metros em uma rampa com extensão de 15
                                    metros.
                                </p>
                            </div>
                        </div>

                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/foto-nova-charrete2-735x929.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Charrete 4 rodas
                                </h3>
                                <p>
                                    Tenha a experiência agradável de um passeio
                                    de trole por toda a fazenda no entorno do
                                    Hotel.
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg hover:scale-105 duration-300">
                            <div className="card-body">
                                <img
                                    src="/pesca-solte.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                                <h3 className="font-bold text-2xl my-4 text-center">
                                    Pesque e Solte
                                </h3>
                                <p>Viva a experiência da prática de pesca.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Experiencias;
