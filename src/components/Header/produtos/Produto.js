import stylesMobile from './Produto.mobile.module.css'
import stylesDesktop from './Produto.desktop.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { useEffect } from 'react';
function Produto({ imagemProduto, titulo, custoR, custoP, buy }) {

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        const updatedCartItems = [...cartItems, item];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        alert('Produto adicionado ao carrinho')
    };
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, [cartItems]);


    const handleClick = () => {
        scroll.scrollToTop({ duration: 0 });
    };

    return (

        <div className={`${stylesMobile.produto} ${stylesDesktop.produto}`}>
            <div className={`${stylesMobile.cart} ${stylesDesktop.cart}`}>
                <IoCartOutline onClick={() => addToCart({ imagemProduto, titulo, custoP })} />
            </div>
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <Link to={buy} onClick={handleClick}><img src={imagemProduto} alt="imagem do produto" /></Link>
            </div>
            <div className={`${stylesMobile.produto2} ${stylesDesktop.produto2}`}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <h1>{titulo}</h1>
            </div>
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <h3>{custoR}</h3><h2>{custoP}</h2>
            </div>
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <Link to={buy} onClick={handleClick} className={`${stylesMobile.comprar} ${stylesDesktop.comprar}`}> Ver opções</Link>
            </div>


        </div>

    )
}
export default Produto