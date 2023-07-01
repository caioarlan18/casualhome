import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import { useContext } from "react"
import { ArrayContext } from "../arrayproducts/ArrayProvider"
function HomeItens() {
    const produtos = useContext(ArrayContext);

    return (
        <div>
            <Header />
            <Navigation navTitle='Itens para casa' />
            <section style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px', marginBottom: '100px', width: '90%' }}>
                {produtos.map((produto) => (
                    produto.props.categoria.includes('casa') && produto
                ))}
            </section>
            <Footer />
        </div>
    )
}
export default HomeItens