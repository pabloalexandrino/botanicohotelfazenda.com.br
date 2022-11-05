import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
    faChildReaching,
    faTableTennisPaddleBall,
    faUtensils,
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
                        backgroundImage: `url(/23-dayuse-2000x1333.jpg)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">Day Use</h1>
                            <p className="mb-5">
                                Passe o dia integrado com a Natureza,
                                aproveitando nosso Café da Manhã e Almoço da
                                Fazenda inclusos no pacote
                            </p>
                            <hr className="max-w-xs mx-auto mt-6" />
                            <Link
                                href="https://wa.me/5518991979000"
                                className="btn btn-success mt-12"
                                target={"_blank"}
                            >
                                Agendar agora
                            </Link>
                        </div>
                    </div>
                </div>
                <section className="pb-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8 max-w-7xl -mt-16">
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faClock} size="3x" />
                                <span>
                                    Sábados e Domingos
                                    <br />
                                    Das 8h às 17h
                                </span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon icon={faUtensils} size="3x" />
                                <span>Café da Manhã e Almoço Inclusos</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon
                                    icon={faTableTennisPaddleBall}
                                    size="3x"
                                />
                                <span>Área de Jogos</span>
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg text-center">
                            <div className="card-body text-success">
                                <FontAwesomeIcon
                                    icon={faChildReaching}
                                    size="3x"
                                />
                                <span>Atividades para Crianças</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center bg-white max-w-7xl mx-auto">
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-5-bar-piscina-679x453.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-2000x1333.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-baixa-679x453.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-foto-nova-beach-tenis-553x971.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-foto-nova-bikes-679x453.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-foto-nova-charrete2-679x858.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-foto-nova-skibum-679x453.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-img-4425-679x1019.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="card card-compact bg-white shadow-lg">
                            <div className="card-body">
                                <img
                                    src="/23-dayuse-img-7688-679x451.jpg"
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <p className="text-justify mb-8">
                                Disponível das 8h as 17h, nosso Day Use é
                                perfeito recarregar as energias usufruindo da
                                nossa estrutura perfeita para vivência de
                                fazenda.
                                <br />
                                <br />
                                Traga sua família para um dia de diversão e
                                contato com a natureza aproveitando tudo o que o
                                Botânico Hotel pode oferecer: piscinas, o jardim
                                sensorial, salão de jogos, parquinho e muitas
                                outras opções.
                                <br />
                                <br />
                                Além disso, o café da manhã e almoço estão
                                inclusos na diária, com direito a água, suco de
                                laranja, refrigerante e chopp/cerveja durante as
                                2 horas do almoço.
                            </p>

                            <div className="alert alert-warning shadow-lg rounded-lg mb-8">
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
                                        Não é permitido entrada de alimentos e
                                        bebidas adquiridas fora do Hotel.
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <span className="text-xs mb-8 block">
                                    O Day Use funciona somente aos Sábados e
                                    Domingos das 8h às 17 horas.
                                </span>

                                <table className="table table-zebra w-full">
                                    <thead>
                                        <tr>
                                            <th>Idade</th>
                                            <th>Preço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Adultos</th>
                                            <td>* Preço sob consulta</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Crianças
                                                <br />
                                                <span className="text-xs font-thin text-gray-400">
                                                    acima de 12 anos
                                                </span>
                                            </th>
                                            <td>* Preço sob consulta</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Crianças <br />
                                                <span className="text-xs font-thin text-gray-400">
                                                    de 6 a 12 anos
                                                </span>
                                            </th>
                                            <td>* Preço sob consulta</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Crianças
                                                <br />
                                                <span className="text-xs font-thin text-gray-400">
                                                    de 0 a 5 anos
                                                </span>
                                            </th>
                                            <td>Cortesia</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Link
                                href="https://wa.me/5518991979000"
                                className="btn btn-success btn-block mt-6 hidden lg:flex"
                                target={"_blank"}
                            >
                                Agendar agora
                            </Link>
                        </div>
                        <div>
                            <img
                                src="/dayuse.jpg"
                                alt=""
                                className="rounded-lg shadow-lg mb-8"
                            />
                            <h3 className="font-bold text-3xl mb-8">
                                Dúvidas frequentes
                            </h3>
                            <div
                                tabIndex={0}
                                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                            >
                                <div className="collapse-title text-xl font-medium">
                                    O que está incluso?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-gray-500">
                                        Café da manhã e Almoço da Fazenda
                                        (durante o almoço por duas horas água,
                                        suco, refrigerante e cerveja em lata
                                        Brahma e Skol).
                                    </p>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                            >
                                <div className="collapse-title text-xl font-medium">
                                    Quais opções de lazer estão disponíveis
                                </div>
                                <div className="collapse-content">
                                    <p className="text-gray-500">
                                        3 piscinas sendo duas climatizadas,
                                        sauna úmida, passeio de charrete,
                                        passeio de bicicletas, skibum,
                                        monitores, vôlei de areia e muito mais!
                                    </p>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                            >
                                <div className="collapse-title text-xl font-medium">
                                    Qual a política de reserva?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-gray-500">
                                        Reserva com 48 horas de antecedência,
                                        mediante pagamento de 20% de entrada pra
                                        garantir a reserva.
                                    </p>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                            >
                                <div className="collapse-title text-xl font-medium">
                                    Qual a política de cancelamento?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-gray-500">
                                        Com 24 horas de antecedência, por motivo
                                        de doença ou luto, mediante a
                                        comprovação de documentos.
                                    </p>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                            >
                                <div className="collapse-title text-xl font-medium">
                                    Se eu não cancelar e não comparecer?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-gray-500">
                                        Caso a pessoa não venha para o Day use,
                                        ela perde os 30% transferidos para o
                                        hotel.
                                    </p>
                                </div>
                            </div>
                            <Link
                                href="https://wa.me/5518991979000"
                                className="btn btn-success btn-block mt-6 lg:hidden flex"
                                target={"_blank"}
                            >
                                Agendar agora
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Acomodacoes;
