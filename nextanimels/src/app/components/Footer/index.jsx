import Link from 'next/link'

export default function Footer() {

    return (
        <footer>
            <p>
                Somos um site criado para expor os animes da temporada atual, de
                forma prática e simples
            </p>
            <div className="social">
                <Link href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook" />
                </Link>
                <Link href="https://www.youtube.com/" target="_blank">
                    <i className="fa-brands fa-youtube" />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram" />
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