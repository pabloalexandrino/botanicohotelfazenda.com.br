import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Obrigado: NextPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center">
                <div
                    className="hero h-96"
                    style={{
                        backgroundImage: `url(/quem-somos.jpg)`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <hr className="max-w-xs mx-auto mb-6" />
                            <h1 className="mb-5 text-5xl font-bold">
                                Obrigado
                            </h1>
                            <hr className="max-w-xs mx-auto mt-6" />
                        </div>
                    </div>
                </div>
                <div className="px-6 w-full">
                    <div className="grid gap-4 max-w-5xl mx-auto my-6 text-center -mt-16 bg-white p-6 shadow-lg">
                        <span className="text-5xl">📨</span>
                        Obrigado por ter entrado em contato conosco! <br />
                        Em breve retornaremos seu contato através do e-mail
                        informado ou telefone.
                    </div>
                    <a href="/" className="btn btn-success btn-block">
                        Voltar para página inicial
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Obrigado;
