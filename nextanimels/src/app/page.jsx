'use client';

import styles from './page.module.css';
// import './style.css';

import { AnimeCard, Header, Footer } from './components';

import { useState, useEffect } from "react";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/index'
import Anime from './pages/Anime';
import Formulario from './pages/Formulario';
import AnimePage from './components/AnimePage/index';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
            path: 'Formulario',
            element: <Formulario />
            },
            {
            path: 'AnimePage',
            element: <AnimePage />
            }
        ]
    }
]);

export default function Home() {

    const [animes, setAnimes] = useState([]);
    const loadData = async () => {
        const animesDb =
            "https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json";
        
        fetch(animesDb)
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.data.filter(item => 
                    item.animeSeason.year === 2023 &&
                    item.animeSeason.season === "SUMMER" &&
                    !item.tags.includes("hentai") &&
                    !item.tags.includes("ecchi") &&
                    !item.tags.includes("chinese animation") &&
                    !item.tags.includes("korean animation") &&
                    !item.tags.includes("anime influenced") &&
                    !item.tags.includes("cg-anime") &&
                    item.type !== "ONA"
                );
                setAnimes(filteredData);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Main animeData={animes} />} />
            <Route path="/Formulario" element={<Formulario />} />
            <Route path="/Anime/:title" element={<Anime animeData={animes} />} />
            </Routes>
        </BrowserRouter>
    );
}
