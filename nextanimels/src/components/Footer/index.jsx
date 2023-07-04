import Link from 'next/link'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {

    const face = <FontAwesomeIcon icon={faFacebook} />
    const ytube = <FontAwesomeIcon icon={faYoutube} />
    const insta = <FontAwesomeIcon icon={faInstagram} />

    return (
        <footer>
            <p>
                Somos um site criado para expor os animes da temporada atual, de
                forma prática e simples
            </p>
            <div className="social">
                <Link href="https://www.facebook.com/" target="_blank">
                    {face}
                </Link>
                <Link href="https://www.youtube.com/" target="_blank">
                    {ytube}
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                    {insta}
                </Link>
            </div>
            <nav>
                <Link href="#">Quem Somos</Link>
                <Link href="#">Fale Conosco</Link>
                <Link href="#">Direitos</Link>
                <Link href="#">Termos de Uso</Link>
                <Link href="#">Politica de Privacidade</Link>
            </nav>
            <p>
                © 2022-2022&nbsp; NAN GA ARU Co.®, Inc. Nenhum direito reservado.
            </p>
        </footer>
    )
}