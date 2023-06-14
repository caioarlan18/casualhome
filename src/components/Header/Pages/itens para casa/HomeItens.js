import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import Produto from "../../produtos/Produto"
import removedorDePelos from '../../../../image/foto remover de pelo.webp'
import lavadorDeCopos from '../../../../image/foto lavador de copo.webp'
import tampaSilicone from '../../../../image/foto tampas de silicone.webp'
import seladoraVacuo from '../../../../image/foto seladora vacuo.webp'
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
function HomeItens() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para casa' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px' }}>
                <Produto imagemProduto={removedorDePelos} titulo={'Removedor de pelo de roupas para máquina de lavar'} custoR={'R$ 32,50'} custoP={'R$ 25,00'} />
                <Produto imagemProduto={lavadorDeCopos} titulo={'Lavador automático de copo para pia'} custoR={'R$ 149,90'} custoP={'R$ 99,90'} />
                <Produto imagemProduto={escovaEletrica} titulo={'Escova elétrica rotatória para limpeza'} custoR={'R$ 193,97'} custoP={'R$ 149,90'} />
                <Produto imagemProduto={tampaSilicone} titulo={'Tampas de silicone ajustáveis (6 peças)'} custoR={'R$ 90,87'} custoP={'R$ 69,90'} />
                <Produto imagemProduto={seladoraVacuo} titulo={'Seladora à vácuo portátil'} custoR={'R$ 297,97'} custoP={'R$ 229,90'} />

            </section>
            <Footer />
        </div>
    )
}
export default HomeItens