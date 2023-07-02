'use client';

import styles from '../../page.module.css';
import '../../style.css';

import Image from 'next/image'

import { Header, Footer } from '..';

export default function AnimePage({ anime }) {

    return (
        <main className={styles.main}>
            <Header />
                <div className="poster">
                <div id="anime-title">
                    <h1>{anime.title}</h1>
                    <h2>{anime.synonyms[0]}</h2>
                </div>
                <div id="image">
                    <Image src={anime.picture} alt={anime.title} width={257} height={367} />
                </div>
                <div id="estrela">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" /> 
                </div>
                <div id="synopsis">
                    <h2>Synopsis</h2>
                    <p>
                    With Tomura Shigaraki at its helm, the former Liberation Army is now known as the Paranormal Liberation Front. This organized criminal group poses an immense threat to the Hero Association, not only because of its sheer size and strength, but also the overpowering quirks of Jin "Twice" Bubaigawara and Gigantomachia.
                    </p>
                    <p>
                    As new intel from the covert hero Keigo "Hawks" Takami confirms that Shigaraki is nowhere to be seen, the Hero Association decides to strike the enemy headquarters with a surprise attack using the entirety of its assets—and the UA students find themselves on the battlefield once again. As the fight rages on, the unsuspecting villains must regroup and push back, but the brave heroes are determined to eradicate every last one of them.
                    </p>
                </div>
                <div id="trailer">
                    <iframe style={{width: '100%'}} height={400} src="https://www.youtube.com/embed/WxCJMYbGtzA" title="『僕のヒーローアカデミア』6期PV第3弾／10.1(土)放送開始／OP:「ひたむき」SUPER BEAVER" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <table id="infos">
                    <thead>
                    <tr>
                        <th><h2>Information</h2></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td><b>Type:</b> {anime.type}</td></tr>
                    <tr><td><b>Episodes:</b> {anime.episodes}</td></tr>
                    <tr><td><b>Status:</b> {anime.status}</td></tr>
                    <tr><td><b>Broadcast:</b> Saturdays at 17:30 (JST)</td></tr>
                    <tr><td><b>Producers:</b> Dentsu, Yomiuri Telecasting, Movic, Sony Music Entertainment, TOHO animation, Shueisha</td></tr>
                    <tr><td><b>Licensors:</b> None</td></tr>
                    <tr><td><b>Studios:</b> Bones</td></tr>
                    <tr><td><b>Source:</b> Manga</td></tr>
                    <tr><td><b>Genre:</b> Action</td></tr>
                    <tr><td><b>Themes:</b> School, Super Power</td></tr>
                    <tr><td><b>Demographic:</b> Shounen</td></tr>
                    <tr><td><b>Duration:</b> 23 min. per ep.</td></tr>
                    <tr><td><b>Rating:</b> PG-13</td></tr>
                    </tbody>
                </table>
            </div>

            <Footer />
        </main>
    );
}
