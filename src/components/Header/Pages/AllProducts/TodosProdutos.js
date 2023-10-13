import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import styles from './TodosProdutos.module.css'
import Navigation from "../../Navigation/Navigation"
import Produto from "../../produtos/Produto"

function TodosProdutos() {



    return (

        <div>

            <Header />
            <Navigation navTitle='Todos os produtos' />

            <section className={styles.tdsp}>
                <Produto />

            </section>


            <Footer />

        </div>
    )
}
export default TodosProdutos