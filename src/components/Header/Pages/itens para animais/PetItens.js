import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import { Fragment, useContext } from "react"
import { ArrayContext } from "../arrayproducts/ArrayProvider"
function PetItens() {
    const produtos = useContext(ArrayContext)
    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para animais' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px', width: '95%' }}>
                {produtos.map((produto, index) => (
                    <Fragment key={index}>
                        {produto.props.categoria.includes('animais') && produto}
                    </Fragment>
                ))}
            </section>
            <Footer />
        </div>
    )
}
export default PetItens