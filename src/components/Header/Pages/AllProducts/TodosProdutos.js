import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import styles from './TodosProdutos.module.css'
import Produto from "../../produtos/Produto"
import removedorDePelos from '../../../../image/foto remover de pelo.webp'
import lavadorDeCopos from '../../../../image/foto lavador de copo.webp'
import tampaSilicone from '../../../../image/foto tampas de silicone.webp'
import escovaMagica from '../../../../image/foto escova magica.webp'
import impressoraPortatil from '../../../../image/foto impressora portatil.webp'
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
import seladoraVacuo from '../../../../image/foto seladora vacuo.webp'
import Navigation from "../../Navigation/Navigation"

function TodosProdutos() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Todos os produtos' />
            <section className={styles.tdsp}>
                <Produto imagemProduto={impressoraPortatil} titulo={'Impressora de etiquetas térmica portátil'} custoR={'R$ 233,87'} custoP={'R$ 179,90'} />
                <Produto imagemProduto={removedorDePelos} titulo={'Removedor de pelo de roupas para máquina de lavar'} custoR={'R$ 32,50'} custoP={'R$ 25,00'} />
                <Produto imagemProduto={lavadorDeCopos} titulo={'Lavador automático de copo para pia'} custoR={'R$ 149,90'} custoP={'R$ 99,90'} />
                <Produto imagemProduto={escovaEletrica} titulo={'Escova elétrica rotatória para limpeza'} custoR={'R$ 193,97'} custoP={'R$ 149,90'} />
                <Produto imagemProduto={tampaSilicone} titulo={'Tampas de silicone ajustáveis (6 peças)'} custoR={'R$ 90,87'} custoP={'R$ 69,90'} />
                <Produto imagemProduto={escovaMagica} titulo={'Escova mágica de gato e cachorro para pelo'} custoR={'R$ 77,87'} custoP={'R$ 59,90'} />
                <Produto imagemProduto={seladoraVacuo} titulo={'Seladora à vácuo portátil'} custoR={'R$ 297,97'} custoP={'R$ 229,90'} />
            </section>

            <Footer />
        </div>
    )
}
export default TodosProdutos