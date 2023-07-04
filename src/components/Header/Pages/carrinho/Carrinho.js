import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import styles from './Carrinho.module.css'
import { useState, useEffect } from "react"
import { AiOutlineClose } from 'react-icons/ai';

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
        // Função para calcular o total ao atualizar o carrinho
        const calculateTotal = () => {
            const sum = cartItems.reduce((accumulator, item) => {
                const custoPString = String(item.custoP);
                return accumulator + parseFloat(custoPString.replace('R$ ', ''));
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

    if (!cartItems || cartItems.length === 0) {
        return (
            <div>
                <Header />
                <Navigation navTitle='Carrinho de compras' />
                <div className={styles.vazio}>
                    <p>Carrinho vazio</p>
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
                <h2>Carrinho de Compras</h2>
                <div>
                    <div className={styles.carrinho1}>
                        <h1>Produto</h1>
                        <h1>Preço</h1>
                    </div>
                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.carrinho2}>
                            <div className={styles.carrinho3}>
                                <AiOutlineClose onClick={() => removeFromCart(index)}>Remover</AiOutlineClose>
                                <img src={item.imagemProduto || item.imagemMain} alt="imagem do produto" />
                                <p>{item.titulo}</p>
                            </div>
                            <div className={styles.carrinho3}>
                                <p>{item.selectedValue}</p>
                                <p>{item.custoP}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.carrinho4}>
                        <p>Total a pagar: R$ {total.toFixed(2)}</p>
                        <button>Finalizar Compra</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Carrinho
