import Header from "../../Header/Header";
import Footer from "../../rodape/Footer";
import styles from './PaginaCompra.module.css'
import { useState } from "react";
import { FaPlane, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import Bandeira1 from '../../../../image/bandeiras cartao1.png'
import Bandeira2 from '../../../../image/bandeira2.png'
import antiPirata from '../../../../image/anti-pirata.webp'
import Produto from "../../produtos/Produto";
import impressoraPortatil from '../../../../image/foto impressora portatil.webp'
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
import lavadorDeCopos from '../../../../image/foto lavador de copo.webp'
import removedorDePelos from '../../../../image/foto remover de pelo.webp'
import { HashLink as Link } from 'react-router-hash-link';
import { useContext } from "react";
import { ArrayContext } from "../arrayproducts/ArrayProvider";
import { Fragment } from "react";
import { useEffect } from "react";
function PaginaCompra({ imagemMain, imagem2, imagem3, titulo, nameVariation, variation, variation2, variation3, custoR, custoP, desc, Add }) {
    const [selectedValue, setSelectedValue] = useState(variation);
    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
    };


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


    const [main1, setMain1] = useState(true)
    const [main2, setMain2] = useState(false)
    const [main3, setMain3] = useState(false)
    // prop de imagemMain
    var principal = imagemMain
    if (main1) {
        // prop de imagemMain
        principal = imagemMain
    }
    if (main2) {
        // prop de imagem2
        principal = imagem2
    }
    if (main3) {
        // prop de imagem3
        principal = imagem3
    }

    const produtos = useContext(ArrayContext)
    const produtosCopia = [...produtos];
    for (let i = produtosCopia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [produtosCopia[i], produtosCopia[j]] = [produtosCopia[j], produtosCopia[i]];
    }
    return (
        <div>
            <Header />
            <div className={styles.compra}>
                <div className={styles.imagem_principal}>

                    <img src={principal} alt="imagem principal do produto" />
                </div>
                <div className={styles.compra1}>
                    <img src={imagemMain} alt="img alternativa" onClick={() => { setMain1(!main1); setMain2(false); setMain3(false) }} />
                    <img src={imagem2} alt="img alternatica" onClick={() => { setMain2(!main2); setMain1(false); setMain3(false) }} />
                    <img src={imagem3} alt="img alternativa" onClick={() => { setMain3(!main3); setMain2(false); setMain1(false) }} />
                </div>
                <div className={styles.compra2}>
                    {/* prop de titulo */}
                    <h1>{titulo}</h1>
                    <Link smooth to="#moreinfo">Mais informações</Link>

                </div>
                <div className={styles.compra3}>
                    {/* prop de custoR e custoP*/}
                    <h3>R$ {custoR}</h3>
                    <h2>R$ {custoP}</h2>
                </div>
                <div className={styles.compra4}>
                    {/* prop nameVariation */}
                    <h1>{nameVariation}</h1>
                    <select value={selectedValue} onChange={handleChange}>
                        {/* variation */}
                        <option value={variation}>{variation}</option>
                        <option value={variation2}>{variation2}</option>
                    </select>
                </div>
                <div className={styles.compra5}>
                    <button onClick={() => addToCart({ imagemMain, titulo, custoP, selectedValue })}>COMPRAR</button>
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
                        {desc}
                    </p>
                </div>
                <div className={styles.tire}>
                    <h1 >Produtos relacionados</h1>
                </div>

                <div className={styles.relacionados}>
                    {produtosCopia.slice(0, 4).map((produto, index) => (
                        <Fragment key={index}>
                            {produto}
                        </Fragment>
                    ))}
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
                            <img src={imagemMain} alt="img alternativa" onClick={() => { setMain1(!main1); setMain2(false); setMain3(false) }} />
                            <img src={imagem2} alt="img alternatica" onClick={() => { setMain2(!main2); setMain1(false); setMain3(false) }} />
                            <img src={imagem3} alt="img alternativa" onClick={() => { setMain3(!main3); setMain2(false); setMain1(false) }} />
                        </div>
                    </div>
                    <div className={styles.desktop1}>
                        <div className={styles.compra2}>
                            {/* prop de titulo */}
                            <h1>{titulo}</h1>
                            <Link smooth to="#moreinfo2">Mais informações</Link>

                        </div>
                        <div className={styles.compra3}>
                            {/* prop de custoR e custoP*/}
                            <h3>R$ {custoR}</h3>
                            <h2>R$ {custoP}</h2>
                        </div>
                        <div className={styles.compra4}>
                            {/* prop nameVariation */}
                            <h1>{nameVariation}</h1>
                            <select value={selectedValue} onChange={handleChange}>
                                {/* prop variation */}
                                <option value={variation}>{variation}</option>
                                <option value={variation2}>{variation2}</option>
                            </select>
                        </div>
                        <div className={styles.compra5}>
                            <button onClick={() => addToCart({ imagemMain, titulo, custoP, selectedValue })}>COMPRAR</button>
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
                        {desc}
                    </p>
                </div>
                <div className={styles.tire}>
                    <h1 >Produtos relacionados</h1>
                </div>

                <div className={styles.relacionados}>
                    <Produto imagemProduto={impressoraPortatil} titulo={'Impressora de etiquetas térmica portátil'} custoR={'R$ 233,87'} custoP={'R$ 179,90'} addToCart={addToCart} buy={'/item1'} />
                    <Produto imagemProduto={removedorDePelos} titulo={'Removedor de pelo de roupas para máquina de lavar'} custoR={'R$ 32,50'} custoP={'R$ 25,00'} addToCart={addToCart} buy={'/item2'} />
                    <Produto imagemProduto={lavadorDeCopos} titulo={'Lavador automático de copo para pia'} custoR={'R$ 149,90'} custoP={'R$ 99,90'} addToCart={addToCart} buy={'/item3'} />
                    <Produto imagemProduto={escovaEletrica} titulo={'Escova elétrica rotatória para limpeza'} custoR={'R$ 193,97'} custoP={'R$ 149,90'} addToCart={addToCart} buy={'/item4'} />
                </div>
            </div>


            <Footer />
        </div >
    )
}
export default PaginaCompra