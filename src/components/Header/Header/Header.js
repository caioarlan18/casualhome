import stylesMobile from './Header.mobile.module.css'
import stylesDesktop from './Header.desktop.module.css'
import { FaBars } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../../../image/logotipocasualhome.png'
import { FaHome } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import petIcon from '../../../image/icone-de-pet.png'
import homeIcon from '../../../image/icone-de-casa-removebg-preview.png'
import bolsaCompra from '../../../image/bolsa-de-compras-azul-removebg-preview.png'
import { FaBox } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
function Header() {

    function MenuOpen() {
        var menu = document.querySelector(`.${stylesMobile.nav}`)
        menu.classList.toggle(stylesMobile.active)
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        overlay.style.display = 'block';
    }
    function MenuClose() {
        var menu = document.querySelector(`.${stylesMobile.nav}`)
        menu.classList.remove(stylesMobile.active)
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        overlay.style.display = 'none';
    }
    function sumir() {
        var menu = document.querySelector(`.${stylesMobile.nav}`)
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        menu.classList.remove(stylesMobile.active)
        overlay.style.display = 'none';
    }
    return (
        <div>
            {/* cabeçalho mobile */}
            <header className={`${stylesMobile.mnmobile} ${stylesDesktop.mnmobile}`}>
                <div className={`${stylesMobile.hd} ${stylesDesktop.hd}`}>
                    <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                        <FaBars onClick={MenuOpen} />
                    </div>
                    <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                        <img src={Logo} alt="logo do site" />
                    </div>
                    <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                        <IoCartOutline />
                    </div>
                </div>

                <div className={`${stylesMobile.hdd} ${stylesDesktop.hdd}`}>
                    <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>
                        <input type="text" placeholder='Pesquisar produtos' />
                        <button><FaSearch /></button>
                    </div>
                </div>

                {/* menu hamburguer */}
                <nav className={`${stylesMobile.nav} ${stylesDesktop.nav}`} >

                    <div className={stylesMobile.navl}>
                        <FaTimes onClick={MenuClose} />
                        <div className={stylesMobile.englob}>
                            <div className={stylesMobile.navl1}>
                                <Link to="/"><FaHome /><span>Home</span></Link>
                            </div>
                            <div className={stylesMobile.navl1}>
                                <a href="https://www.instagram.com/casual_home_loja/"><FaInstagram /></a>
                                <a href="https://www.facebook.com/CasualHomeloja/"><FaFacebook /></a>
                            </div>
                        </div>
                    </div>

                    <div className={`${stylesMobile.nav1} ${stylesDesktop.nav1}`}>
                        <Link to='todosprodutos'><img src={bolsaCompra} alt="icone de bolsa de compra" width='50px' /> <span>Ver todos os produtos</span></Link>
                        <Link to='itenscasa'><img src={homeIcon} alt="icone de uma casa" width='30px' /><span>Itens para casa</span></Link>
                        <Link to='itensanimais'> <img src={petIcon} alt="icone de pet" width='30px' /> <span>Itens para animais</span></Link>
                    </div>

                    <div className={`${stylesMobile.nav2} ${stylesDesktop.nav2}`} >
                        <Link to='sobre'><FaBox />Quem Somos</Link>
                        <Link to='trocas'><FaArrowLeft />Trocas e devoluções</Link>
                        <Link to='politicadeprivacidade'><FaLock />Política de privacidade</Link>
                        <Link to='contato'><FaPhone />Central de atendimento</Link>
                    </div>

                </nav>
            </header>
            {/* menu desktop */}
            <header className={`${stylesMobile.mndesktop} ${stylesDesktop.mndesktop}`}>
                <div className={`${stylesMobile.hd_desk} ${stylesDesktop.hd_desk}`}>
                    <div className={`${stylesMobile.hd1_desk} ${stylesDesktop.hd1_desk}`}>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className={`${stylesMobile.hd1_desk} ${stylesDesktop.hd1_desk}`}>
                        <Link to='contato'>Contato</Link>
                    </div>
                </div>

                <div className={`${stylesMobile.hdd_desk} ${stylesDesktop.hdd_desk}`}>
                    <div className={`${stylesMobile.hdd1_desk} ${stylesDesktop.hdd1_desk}`}>
                        <img src={Logo} alt="logo do site" />
                    </div>
                    <div className={`${stylesMobile.hdd1_desk} ${stylesDesktop.hdd1_desk}`}>
                        <input type="text" placeholder='Pesquisar produtos' />
                        <button><FaSearch /></button>
                    </div>
                    <div className={`${stylesMobile.hdd1_desk} ${stylesDesktop.hdd1_desk}`}>
                        <IoCartOutline />
                    </div>
                </div>

                <nav className={`${stylesMobile.hddd_desk} ${stylesDesktop.hddd_desk}`}>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link to='todosprodutos'>Todos os produtos</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link to='intrucaodecompra'>Intruções de compra</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link to='sobre'>Sobre nós</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <a href='https://www.instagram.com/casual_home_loja/'>Nos acompanhe</a>
                    </div>

                </nav>
            </header>


            <div className={`${stylesMobile.overlay}`} onClick={sumir}></div>
        </div>
    )
}
export default Header