import Header from "../../Header/Header";
import Footer from "../../rodape/Footer";
import styles from './PaginaCompra.module.css'
import img1 from '../../../../image/foto escova eletrica.webp'
import img2 from '../../../../image/foto lavador de copo.webp'
import img3 from '../../../../image/foto escova magica.webp'
import { useState } from "react";
function PaginaCompra({ imagemMain, imagem2, imagem3 }) {
    const [main1, setMain1] = useState(true)
    const [main2, setMain2] = useState(false)
    const [main3, setMain3] = useState(false)
    var principal = img1
    if (main1) {
        principal = img1
    }
    if (main2) {
        principal = img2
    }
    if (main3) {
        principal = img3
    }
    return (
        <div>
            <Header />
            <div className={styles.compra}>
                <div className={styles.imagem_principal}>
                    <img src={principal} alt="" />
                </div>
                <div className={styles.compra1}>
                    <img src={img1} alt="" onClick={() => { setMain1(!main1); setMain2(false); setMain3(false) }} />
                    <img src={img2} alt="" onClick={() => { setMain2(!main2); setMain1(false); setMain3(false) }} />
                    <img src={img3} alt="" onClick={() => { setMain3(!main3); setMain2(false); setMain1(false) }} />
                </div>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PaginaCompra