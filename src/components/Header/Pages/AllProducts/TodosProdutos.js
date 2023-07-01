import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import styles from './TodosProdutos.module.css'
import Navigation from "../../Navigation/Navigation"
import { useContext } from "react"
import { ArrayContext } from '../arrayproducts/ArrayProvider';

function TodosProdutos() {

    const produtos = useContext(ArrayContext);


    return (

        <div>

            <Header />
            <Navigation navTitle='Todos os produtos' />

            <section className={styles.tdsp}>
                {produtos}
            </section>


            <Footer />

        </div>
    )
}
export default TodosProdutos