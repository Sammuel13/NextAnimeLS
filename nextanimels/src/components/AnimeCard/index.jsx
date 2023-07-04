import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({ title, status, image, mal_id }) {
    return (
        <div className="card">
            <Link
                href={`/Anime/${title}mal_id${mal_id}`}
            >
            <Image src={image} alt={title} width={250} height={350} />
            <div className="aniEps">{status}</div>
            <div className="aniPlay">
                <i className="fa-solid fa-circle-play"> </i>
            </div>
            <div className="aniNome">
                <h2>{title}</h2>
            </div>
            </Link>
        </div>
    );
}
