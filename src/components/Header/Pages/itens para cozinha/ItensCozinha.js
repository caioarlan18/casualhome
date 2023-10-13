import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"

function ItensCozinha() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para cozinha' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px', width: '95%' }}>
                {/* PRODUTO */}

            </section>
            <Footer />
        </div>
    )
}
export default ItensCozinha