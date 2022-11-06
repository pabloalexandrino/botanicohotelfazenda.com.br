import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Empresa: NextPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div
                    className="hero h-96"
                    style={{
                        backgroundImage: `url(/quem-somos.webp)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">
                                Quem somos
                            </h1>
                            <hr className="max-w-xs mx-auto mt-6" />
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    <div className="grid gap-12 lg:grid-cols-2 max-w-3xl mx-auto my-12 text-justify">
                        <p>
                            Construído em 2014 para oferecer uma excelente
                            experiência aos hóspedes que buscam bem-estar,
                            descanso e lazer em família, estamos próximos à
                            entrada principal de Araçatuba/SP, com acesso à
                            Rodovia Marechal Rondon (SP-300) e a 15 minutos do
                            Aeroporto Internacional.
                            <br />
                            <br />O Botânico Hotel Fazenda fica em meio a
                            natureza, com traços da vida no campo típicos de
                            nossa região.
                        </p>
                        <p>
                            Ao lado de Araçatuba, conhecida internacionalmente
                            como "Terra do Boi Gordo" pela sua exuberante
                            tradição pecuária, nosso propósito é ser um lugar
                            alegre e confortável para vivência entre amigos e
                            familiares, com atividades ao ar livre e criando
                            momentos memoráveis em contato com as tradições
                            rurais.
                        </p>
                    </div>

                    <section>
                        <hr className="max-w-xs mx-auto my-6" />
                        <h3 className="text-3xl text-center max-w-lg mx-auto leading-tight my-12 text-green-900">
                            Somos uma Equipe dedicada a proporcionar excelência
                            em cada serviço oferecido.
                        </h3>
                        <hr className="max-w-xs mx-auto my-6" />
                    </section>

                    <div className="grid gap-12 lg:grid-cols-2 mx-auto max-w-3xl my-12 text-justify">
                        <p>
                            Nossa cozinha serve uma culinária tradicional, com o
                            verdadeiro aroma do campo. Sem dúvida, um dos
                            destaques entre nossos serviços, valorizando o sabor
                            da comida da fazenda a cada refeição.
                        </p>
                        <p>
                            Temos um Jardim Sensorial que possui plantas
                            nativas, medicinais, condimentares, aromáticas e
                            espécies adaptadas, além de horticultura, sendo uma
                            opção de imersão ao natural, despertando os sentidos
                            através de perfumes, texturas e sabores.
                        </p>
                    </div>

                    <div className="alert alert-warning shadow-lg max-w-3xl mx-auto rounded-lg mb-16">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-12 w-12 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            <span>
                                Estamos cercados de natureza com animais
                                silvestres, do Haras e da Fazendinha com
                                diversas espécies de animais. Desse modo, não
                                aceitamos Pets para preservarmos a própria
                                integridade de seus bichinhos!
                            </span>
                        </div>
                    </div>

                    <section className="bg-gray-100 w-full lg:p-12">
                        <div className="grid gap-4 lg:grid-cols-3 max-w-7xl mx-auto">
                            <div className="card bg-white shadow-lg">
                                <div className="card-body">
                                    <img
                                        src="/charrete.webp"
                                        className="h-full object-cover"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="card bg-white shadow-lg">
                                <div className="card-body">
                                    <img
                                        src="/beach-tenis.webp"
                                        className="h-full object-cover"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="card bg-white shadow-lg">
                                <div className="card-body">
                                    <img
                                        src="/haras.webp"
                                        className="h-full object-cover"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-center max-w-3xl mx-auto lg:my-12 flex flex-col gap-8">
                        <p>
                            O Botânico Hotel Fazenda conta com uma estrutura
                            completa para agradar a todas as idades, com
                            atividades infantis monitoradas em horários
                            pré-determinados, piscinas, haras, salão de jogos,
                            skibum, quadras de volei, beach tennis, fazendinha,
                            estações de bike e parquinho.
                        </p>
                        <p>
                            Respeitamos tudo o que é natural à nossa volta,
                            proporcionando segurança e conforto aos nossos
                            hóspedes e preservando a vida silvestre. São muitas
                            opções de entretenimento em contato direto com a
                            natureza e com acomodações perfeitas para relaxar
                            recompondo as energias.
                        </p>
                        <a
                            target={"_blank"}
                            href="/Regulamento_Botanico-HotelFazenda_2022.pdf"
                            className="btn btn-success"
                        >
                            Veja o Regulamento
                        </a>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Empresa;
