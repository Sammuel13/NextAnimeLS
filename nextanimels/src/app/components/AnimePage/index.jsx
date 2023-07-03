'use client';

import styles from '../../page.module.css';
import '../../style.css';

import Image from 'next/image'
import { useState, useEffect } from "react";

import { Header, Footer } from '..';

export default function AnimePage({ anime }) {
    
    const regex = /https:\/\/myanimelist\.net\/anime\/(\d+)/;
    const animeUrl = anime.sources.find(source => regex.test(source));
    const animeId = animeUrl.match(regex)[1];
    
    const [animeData, setData] = useState([]);
    const loadData = async(animeId) => {
        const animeDataAPI = `https://api.jikan.moe/v4/anime/${animeId}`
        fetch(animeDataAPI)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
            .catch((err) => {
                console.error(err);
            });
    };
    
    useEffect(() => {
        loadData(animeId);
    }, []);

    const [animeJpg, setAnimeJpg] = useState([]);
    const [animeBroadcast, setAnimeBroadcast] = useState([]);
    const [animeEmbed, setAnimeEmbed] = useState([]);
    const [animeProducers, setAnimeProducers] = useState([]);
    const [animeLicensors, setAnimeLicensors] = useState([]);
    const [animeStudios, setAnimeStudios] = useState([]);
    const [animeGenres, setAnimeGenres] = useState([]);
    const [animeThemes, setAnimeThemes] = useState([]);
    const [animeDemographics, setAnimeDemographics] = useState([]);
    
    useEffect(() => {
        const newAnimeJpg = animeData.images?.jpg.image_url;
        setAnimeJpg(newAnimeJpg);
        const newAnimeEmbed = animeData.trailer?.embed_url;
        setAnimeEmbed(newAnimeEmbed);
        const newAnimeBroadcast = animeData.broadcast?.string;
        setAnimeBroadcast(newAnimeBroadcast);
        const producersArray = animeData.producers?.map((producer) => producer.name);
        const newAnimeProducers = producersArray?.join(", ");
        setAnimeProducers(newAnimeProducers);
        const licensorsArray = animeData.licensors?.map((licensor) => licensor.name);
        const newAnimeLicensors = licensorsArray?.join(", ");
        setAnimeLicensors(newAnimeLicensors);
        const studiosArray = animeData.studios?.map((studio) => studio.name);
        const newAnimeStudios = studiosArray?.join(", ");
        setAnimeStudios(newAnimeStudios);
        const genresArray = animeData.genres?.map((genre) => genre.name);
        const newAnimeGenres = genresArray?.join(", ");
        setAnimeGenres(newAnimeGenres);
        const themesArray = animeData.themes?.map((theme) => theme.name);
        const newAnimeThemes = themesArray?.join(", ");
        setAnimeThemes(newAnimeThemes);
        const demographicsArray = animeData.demographics?.map((demographic) => demographic.name);
        const newAnimeDemographics = demographicsArray?.join(", ");
        setAnimeDemographics(newAnimeDemographics);

    }, [animeData]);
    
    return (
        <>
        <Header />
        <main className={styles.main}>
                <div className="poster">
                <div id="anime-title">
                    <h1>{animeData.title}</h1>
                    <h2>{animeData.title_japanese}</h2>
                </div>
                <div id="image">
                    <Image src={animeJpg} alt={animeData.title} width={257} height={367} />
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
                    {animeData.synopsis}
                </div>
                <div id="trailer">
                    <iframe style={{width: '100%'}} height={400} src={animeEmbed} title={animeData.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <table id="infos">
                    <thead>
                    <tr>
                        <th><h2>Information</h2></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td><b>Type:</b> {animeData.type}</td></tr>
                    <tr><td><b>Episodes:</b> {animeData.episodes}</td></tr>
                    <tr><td><b>Status:</b> {animeData.status}</td></tr>
                    <tr><td><b>Broadcast:</b> {animeBroadcast}</td></tr>
                    <tr><td><b>Producers:</b> {animeProducers}</td></tr>
                    <tr><td><b>Licensors:</b> {animeLicensors}</td></tr>
                    <tr><td><b>Studios:</b> {animeStudios}</td></tr>
                    <tr><td><b>Source:</b> {animeData.source}</td></tr>
                    <tr><td><b>Genre:</b> {animeGenres}</td></tr>
                    <tr><td><b>Themes:</b> {animeThemes}</td></tr>
                    <tr><td><b>Demographic:</b> {animeDemographics}</td></tr>
                    <tr><td><b>Duration:</b> {animeData.duration}</td></tr>
                    <tr><td><b>Rating:</b> {animeData.rating}</td></tr>
                    </tbody>
                </table>
            </div>

            <Footer />
        </main>
        </>
    );
}
