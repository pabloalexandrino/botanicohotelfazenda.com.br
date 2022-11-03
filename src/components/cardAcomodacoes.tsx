import Link from "next/link";

export default function CardAcomodacoes({ ...params }) {
    const slug = params.title;
    const slugify = (slug: string) =>
        slug
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    return (
        <>
            <input
                type="checkbox"
                id={`modal-${slug}`}
                className="modal-toggle"
            />
            <label htmlFor={`modal-${slug}`} className="modal cursor-pointer">
                <div className="modal-box relative">
                    <label
                        htmlFor={`modal-${slug}`}
                        className="btn btn-sm btn-circle absolute z-50 right-2 top-2"
                    >
                        ✕
                    </label>
                    <div className="carousel w-full">
                        {params.images.map((image: string, key: number) => {
                            return (
                                <div
                                    id={`slide-${slug}-${key}`}
                                    className="carousel-item relative w-full"
                                >
                                    <img src={`/${image}`} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href={`#slide-${slug}-${
                                                key === 0
                                                    ? params.images.length - 1
                                                    : key - 1
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href={`#slide-${slug}-${
                                                key === params.images.length - 1
                                                    ? 0
                                                    : key + 1
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </label>

            <label
                htmlFor={`modal-${slug}`}
                className="card w-full bg-base-100 shadow-xl cursor-pointer hover:scale-105 duration-300"
            >
                <figure>
                    <img src={params.images[0]} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{params.title}</h2>
                    <div className="badge badge-success text-xs">
                        Pensão completa
                    </div>

                    <ul className="text-left h-full">
                        {params.items.map((e: string) => (
                            <li>{e}</li>
                        ))}
                    </ul>

                    <div className="card-actions justify-end">
                        <Link href="#" className="btn btn-success btn-block">
                            Agendar agora
                        </Link>
                    </div>
                </div>
            </label>
        </>
    );
}
