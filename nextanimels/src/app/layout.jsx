"use client";

import "./globals.css";
import styles from "./page.module.css";
import "./style.css";

import { Inter } from "next/font/google";

import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nan Ga Aru",
    description: "Your Seasonal Animes are Here!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
