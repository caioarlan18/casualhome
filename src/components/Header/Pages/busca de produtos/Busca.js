import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import Produto from "../../produtos/Produto"
import { useState } from "react"
import removedorDePelos from '../../../../image/foto remover de pelo.webp'
import lavadorDeCopos from '../../../../image/foto lavador de copo.webp'
import tampaSilicone from '../../../../image/foto tampas de silicone.webp'
import escovaMagica from '../../../../image/foto escova magica.webp'
import impressoraPortatil from '../../../../image/foto impressora portatil.webp'
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
import seladoraVacuo from '../../../../image/foto seladora vacuo.webp'
import { useEffect } from "react"
function Busca() {
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
    const produtos = [
        <Produto imagemProduto={impressoraPortatil} titulo={'Impressora de etiquetas térmica portátil'} custoR={'R$ 233,87'} custoP={'R$ 179,90'} addToCart={addToCart} buy={'/item1'} />,
        <Produto imagemProduto={removedorDePelos} titulo={'Removedor de pelo de roupas para máquina de lavar'} custoR={'R$ 32,50'} custoP={'R$ 25,00'} addToCart={addToCart} buy={'/item2'} />,
        <Produto imagemProduto={lavadorDeCopos} titulo={'Lavador automático de copo para pia'} custoR={'R$ 149,90'} custoP={'R$ 99,90'} addToCart={addToCart} buy={'/item3'} />,
        <Produto imagemProduto={escovaEletrica} titulo={'Escova elétrica rotatória para limpeza'} custoR={'R$ 193,97'} custoP={'R$ 149,90'} addToCart={addToCart} buy={'/item4'} />,
        <Produto imagemProduto={tampaSilicone} titulo={'Tampas de silicone ajustáveis (6 peças)'} custoR={'R$ 90,87'} custoP={'R$ 69,90'} addToCart={addToCart} buy={'/item5'} />,
        <Produto imagemProduto={seladoraVacuo} titulo={'Seladora à vácuo portátil'} custoR={'R$ 297,97'} custoP={'R$ 229,90'} buy={'/item6'} />,
        <Produto imagemProduto={escovaMagica} titulo={'Escova mágica de gato e cachorro para pelo'} custoR={'R$ 77,87'} custoP={'R$ 59,90'} addToCart={addToCart} buy={'/item7'} />,

    ]
    const [pesquisa, setPesquisa] = useState('')
    const pesquisaLower = pesquisa.toLowerCase()
    var avu = produtos.filter((produto) => (
        produto.props.titulo.toLowerCase().startsWith(pesquisaLower)
    ))
    function valor(event) {
        setPesquisa(event.target.value)
    }


    return (
        <div>
            <Header buscar={valor} />
            <Navigation navTitle={'Buscar produtos'} />
            <div style={{ marginTop: '30px', marginBottom: '100px', display: 'flex', flexWrap: 'wrap', width: '90%' }}>
                {avu.map((produto, index) => (
                    pesquisa !== '' && <div key={index}>{produto}</div>
                ))}
            </div>
            <Footer />
        </div>

    )
}
export default Busca