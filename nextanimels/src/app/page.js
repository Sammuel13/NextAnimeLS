import Image from 'next/image';

import styles from './page.module.css';
import './style.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <header>
          <img src="logo/Pet.png" className="logo" />
          <a href="formulario.html">Submeter um novo Anime</a>
        </header>
        <main>
          <div className="card">
            <a
              href="boku-no-hero.html"
              title="Boku no Hero Academia 6th Season"
            >
              <Image src="/thumbs/boku.webp" width={255} height={316}  />
              <div className="aniEps">Temporada 6</div>
              <div className="aniPlay">
                <i className="fa-solid fa-circle-play"> </i>
              </div>
              <div className="aniNome">
                <h2>Boku no Hero</h2>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="chainsaw-man.html" title="Chainsaw Man">
              <img src="/thumbs/chainsaw.webp" width={255} height={316}  />
              <div className="aniEps">Temporada 1</div>
              <div className="aniPlay">
                <i className="fa-solid fa-circle-play" />
              </div>
              <div className="aniNome">
                <h2>Chainsaw Man</h2>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="mob-psycho-100.html" className="link">
              <img src="/thumbs/mob.webp" width={255} height={316}  />
              <div className="aniEps">Temporada 3</div>
              <div className="aniPlay">
                <i className="fa-solid fa-circle-play" />
              </div>
              <div className="aniNome">
                <h2>Mob Psycho 100</h2>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="spy-family.html" className="link">
              <img src="/thumbs/spy.webp" width={255} height={316}  />
              <div className="aniEps">Temporada 2</div>
              <div className="aniPlay">
                <i className="fa-solid fa-circle-play" />
              </div>
              <div className="aniNome">
                <h2>Spy x Family</h2>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="tensei-shitara.html">
              <img src="/thumbs/tensei.webp" width={255} height={316}  />
              <div className="aniEps">Temporada 1</div>
              <div className="aniPlay">
                <i className="fa-solid fa-circle-play" />
              </div>
              <div className="aniNome">
                <h2>Tensei shitara Ken Deshita</h2>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="urusei-yatsura.html">
              <img src="/thumbs/urusei.webp" width={255} height={316}  />
              <div className="aniEps">Temporada 1</div>
              <div className="aniPlay">
                <i className="fa-solid fa-circle-play" />
              </div>
              <div className="aniNome">
                <h2>Urusei Yatsura</h2>
              </div>
            </a>
          </div>
        </main>
        <footer>
          <p>
            Somos um site criado para expor os animes da temporada atual, de
            forma prática e simples
          </p>
          <div className="social">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
          <nav>
            <a href="#">Quem Somos</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Direitos</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Politica de Privacidade</a>
          </nav>
          <p>
            © 2022–2022&nbsp; NAN GA ARU Co.®, Inc. Nenhum direito reservado.
          </p>
        </footer>
      </div>
    </main>
  );
}
