import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import Bandeira1 from '../../../image/bandeiras cartao1.png'
import Bandeira2 from '../../../image/bandeira2.png'
import CompraSegura from '../../../image/compra segura.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import stylesMobile from './Footer.mobile.module.css'
import stylesDesktop from './Footer.desktop.module.css'
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
    const handleClick = () => {
        // Rolar para o topo imediatamente
        scroll.scrollToTop({ duration: 0 });
    };
    return (
        <div>
            <footer className={`${stylesMobile.ft} ${stylesDesktop.ft}`}>
                <div className={`${stylesMobile.ft1} ${stylesDesktop.ft1}`}>
                    <h1>Insticional</h1>
                    <Link to='/instrucaodecompra' onClick={handleClick}>Instruções</Link>
                    <Link to='/contato' onClick={handleClick}>Contato</Link>
                    <Link to='/sobre' onClick={handleClick}>Sobre nós</Link>
                </div>
                <div className={`${stylesMobile.ft1} ${stylesDesktop.ft1}`}>
                    <h1>Políticas</h1>
                    <Link to='/politicadeprivacidade' onClick={handleClick}>Política de privacidade</Link>
                    <Link to='/termos' onClick={handleClick}>Termos e condições</Link>
                    <Link to='/trocas' onClick={handleClick}>Política de devolução</Link>
                </div>
                <div className={`${stylesMobile.ft1} ${stylesDesktop.ft1}`}>
                    <h1>Formas de pagamento</h1>
                    <img src={Bandeira1} alt="formas de pagamento" width='85%' />
                    <img src={Bandeira2} alt="formas de pagamento" width='85%' />
                </div>
                <div className={`${stylesMobile.ft1} ${stylesDesktop.ft1}`}>
                    <h1>Contato</h1>
                    <h2>casualhomeoficial@gmail.com</h2>
                    <h2>(22) 999677704</h2>
                    <h2>(22) 997225723</h2>
                    <div className={`${stylesMobile.seg} ${stylesDesktop.seg}`}><a href="https://www.instagram.com/casual_home_loja/"><FaInstagram /></a><a href="https://www.facebook.com/CasualHomeloja/"><FaFacebook /></a></div>
                    <img src={CompraSegura} alt="imagem de compra segura" width='250px' className={`${stylesMobile.seg} ${stylesDesktop.seg}`} />
                </div>
                <div className={`${stylesMobile.ft2} ${stylesDesktop.ft3}`} >
                    <a href="https://www.instagram.com/casual_home_loja/"><FaInstagram /></a><a href="https://www.facebook.com/CasualHomeloja/"><FaFacebook /></a>

                </div>
                <div className={`${stylesMobile.ft1} ${stylesDesktop.ft3}`} >
                    <img src={CompraSegura} alt="imagem de compra segura" width='300px' />
                </div>
            </footer>
            <footer className={`${stylesMobile.ftsec} ${stylesDesktop.ftsec}`} >
                <h1>CasualHome Ltda.</h1>
                <h1>Loja 100% virtual</h1>
                <h1>© 2023 CasualHome - Todos seus direitos reservados</h1>
            </footer>
        </div>

    )
}
export default Footer