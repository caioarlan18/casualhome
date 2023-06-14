import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import escovaMagica from '../../../../image/foto escova magica.webp'
import Produto from "../../produtos/Produto"

function PetItens() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para animais' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px' }}>
                <Produto imagemProduto={escovaMagica} titulo={'Escova mágica de gato e cachorro para pelo'} custoR={'R$ 77,87'} custoP={'R$ 59,90'} />
            </section>
            <Footer />
        </div>
    )
}
export default PetItens