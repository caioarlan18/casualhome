import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import Produto from "../../produtos/Produto"
import lavadorDeCopos from '../../../../image/foto lavador de copo.webp'
import tampaSilicone from '../../../../image/foto tampas de silicone.webp'
import seladoraVacuo from '../../../../image/foto seladora vacuo.webp'
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
import { useState } from "react"
import { useEffect } from "react"
import tabuaDobravel from '../../../../image/tabuadobravel.jpg'
function ItensCozinha() {
    // sistema de adicionar itens ao carrinho
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        const updatedCartItems = [...cartItems, item];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        alert('Produto adicionado ao carrinho')
    };

    // Função para recuperar os dados do carrinho ao carregar a página
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);



    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para cozinha' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px', width: '90%' }}>
                <Produto imagemProduto={lavadorDeCopos} titulo={'Lavador automático de copo para pia'} custoR={'R$ 149,90'} custoP={'R$ 99,90'} addToCart={addToCart} buy={'/item3'} categoria1={'casa'} />
                <Produto imagemProduto={escovaEletrica} titulo={'Escova elétrica rotatória para limpeza'} custoR={'R$ 193,97'} custoP={'R$ 149,90'} addToCart={addToCart} buy={'/item4'} />
                <Produto imagemProduto={tampaSilicone} titulo={'Tampas de silicone ajustáveis (6 peças)'} custoR={'R$ 90,87'} custoP={'R$ 69,90'} addToCart={addToCart} buy={'/item5'} />
                <Produto imagemProduto={seladoraVacuo} titulo={'Seladora à vácuo portátil'} custoR={'R$ 297,97'} custoP={'R$ 229,90'} addToCart={addToCart} buy={'/item6'} />
                <Produto imagemProduto={tabuaDobravel} titulo={'Tábua Gourmet de Corte Dobrável'} custoR={'R$ 51,87'} custoP={'R$ 39,90'} addToCart={addToCart} buy={'/item8'} />
            </section>
            <Footer />
        </div>
    )
}
export default ItensCozinha