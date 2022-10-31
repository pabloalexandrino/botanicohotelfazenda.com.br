import type { NextPage } from "next";
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
                        backgroundImage: `url(/hero-home.jpg)`,
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
                            <a href="#" className="btn btn-success mt-12">
                                Agendar agora
                            </a>
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
                                <a href="#" className="btn btn-success">
                                    Saiba mais
                                </a>
                            </div>
                        </div>
                        <div className="card pr-0">
                            <img
                                src="/localizacao.jpg"
                                className="w-full h-full image-full"
                                alt="Localização"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 text-center bg-white max-w-7xl mx-auto">
                        <div className="card pr-0">
                            <img
                                src="/comida.jpg"
                                className="w-full h-full image-full"
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
                                <a href="#" className="btn btn-success">
                                    Saiba mais
                                </a>
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
                                <a href="#" className="btn btn-success">
                                    Saiba mais
                                </a>
                            </div>
                        </div>
                        <div className="card pr-0">
                            <img
                                src="/kids.jpg"
                                className="w-full h-full image-full"
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