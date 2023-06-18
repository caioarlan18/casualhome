import stylesMobile from './Produto.mobile.module.css'
import stylesDesktop from './Produto.desktop.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { animateScroll as scroll } from 'react-scroll';
function Produto({ id, imagemProduto, titulo, custoR, custoP, addToCart, buy }) {

    const handleClick = () => {
        // Rolar para o topo imediatamente
        scroll.scrollToTop({ duration: 0 });
    };

    return (

        <div className={`${stylesMobile.produto} ${stylesDesktop.produto}`}>
            <div className={`${stylesMobile.cart} ${stylesDesktop.cart}`}>
                <IoCartOutline onClick={() => addToCart({ imagemProduto, titulo, custoP })} />
            </div>
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <img src={imagemProduto} alt="imagem do produto" />
            </div>
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
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
                <Link to={buy} onClick={handleClick}> Ver opções</Link>
            </div>


        </div>

    )
}
export default Produto