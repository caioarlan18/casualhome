import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import ProdutoCategory from "../../produtos/ProdutoCategory"
function ItensBanheiro() {

    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para banheiro' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px', width: '95%' }}>
                <ProdutoCategory catview={'banheiro'} />


            </section>
            <Footer />
        </div>
    )
}
export default ItensBanheiro