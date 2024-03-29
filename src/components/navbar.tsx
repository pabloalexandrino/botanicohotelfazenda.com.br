import Image from "next/image";
import Link from "next/link";
import logo from "../asset/logo.png";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 text-yellow-700 shadow-lg text-sm">
            <div className="w-full justify-between flex-row-reverse lg:navbar-start lg:flex-row">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={"/"}>Página Inicial</Link>
                        </li>
                        <li>
                            <Link href={"/quem-somos"}>Quem somos</Link>
                        </li>
                        <li>
                            <Link href={"/acomodacoes"}>Acomodações</Link>
                        </li>
                        <li>
                            <Link href={"/dayuse"}>Day Use</Link>
                        </li>
                        <li>
                            <Link href={"/servicos"}>Serviços</Link>
                        </li>
                        <li>
                            <Link href={"/experiencias"}>Experiências</Link>
                        </li>
                        <li>
                            <Link href={"/centro-de-convencoes"}>
                                Centro de Convenções
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contato"}>Contato</Link>
                        </li>
                    </ul>
                </div>
                <Link href={"/"} className="flex items-center gap-4 text-md">
                    <div className="relative">
                        <Image src={logo} alt="Logo" width={74} height={54} />
                    </div>
                    Botânico <br />
                    Hotel Fazenda
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link href={"/quem-somos"}>Quem somos</Link>
                    </li>
                    <li>
                        <Link href={"/acomodacoes"}>Acomodações</Link>
                    </li>
                    <li>
                        <Link href={"/dayuse"}>Day Use</Link>
                    </li>
                    <li>
                        <Link href={"/servicos"}>Serviços</Link>
                    </li>
                    <li>
                        <Link href={"/experiencias"}>Experiências</Link>
                    </li>
                    <li>
                        <Link href={"/centro-de-convencoes"}>
                            Centro de Convenções
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contato"}>Contato</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
