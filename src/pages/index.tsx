import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(/hero-home.webp)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">
                                Bem-vindo ao Botânico Hotel Fazenda
                            </h1>
                            <p className="mb-5 text-yellow-300">
                                Sinta o aroma do campo
                            </p>
                            <hr className="max-w-xs mx-auto mb-6" />
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
                <section>
                    <h3 className="text-5xl font-bold text-center max-w-lg leading-tight my-12 text-green-900">
                        Um Verdadeiro Resort com Ambiente Familiar e Estrutura
                        para Vivência na Fazenda
                    </h3>
                </section>
                <section className="bg-gray-200 w-full p-12">
                    <div className="grid grid-cols-2 text-center bg-white max-w-7xl mx-auto">
                        <div className="card">
                            <div className="card-body flex flex-col justify-between py-8">
                                <h3 className="font-bold text-3xl text-green-900 mb-6">
                                    Localização Privilegiada
                                </h3>
                                <p className="flex-none">
                                    Localizado a 2,5km da Rodovia Marechal
                                    Rondon, no km 530, ao lado de Araçatuba, uma
                                    cidade com todos os recursos e
                                    infraestrutura: Hospitais, Farmácias,
                                    Shopping Centers, Supermercados e
                                    Universidades.
                                </p>
                                <Link
                                    href="/contato"
                                    className="btn btn-success hover:scale-105 duration-300"
                                >
                                    Saiba mais
                                </Link>
                            </div>
                        </div>
                        <div className="card pr-0">
                            <img
                                src="/localizacao.webp"
                                className="w-full h-full image-full hover:scale-105 duration-300"
                                alt="Localização"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 text-center bg-white max-w-7xl mx-auto">
                        <div className="card pr-0">
                            <img
                                src="/comida.webp"
                                className="w-full h-full image-full hover:scale-105 duration-300"
                                alt="Comida da Fazenda"
                            />
                        </div>
                        <div className="card">
                            <div className="card-body flex flex-col justify-between py-8">
                                <h3 className="font-bold text-3xl text-green-900 mb-6">
                                    Comida da Fazenda
                                </h3>
                                <p className="flex-none">
                                    Araçatuba, conhecida como "Cidade do Boi
                                    Gordo", produz uma das melhores carnes do
                                    Brasil e aqui você encontra a verdadeira
                                    Comida da Fazenda com carnes assadas em fogo
                                    de chão e churrasqueira, proporcionando um
                                    sabor único e tradicional.
                                </p>
                                <Link
                                    href="/contato"
                                    className="btn btn-success hover:scale-105 duration-300"
                                >
                                    Saiba mais
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center bg-white max-w-7xl mx-auto">
                        <div className="card">
                            <div className="card-body flex flex-col justify-between py-8">
                                <h3 className="font-bold text-3xl text-green-900 mb-6">
                                    Atividades para Crianças
                                </h3>
                                <p className="flex-none">
                                    Estações de atividades: parquinho, skibum,
                                    fazendinha, passeio de charrete, estação de
                                    brinquedos lúdicos, volei de areia, beach
                                    tennis, estação de mountain bike e piscinas
                                    cristalinas.
                                </p>
                                <Link
                                    href="/contato"
                                    className="btn btn-success hover:scale-105 duration-300"
                                >
                                    Saiba mais
                                </Link>
                            </div>
                        </div>
                        <div className="card pr-0">
                            <img
                                src="/kids.webp"
                                className="w-full h-full image-full hover:scale-105 duration-300"
                                alt="Atividades para Crianças"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;
