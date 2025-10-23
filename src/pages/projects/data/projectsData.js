// src/data/projectsData.js

// Importa tus imágenes aquí
import scannerCamaraImg from '../../../assets/projectsImg/scanner-camara.png'; // Asegúrate de tener la imagen en una carpeta de assets

export const projects = [
  {
    title: "SCANNER DE STOCK",
    description: "Aplicación web para optimizar la gestión de inventario. Permite al personal buscar productos por código, obteniendo respuesta visual e instantánea del stock.",
    imageUrl: scannerCamaraImg,
    tags: ["React", "Vite", "Firebase"],
    liveUrl: "scanner-vite.pages.dev", // Reemplaza con tu enlace real
    sourceUrl: "github.com/eviader/scanner-vite#" // Reemplaza con tu enlace de GitHub
  },
];