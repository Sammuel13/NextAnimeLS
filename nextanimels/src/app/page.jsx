"use client";

import { AnimeCard } from "@/components";

import { useState, useEffect } from "react";

import React from "react";

export default function Home() {
    const [animeData, setAnimes] = useState([]);

    const loadData = async () => {
        let currentPage = 1;
        const allItems = [];
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        while (true) {

            try {
                const response = await fetch(
                    `https://api.jikan.moe/v4/anime?sfw&start_date=2023-04-01&page=${currentPage}`
                );
                const data = await response.json();
                const items = data.data;
                allItems.push(...items);
                if (data.pagination.has_next_page) {
                    currentPage++;
                    await delay(400);
                } else {
                    break;
                }
            } catch (error) {
                await delay(1000);
            }
            

        }

        allItems.sort((b, a) => b.popularity - a.popularity);
        setAnimes(allItems);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <main>
                {animeData.map((anime) => (
                    <AnimeCard
                        key={anime.mal_id}
                        title={anime.title}
                        status={anime.status}
                        image={anime.images.webp.image_url}
                        mal_id={anime.mal_id}
                    />
                ))}
            </main>
        </>
    );
}
