import React from 'react';
import { useParams } from 'react-router-dom';

import AnimePage from '../components/AnimePage';

const Anime = ({ animeData }) => {
    const { title } = useParams();
    const anime = animeData.find(anime => anime.title === title);
    console.log(anime)
    return <AnimePage anime={anime} />;
};

export default Anime;