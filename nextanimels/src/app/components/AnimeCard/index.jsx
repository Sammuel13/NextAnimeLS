import Image from 'next/image'
import { Link } from 'react-router-dom'

export default function AnimeCard({ name, temp, image, link, titleName }) {

    return (
        <div className="card">
            <Link
                to={link}
                title={titleName}
            >
                <Image src={"/"+image} alt={titleName} width={250} height={350}/>
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