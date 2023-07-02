import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

    return (
        <header>
            <Image src="/logo/Pet.png" className="logo" alt="logo" width={200} height={100}/>
            <Link href="/formulario">Submeter um novo Anime</Link>
        </header>
    )
}