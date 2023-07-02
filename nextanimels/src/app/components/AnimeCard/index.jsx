import Image from 'next/image'
import Link from 'next/link'

export default function AnimeCard({ name, temp, image, link, titleName }) {

    return (
        <div className="card">
            <Link
                href={link}
                title={titleName}
            >
                <Image src={"/"+image} alt={titleName} width={255} height={316}/>
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