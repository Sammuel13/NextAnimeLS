import Image from 'next/image'
import { Link } from 'react-router-dom'

export default function AnimeCard({ name, temp, image}) {

    return (
        <div className="card">
            <Link
                to={`/Anime/${encodeURIComponent(name)}`}
                title={name}
            >
                <Image src={image} alt={name} width={250} height={350}/>
                <div className="aniEps">{temp}</div>
                <div className="aniPlay">
                    <i className="fa-solid fa-circle-play"> </i>
                </div>
                <div className="aniNome">
                    <h2>{name}</h2>
                </div>
            </Link>
        </div>
    )

}