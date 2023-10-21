import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import styles from './Carrinho.module.css'
import { useState, useEffect } from "react"
import { IoCartOutline } from 'react-icons/io5';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function Carrinho() {



    const [cartItems, setCartItems] = useState([]);
    // Função para recuperar os dados do carrinho ao carregar a página
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const calculateTotal = () => {
            const sum = cartItems.reduce((accumulator, item) => {
                if (item.promoPrice) {
                    if (item.promoPrice.includes('R$ ')) {
                        return accumulator + parseFloat(item.promoPrice.replace('R$ ', ''));
                    } else {
                        return accumulator + parseFloat(item.promoPrice);
                    }
                } else {
                    return accumulator;
                }
            }, 0);
            setTotal(sum);
        };

        calculateTotal();
    }, [cartItems]);


    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    const navigate = useNavigate()
    function checkout() {
        navigate('/checkout')
        scroll.scrollToTop({ duration: 0 });
    }

    if (!cartItems || cartItems.length === 0) {
        return (
            <div>
                <Header />
                <Navigation navTitle='Carrinho de compras' />
                <div className={styles.vazio}>
                    <IoCartOutline />
                    <h1>seu carrinho tá vazio</h1>
                    <p>Que tal navegar pelas milhares de ofertas e achar uma especial para você?</p>
                    <Link to={'/todosprodutos'}><button>ver produtos</button></Link>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Navigation navTitle={'Carrinho de compras'} />
            <div className={styles.carrinho}>
                <h2>carrinho</h2>
                <div>

                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.carrinho2}>
                            <div className={styles.carrinho3}>
                                <img src={item.mainImage} alt="imagem do produto" />
                                <p onClick={() => removeFromCart(index)}>remover</p>
                            </div>
                            <div className={styles.carrinho3}>
                                <h1>{item.name}</h1>
                                <h3>R$ {item.promoPrice}</h3>
                            </div>
                        </div>
                    ))}
                    <div className={styles.carrinho4}>
                        <div className={styles.carrinho41}>
                            <div className={styles.carrinho4a}>
                                <h1>resumo do pedido</h1>
                            </div>
                            <div className={styles.carrinho4b}>
                                <h2>{cartItems.length} produtos</h2>
                                <h2>R$ {total.toFixed(2)}</h2>
                            </div>
                            <div className={styles.carrinho4b}>
                                <h2>frete</h2>
                                <h2>grátis</h2>
                            </div>
                            <div className={styles.linha}>

                            </div>
                            <div className={styles.carrinho4b}>
                                <h3>total</h3>
                                <h3>R$ {total.toFixed(2)}</h3>
                            </div>
                            <div className={styles.linha}>

                            </div>
                            <div>
                                <button onClick={checkout}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Carrinho
