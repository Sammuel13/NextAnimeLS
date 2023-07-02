import Image from 'next/image'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <Image src="/logo/Pet.png" className="logo" alt="logo" width={200} height={100}/>
            <Link to="/Formulario">Submeter um novo Anime</Link>
        </header>
    )
}