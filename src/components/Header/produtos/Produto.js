import stylesMobile from './Produto.mobile.module.css'
import stylesDesktop from './Produto.desktop.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';

function Produto({ imagemProduto, titulo, custoR, custoP, buy }) {
    const handleClick = () => {
        scroll.scrollToTop({ duration: 0 });
    };

    return (

        <Link to={buy} onClick={handleClick} className={`${stylesMobile.produto} ${stylesDesktop.produto}`} >
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <img src={imagemProduto} alt="imagem do produto" />
            </div>
            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <h1>{titulo}</h1>
            </div>
            <div className={`${stylesMobile.produto2} ${stylesDesktop.produto2}`}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            <div className={`${stylesMobile.produto1} ${stylesDesktop.produto1}`}>
                <h3>{custoR}</h3>
                <span><AiOutlineArrowDown />30%</span>
                <h2>{custoP}</h2>
            </div>



        </Link>

    )
}
export default Produto