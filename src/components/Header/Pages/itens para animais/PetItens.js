import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import escovaMagica from '../../../../image/foto escova magica.webp'
import Produto from "../../produtos/Produto"
import { useState } from "react"
import { useEffect } from "react"
function PetItens() {
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
            <Navigation navTitle='Itens para animais' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px' }}>
                <Produto imagemProduto={escovaMagica} titulo={'Escova mágica de gato e cachorro para pelo'} custoR={'R$ 77,87'} custoP={'R$ 59,90'} addToCart={addToCart} buy={'/item7'} />
            </section>
            <Footer />
        </div>
    )
}
export default PetItens