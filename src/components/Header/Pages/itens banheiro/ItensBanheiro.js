import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import Produto from "../../produtos/Produto"
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
import { useState } from "react"
import { useEffect } from "react"

function ItensBanheiro() {
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
            <Navigation navTitle='Itens para banheiro' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px', width: '90%' }}>
                <Produto imagemProduto={escovaEletrica} titulo={'Escova elétrica rotatória para limpeza'} custoR={'R$ 193,97'} custoP={'R$ 149,90'} addToCart={addToCart} buy={'/item4'} />
            </section>
            <Footer />
        </div>
    )
}
export default ItensBanheiro