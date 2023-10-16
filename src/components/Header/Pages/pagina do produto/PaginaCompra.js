import Header from "../../Header/Header";
import Footer from "../../rodape/Footer";
import styles from './PaginaCompra.module.css'
import { useState } from "react";
import { FaPlane, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import Bandeira1 from '../../../../image/bandeiras cartao1.webp'
import Bandeira2 from '../../../../image/bandeira2.webp'
import antiPirata from '../../../../image/anti-pirata.webp'
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { animateScroll as scroll } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { db } from '../firebase/FireBase'
import { collection, getDoc, doc } from "firebase/firestore";
import Produto from "../../produtos/Produto";

function PaginaCompra() {

    const { id } = useParams()
    const [users, setUsers] = useState({
        produto: {
            name: '',
            realPrice: '',
            promoPrice: '',
            mainImage: '',
            image1: '',
            image2: '',
            description: '',
            category: ''
        }
    })
    useEffect(() => {
        const fetchUserData = async () => {
            const userRef = doc(db, 'produtos', id);

            try {
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    setUsers(userDoc.data());
                } else {
                    console.log('Documento não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar documento:', error);
            }
        };

        fetchUserData();
    }, [id]);


    const [cartItems, setCartItems] = useState([]);

    const addToCart = () => {
        const updatedCartItems = [...cartItems, users.produto];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        navigate('/carrinho')
        scroll.scrollToTop({ duration: 0 });
    };
    const navigate = useNavigate()
    const addToCart2 = () => {
        const updatedCartItems = [...cartItems, users.produto];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        alert('Produto adicionado ao carrinho');
    };

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);



    const [main1, setMain1] = useState(true)
    const [main2, setMain2] = useState(false)
    const [main3, setMain3] = useState(false)
    // prop de imagemMain
    var principal = users.produto.mainImage
    if (main1) {
        // prop de imagemMain
        principal = users.produto.mainImage
    }
    if (main2) {
        // prop de imagem2
        principal = users.produto.image1
    }
    if (main3) {
        // prop de imagem3
        principal = users.produto.image2
    }


    return (
        <div>
            <Header />

            <div className={styles.compra}>
                <div className={styles.imagem_principal}>

                    <img src={principal} alt="imagem principal do produto" />
                </div>
                <div className={styles.compra1}>
                    <img src={users.produto.mainImage} alt="img alternativa" onClick={() => { setMain1(!main1); setMain2(false); setMain3(false) }} />
                    <img src={users.produto.image1} alt="img alternatica" onClick={() => { setMain2(!main2); setMain1(false); setMain3(false) }} />
                    <img src={users.produto.image2} alt="img alternativa" onClick={() => { setMain3(!main3); setMain2(false); setMain1(false) }} />
                </div>
                <div className={styles.compra2}>
                    {/* prop de titulo */}
                    <h1>{users.produto.name}</h1>
                    <Link smooth to="#moreinfo">Mais informações</Link>

                </div>
                <div className={styles.compra3}>
                    {/* prop de custoR e custoP*/}
                    <h3>R$ {users.produto.realPrice}</h3>
                    <span><AiOutlineArrowDown />30%</span>
                    <h2>R$ {users.produto.promoPrice}</h2>
                </div>

                <div className={styles.compra5}>
                    <button onClick={addToCart} >COMPRAR</button>
                    <button className={styles.compra51} onClick={addToCart2}>ADICIONAR AO CARRINHO</button>
                </div>
                <div className={styles.compra6}>
                    <div className={styles.compra6b}>
                        <span><FaPlane />Frete Grátis para todo Brasil</span>
                    </div>
                    <div className={styles.compra6b}>
                        <span><FaShieldAlt />Garantia de 30 dias direto em nossa loja</span>
                    </div>
                    <div className={styles.compra6b}>
                        <span><FaExchangeAlt />7 dias para trocas e devoluções</span>
                    </div>
                    <div className={styles.compra7}>
                        <img src={Bandeira1} alt="formas de pagamento" />
                        <img src={Bandeira2} alt="formas de pagamento" />
                        <img src={antiPirata} alt="banner anti pirataria" />
                    </div>
                </div>
                <div className={styles.compra8} id="moreinfo">
                    <h1>Informações do produto</h1>
                    {/* colocar prop desc */}
                    <h2>Descrição</h2>
                    <p>
                        {users.produto.description}
                    </p>
                </div>
                <div className={styles.tire}>
                    <h1 >Produtos relacionados</h1>
                </div>

                <div className={styles.relacionados}>
                    <Produto n1={0} n2={4} />
                </div>
            </div>



            {/* desktop */}

            <div className={styles.compra_desktop}>
                <div className={styles.desktop}>
                    <div className={styles.desktop1}>
                        <div className={styles.imagem_principal}>

                            <img src={principal} alt="imagem principal do produto" />
                        </div>
                        <div className={styles.compra1}>
                            <img src={users.produto.mainImage} alt="img alternativa" onClick={() => { setMain1(!main1); setMain2(false); setMain3(false) }} />
                            <img src={users.produto.image1} alt="img alternatica" onClick={() => { setMain2(!main2); setMain1(false); setMain3(false) }} />
                            <img src={users.produto.image2} alt="img alternativa" onClick={() => { setMain3(!main3); setMain2(false); setMain1(false) }} />
                        </div>
                    </div>
                    <div className={styles.desktop1}>
                        <div className={styles.compra2}>
                            {/* prop de titulo */}
                            <h1>{users.produto.name}</h1>
                            <Link smooth to="#moreinfo2">Mais informações</Link>

                        </div>
                        <div className={styles.compra3}>
                            {/* prop de custoR e custoP*/}
                            <h3>R$ {users.produto.realPrice}</h3>
                            <h2>R$ {users.produto.promoPrice}</h2>
                        </div>

                        <div className={styles.compra5}>
                            <button onClick={addToCart}>COMPRAR</button>
                            <button className={styles.compra51} onClick={addToCart2}>ADICIONAR AO CARRINHO</button>
                        </div>
                        <div className={styles.compra6}>
                            <div className={styles.compra6b}>
                                <span><FaPlane />Frete Grátis para todo Brasil</span>
                            </div>
                            <div className={styles.compra6b}>
                                <span><FaShieldAlt />Garantia de 30 dias direto em nossa loja</span>
                            </div>
                            <div className={styles.compra6b}>
                                <span><FaExchangeAlt />7 dias para trocas e devoluções</span>
                            </div>
                            <div className={styles.compra7}>
                                <img src={Bandeira1} alt="formas de pagamento" />
                                <img src={Bandeira2} alt="formas de pagamento" />
                                <img src={antiPirata} alt="banner anti pirataria" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.compra8} id="moreinfo2">
                    <h1>Informações do produto</h1>
                    {/* colocar prop desc */}
                    <h2>Descrição</h2>
                    <p>
                        {users.produto.description}
                    </p>
                </div>
                <div className={styles.tire}>
                    <h1 >Produtos relacionados</h1>
                </div>

                <div className={styles.relacionados}>
                    <Produto n1={0} n2={4} />
                </div>
            </div>



            <Footer />
        </div >
    )
}
export default PaginaCompra