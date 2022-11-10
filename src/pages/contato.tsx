// import "react-phone-input-2/lib/style.css";
import type { NextPage } from "next";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Contato: NextPage = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
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
                                Fale Conosco
                            </h1>
                            <p className="mb-5">Estamos sempre à disposição</p>
                            <hr className="max-w-xs mx-auto mt-6" />
                        </div>
                    </div>
                </div>
                <div className="px-6 w-full">
                    <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto my-12 text-justify -mt-16 bg-white p-6 shadow-lg">
                        <form action="/api/form" method="post">
                            <div className="form-control w-full">
                                <label htmlFor="name" className="label">
                                    <span>Nome</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Digite aqui"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control w-full mt-2">
                                <label htmlFor="email" className="label">
                                    <span>E-mail</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Seu e-mail"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control w-full mt-2">
                                <input
                                    type="hidden"
                                    name="phone"
                                    value={phoneNumber}
                                />
                                <PhoneInput
                                    country={"br"}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e)}
                                    specialLabel="Telefone"
                                    containerClass="mt-4"
                                    disableCountryCode={true}
                                    placeholder="(99) 99999-9999"
                                    onlyCountries={["br"]}
                                    masks={{
                                        br: "(..) .....-....",
                                    }}
                                    inputClass="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full mt-2">
                                <label htmlFor="message" className="label">
                                    <span>Mensagem</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="input input-bordered h-24"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success btn-block mt-4 hover:scale-105 duration-300"
                            >
                                Enviar
                            </button>
                        </form>
                        <iframe
                            frameBorder={"0"}
                            className="border-none w-full h-full hover:scale-110 duration-300"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZI5F_k6S1k46ujh0SNrapM89f7mJxd30&amp;q=Av. Flora Brasiliana nº 2500 – Araçatuba SP"
                            allowFullScreen={false}
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contato;
