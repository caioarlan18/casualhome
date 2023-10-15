import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import ProdutoCategory from "../../produtos/ProdutoCategory"
function PetItens() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para animais' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px', width: '95%' }}>
                <ProdutoCategory catview={'animais'} />


            </section>
            <Footer />
        </div>
    )
}
export default PetItens