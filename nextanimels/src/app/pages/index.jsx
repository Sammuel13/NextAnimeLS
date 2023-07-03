'use client';

import styles from '../page.module.css';
import '../style.css';

import { AnimeCard, Header, Footer } from '../components';

export default function Main( {animeData} ) {

    return (
        <>
        <Header />
        <main className={styles.main}>
            <main>
                {animeData.map((anime, index) => (
                    <AnimeCard
                        key = {index}
                        name = {anime.title}
                        temp = {anime.status}
                        image = {anime.picture}
                    />
                ))}
            </main>
            <Footer />
        </main>
        </>
    );
}
