import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import React from "react";

// eslint-disable-next-line no-unused-vars
const lato = Lato({ subsets: ["latin"], weight: ["700", "400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Portfolio Javier Juarez",
  description: "Portfolio Javier Juarez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <meta
          name="description"
          content="Portafolio de Javier Juárez (JaviMx). Se describen su carrera profesional y sus proyectos personales"
        />
        <meta
          name="keywords"
          content="Portfolio, Portafolio, Javier Juarez, Javier, Juarez, JaviMx"
        />
        <meta name="author" content="JaviMx" />
        <meta property="og:title" content="JaviMx" />
        <meta
          property="og:description"
          content="Portafolio de Javier Juárez (JaviMx). Se describen su carrera profesional y sus proyectos personales"
        />
        <meta property="og:image" content="https://javimx.com/portfolio.JPG" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://javimx.com/" />
        <meta name="twitter:title" content="JaviMx" />
        <meta
          name="twitter:description"
          content="Portafolio de Javier Juárez (JaviMx). Se describen su carrera profesional y sus proyectos personales"
        />
        <meta name="twitter:image" content="https://javimx.com/portfolio.JPG" />
      </head>
      <body className={`${roboto.className} font-sans`}>
        <main className="bg-black">{children}</main>
      </body>
    </html>
  );
}
