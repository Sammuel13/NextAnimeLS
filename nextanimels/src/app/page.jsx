'use client';

import styles from './page.module.css';
import './style.css';

import { AnimeCard, Header, Footer } from './components';

import { useState, useEffect } from "react";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/index'
import Formulario from './pages/Formulario';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
            path: 'Formulario',
            element: <Formulario />
            }
        ]
    }
]);

export default function Home() {

    return (
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/Formulario" element={<Formulario />} />
            </Routes>
        </BrowserRouter>
    );
}
