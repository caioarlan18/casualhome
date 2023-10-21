import stylesMobile from './Header.mobile.module.css'
import stylesDesktop from './Header.desktop.module.css'
import { FaBars, FaTimes, FaSearch, FaShoppingBag, FaToilet, FaPaw, FaInstagram, FaHome, FaFacebook, FaBox, FaArrowLeft, FaLock, FaPhone, FaShoppingCart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { GiSofa, GiCook } from 'react-icons/gi';
import LogoMobile from '../../../image/logo.png'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { MdViewModule } from 'react-icons/md';
import { db } from '../Pages/firebase/FireBase'
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate()
    const handleClick = () => {
        // Rolar para o topo imediatamente
        scroll.scrollToTop({ duration: 0 });
    };

    // função de abrir menu hamburguer
    function MenuOpen() {
        const menu = document.querySelector(`.${stylesMobile.nav}`);
        menu.classList.toggle(stylesMobile.active);
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        overlay.style.display = 'block';
    }

    // função de fechar menu hamburguer
    function MenuClose() {
        const menu = document.querySelector(`.${stylesMobile.nav}`);
        menu.classList.remove(stylesMobile.active);
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        overlay.style.display = 'none';
    }




    // função do overlay para o menu hamburguer
    function sumir() {
        const menu = document.querySelector(`.${stylesMobile.nav}`);
        const overlay = document.querySelector(`.${stylesMobile.overlay}`);
        menu.classList.remove(stylesMobile.active);
        overlay.style.display = 'none';
    }

    // função para o overlay da barra de pesquisa (mobile e desktop)
    function sumir2() {
        const overlay2 = document.querySelector(`.${stylesMobile.overlay2}`);
        overlay2.style.display = 'none';
        setAtivo2(false)
        setAtivo(!ativo)
    }
    const [users, setUsers] = useState([])
    const useCollectionRef = collection(db, 'produtos')
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(useCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])
    // função da barra de pesquisa (mobile e desktop)
    const [ativo, setAtivo] = useState(false)
    const [ativo2, setAtivo2] = useState(false)
    function search() {
        setAtivo(true)
        if (!ativo2) {
            const overlay2 = document.querySelector(`.${stylesMobile.overlay2}`);
            overlay2.style.display = 'block';

        } else {
            const overlay2 = document.querySelector(`.${stylesMobile.overlay2}`);
            overlay2.style.display = 'none';

        }
    }

    const location = useLocation();

    // mobile
    const buscarRef = useRef(null);
    useEffect(() => {
        if (location.pathname === '/busca') {
            buscarRef.current.focus();
        }
    }, [location]);

    // desktop
    const buscarRef2 = useRef(null);
    useEffect(() => {
        if (location.pathname === '/busca') {
            buscarRef2.current.focus();
        }
    }, [location]);

    const [cartItems, setCartItems] = useState([]);
    const [quantidade, setQuantidade] = useState(0);

    // Função para recuperar os dados do carrinho ao carregar a página
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);


    useEffect(() => {
        setQuantidade(cartItems.length);
    }, [cartItems]);

    // sistema de busca

    const [pesquisa, setPesquisa] = useState('')
    function valor(event) {
        setPesquisa(event.target.value)
    }
    const pesquisaLower = pesquisa.toLowerCase()
    const avu = users.filter((objeto) => (
        objeto.produto.name.toLowerCase().startsWith(pesquisaLower)
    ))

    return (
        <div>
            {/* cabeçalho mobile */}
            <div className={`${stylesMobile.prehd} ${stylesDesktop.prehd}`}>
                <h1><FaShoppingCart />Frete grátis para todo o Brasil</h1>
            </div>
            <header className={`${stylesMobile.mnmobile} ${stylesDesktop.mnmobile}`}>

                <div className={`${stylesMobile.hd} ${stylesDesktop.hd}`}>
                    <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                        <Link><FaBars onClick={MenuOpen} /></Link>
                        <Link to='/'><img src={LogoMobile} alt="logo da casual home" /></Link>
                    </div>
                    <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                        <Link to='/carrinho'><IoCartOutline /></Link>
                        <p style={{ textAlign: 'center', fontFamily: 'poppins', fontSize: '13px', color: 'white', padding: '3px 7px', backgroundColor: '#FFB711', borderRadius: '50%' }}>{quantidade}</p>
                    </div>
                </div>

                <div className={`${stylesMobile.hdd} ${stylesDesktop.hdd}`} >
                    <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`} style={ativo ? { position: 'fixed', top: '0', width: '100%', zIndex: '2' } : {}}>
                        <input type="text" ref={buscarRef} placeholder='O que está buscando?' onClick={search} onChange={valor} style={ativo ? { borderRadius: '0', height: '50px', border: '0' } : {}} />
                        <button style={ativo ? { borderRadius: '0', border: '0' } : {}}><FaSearch /></button>
                    </div>
                    {avu.map((produto, index) => (
                        ativo && pesquisa !== '' ? (
                            <div key={index} onClick={() => { navigate(`/compra/${produto.id}`); scroll.scrollToTop({ duration: 0 }) }}>
                                <div className={`${stylesMobile.pesquisa} ${stylesDesktop.pesquisa}`}>
                                    <div className={`${stylesMobile.pesquisa1} ${stylesDesktop.pesquisa1}`}>
                                        <img src={produto.produto.mainImage} alt="imagem do produto" />
                                        <p>{produto.produto.name}</p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    ))}

                </div>
            </header >
            {/* menu hamburguer */}
            <nav className={`${stylesMobile.nav} ${stylesDesktop.nav}`} >

                <div className={stylesMobile.navl}>
                    <FaTimes onClick={MenuClose} />
                    <div className={stylesMobile.englob}>
                        <div className={stylesMobile.navl1}>
                            <Link to="/" onClick={handleClick}><FaHome /><span>Home</span></Link>
                        </div>
                        <div className={stylesMobile.navl1}>
                            <a href="https://www.instagram.com/casual_home_loja/"><FaInstagram /></a>
                            <a href="https://www.facebook.com/CasualHomeloja/"><FaFacebook /></a>
                        </div>
                    </div>
                </div>



                <div className={`${stylesMobile.nav2} ${stylesDesktop.nav2}`} >
                    <Link to='/todosprodutos' onClick={handleClick}><FaShoppingBag />Ver todos os produtos</Link>
                    <Link to='/itenscasa' onClick={handleClick}><GiSofa />Itens para casa</Link>
                    <Link to='/itenscozinha' onClick={handleClick}><GiCook />Itens para cozinha</Link>
                    <Link to='/itensbanheiro' onClick={handleClick}><FaToilet />Itens para banheiro</Link>
                    <Link to='/itensanimais' onClick={handleClick}><FaPaw />Itens para animais</Link>
                    <Link to='/sobre' onClick={handleClick}><FaBox />Quem Somos</Link>
                    <Link to='/trocas' onClick={handleClick}><FaArrowLeft />Trocas e devoluções</Link>
                    <Link to='/politicadeprivacidade' onClick={handleClick}><FaLock />Política de privacidade</Link>
                    <Link to='/contato' onClick={handleClick}><FaPhone />Central de atendimento</Link>
                    <Link to='/login' onClick={handleClick}><MdViewModule />Painel</Link>
                </div>

            </nav>

            {/* menu desktop */}
            <header className={`${stylesMobile.mndesktop} ${stylesDesktop.mndesktop}`}>
                <div className={`${stylesMobile.hd_desk} ${stylesDesktop.hd_desk}`}>
                    <div className={`${stylesMobile.hd1_desk} ${stylesDesktop.hd1_desk}`}>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className={`${stylesMobile.hd1_desk} ${stylesDesktop.hd1_desk}`}>
                        <Link to='/contato'>Contato</Link>
                    </div>
                    <div className={`${stylesMobile.hd1_desk} ${stylesDesktop.hd1_desk}`}>
                        <Link to='/login'>Painel</Link>
                    </div>
                </div>

                <div className={`${stylesMobile.hdd_desk} ${stylesDesktop.hdd_desk}`}>
                    <div className={`${stylesMobile.hdd1_desk} ${stylesDesktop.hdd1_desk}`}>
                        <Link to='/'><img src={LogoMobile} alt="logo do site" /></Link>
                    </div>
                    <div className={`${stylesMobile.hdd1_desk} ${stylesDesktop.hdd1_desk}`} style={ativo ? { position: 'fixed', top: '0', width: '100%', zIndex: '2', left: '0' } : {}} >
                        <input type="text" ref={buscarRef2} placeholder='busque aqui seu produto' onClick={search} onChange={valor} style={ativo ? { borderRadius: '0', height: '50px', border: '0', width: '100%' } : {}} />
                        <button style={ativo ? { borderRadius: '0', border: '0', position: 'fixed', right: '0', height: '50px' } : {}}><FaSearch /></button>
                    </div>

                    <div className={`${stylesMobile.hdd1_desk} ${stylesDesktop.hdd1_desk}`}>
                        <Link to='/carrinho'><IoCartOutline /></Link>
                        <div style={{ textAlign: 'center', fontFamily: 'poppins', fontSize: '15px' }}>{quantidade}</div>
                    </div>
                </div>
                {avu.map((produto, index) => (
                    ativo && pesquisa !== '' ? (
                        <div key={index} onClick={() => { navigate(`/compra/${produto.id}`); scroll.scrollToTop({ duration: 0 }) }}>
                            <div className={`${stylesMobile.pesquisa} ${stylesDesktop.pesquisa}`}>
                                <div className={`${stylesMobile.pesquisa1} ${stylesDesktop.pesquisa1}`}>
                                    <img src={produto.produto.mainImage} alt="imagem do produto" />
                                    <p>{produto.produto.name}</p>
                                </div>
                            </div>
                        </div>
                    ) : null
                ))}
                <nav className={`${stylesMobile.hddd_desk} ${stylesDesktop.hddd_desk}`}>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link to='/todosprodutos'>Todos os produtos</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link to='/instrucaodecompra'>Intruções de compra</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <Link to='/sobre'>Sobre nós</Link>
                    </div>
                    <div className={`${stylesMobile.hddd1_desk} ${stylesDesktop.hddd1_desk}`}>
                        <a href='https://www.instagram.com/casual_home_loja/'>Nos acompanhe</a>
                    </div>

                </nav>
            </header >


            <div className={`${stylesMobile.overlay}`} onClick={sumir}></div>
            <div className={`${stylesMobile.overlay2}`} onClick={sumir2}></div>
        </div >
    )
}
export default Header