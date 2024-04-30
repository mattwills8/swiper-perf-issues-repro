
import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

const cards = [
    { id: 1, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 2, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 3, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 4, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 5, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 6, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 7, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 8, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 9, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 10, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 11, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 12, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 13, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 14, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 15, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 16, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 17, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 18, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 19, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 20, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 21, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 22, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 23, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 24, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 25, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 26, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 27, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 28, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 29, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
    { id: 30, imageSrc: "https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=180" },
];

ReactDOM.render(<App cards={cards} />, document.getElementById("app"));
    