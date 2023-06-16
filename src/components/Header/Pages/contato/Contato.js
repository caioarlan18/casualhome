import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import styles from './Contato.module.css'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
function Contato() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Central de atendimento' />
            <div className={styles.contato}>
                <div className={styles.contato1}>
                    <h1>Fale conosco</h1>
                    <p>Pelo canal de atendimento ao cliente estamos disponíveis para atendê-lo(a) da melhor forma</p>
                    <p><FaWhatsapp className={styles.redes1} />(22) 999677704</p>
                    <p><FaWhatsapp className={styles.redes1} />(22) 997225723</p>
                    <p><FaEnvelope className={styles.redes1} />casualhomeoficial@gmail.com</p>
                    <a href="https://www.instagram.com/casual_home_loja/"><FaInstagram className={styles.redes2} /></a>
                    <a href="https://www.facebook.com/CasualHomeloja/"><FaFacebook className={styles.redes2} /></a>
                </div>
                <div className={styles.contato2}>
                    <form action="enviar_email.php" method="post">
                        <div className={styles.contato3}>
                            <label for="nome">Nome</label>
                            <input type="text" placeholder="Nome" name="nome" id="nome" required />
                        </div>
                        <div className={styles.contato3} >
                            <label for="telefone">Telefone</label>
                            <input type="tel" placeholder="Telefone" name="telefone" id="telefone" required />
                        </div>
                        <div className={styles.contato3}>
                            <label for="motivo-contato">Assunto</label>
                            <select id="motivo-contato" name="motivo-contato">
                                <option value="Trocas">Trocas</option>
                                <option value="Devoluções">Devoluções</option>
                                <option value="Problemas com a compra">Problemas com a compra</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>
                        <div className={styles.contato3}>
                            <label for="mensagem">Mensagem</label>
                            <textarea placeholder="Mensagem" name="mensagem" id="mensagem"></textarea>
                        </div>
                        <div className={styles.contato3}>
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contato