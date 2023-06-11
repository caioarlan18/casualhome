import stylesMobile from './Header.mobile.module.css'
import stylesDesktop from './Header.desktop.module.css'
import { FaBars } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../../../image/WhatsApp_Image_2023-06-11_at_00.00.07-removebg-preview.png'
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
            <div className={`${stylesMobile.mnmobile} ${stylesDesktop.mnmobile}`}>
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
                <div className={`${stylesMobile.nav} ${stylesDesktop.nav}`} >
                    <FaTimes onClick={MenuClose} />
                    <ul className={`${stylesMobile.nav1} ${stylesDesktop.nav1}`}>
                        <Link to='todosprodutos'><li>Ver todos os produtos</li></Link>
                        <Link to='itenscasa'><li>Itens para casa</li></Link>
                        <Link to='itensanimais'><li>Itens para animais</li></Link>
                    </ul>
                </div>
            </div>
            {/* menu desktop */}
            <div className={`${stylesMobile.mndesktop} ${stylesDesktop.mndesktop}`}>
                <div className={`${stylesMobile.hd_desk} ${stylesDesktop.hd_desk}`}>
                    <div className={`${stylesMobile.hd1_desk} ${stylesDesktop.hd1_desk}`}>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className={`${stylesMobile.hd1_desk} ${stylesDesktop.hd1_desk}`}>
                        <Link>Contato</Link>
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

                <div className={`${stylesMobile.hddd_desk} ${stylesDesktop.hddd_desk}`}>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link to='todosprodutos'>Todos os produtos</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link>Intruções de compra</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link>Sobre nós</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link>Nos acompanhe</Link>
                    </div>
                </div>
            </div>


            <div className={`${stylesMobile.overlay}`} onClick={sumir}></div>
        </div>
    )
}
export default Header