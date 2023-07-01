import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import { useState } from "react"
import { useContext } from "react"
import { ArrayContext } from "../arrayproducts/ArrayProvider"
function Busca() {

    const produtos = useContext(ArrayContext)
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
            <div >
                {avu.map((produto, index) => (
                    pesquisa !== '' && <div key={index} style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', width: '100%' }}>{produto}</div>
                ))}
            </div>
            <Footer />
        </div>

    )
}
export default Busca