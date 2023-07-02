'use client';

import styles from '../page.module.css';
import '../style.css';

import { Header, Footer } from '../components';

export default function Form() {

    return (
        <main className={styles.main}>
            <Header />
            <main className="corpo">
                <form className>
                    <div className="formulario align-items-center highlight-toolbar ps-3 pe-2 py-1">
                    <h1 className="titulo"><b>Cadastre o Anime:</b></h1>
                    <div className="form-label">
                        <label htmlFor="anime">Título do Anime:</label>
                        <input type="text" name="anime" id="anime" required />
                    </div>
                    <div className="form-label">
                        <label htmlFor="titulo_original">Titulo Original:</label>
                        <input type="text" name="titulo" id="titulo_original" />
                    </div>
                    <div className="form-label">
                        <label htmlFor="nome">Temporadas:</label>
                        <input type="number" name="nome" id="nome" required />
                    </div>
                    <div className="form-label">
                        <label htmlFor="sinopse">Sinópse:</label>
                        <textarea name="sinopse" value placeholder="Digite a sinópse..." defaultValue={""} />
                    </div>
                    <p>Tipo</p>
                    <div className="d-flex tipo">
                        <input type="radio" name="tipo" id="ova" required /><label htmlFor="ova">OVA</label>
                        <input type="radio" name="tipo" id="movie" required /><label htmlFor="movie">Movie</label>
                        <input type="radio" name="tipo" id="tv" required /><label htmlFor="tv">TV</label>
                    </div>
                    <div className="form-label">
                        <label htmlFor="ep">Episódios:</label>
                        <input type="number" name="ep" id="ep" required />
                    </div>
                    <p>Status:</p>
                    <div className="status d-flex">
                        <input type="radio" name="completo" id="completo" required />
                        <label htmlFor="completo">Completo</label>
                        <input type="radio" name="desenvolvimento" id="desenvolvimento" required />
                        <label htmlFor="desenvolvimento">Desenvolvimento</label>
                    </div>
                    <input type="submit" defaultValue="Submeter" className="botao-form" />
                    </div>
                </form>
            </main>
            <Footer />
        </main>
    );
}
