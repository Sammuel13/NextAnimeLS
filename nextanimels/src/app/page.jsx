'use client';

import styles from './page.module.css';
import './style.css';

import { AnimeCard, Header, Footer } from './components';

import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";

export default function Home() {

    const [animes, setAnimes] = useState([]);
    const loadData = async () => {
        const animesDb =
            "https://my-json-server.typicode.com/Sammuel13/nextanimels-db/animes/";
        
        fetch(animesDb)
            .then((res) => res.json())
            .then((data) => {
                setAnimes(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <main className={styles.main}>
            <Header />
            <main>
                {animes.map((item) => (
                    <AnimeCard
                        key = {item.name}
                        name = {item.name}
                        temp = {item.temp}
                        image = {item.image}
                        link = {item.link}
                        title = {item.title}
                    />
                ))}
            </main>
            <Footer />
        </main>
    );
}
