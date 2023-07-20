import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import styles from './Contato.module.css'
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser'
function Contato() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [menssagem, setMenssagem] = useState('')
    const [email, setEmail] = useState('')


    function send(e) {
        e.preventDefault()
        if (nome && telefone && menssagem && email !== '') {
            const templateParams = {
                from_name: nome,
                message: menssagem,
                telefone: telefone,
                email: email,
            }
            emailjs.send('service_ftnxx52', 'template_5qloiva', templateParams, 'dKIo6Og8ZaQj5mv1d')
                .then((response) => {
                    console.log('email enviado', response.status, response.text)
                    setMenssagem('')
                    alert('E-mail enviado com sucesso! Iremos responder o mais rápido possível.')
                }, (err) => {
                    console.log('erro', err)
                })
        } else {
            alert('Preencha todos os campos')
        }
        localStorage.setItem('nome', nome)
        localStorage.setItem('telefone', telefone)
        localStorage.setItem('email', email)
    }
    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nome')
        const telefoneSalvo = localStorage.getItem('telefone')
        const emailSalvo = localStorage.getItem('email')
        if (nomeSalvo) setNome(nomeSalvo)
        if (telefoneSalvo) setTelefone(telefoneSalvo)
        if (emailSalvo) setEmail(emailSalvo)
    }, [])
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

                    <div className={styles.contato3}>
                        <p>Nome</p>
                        <input placeholder="Nome" type="text" required value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className={styles.contato3} >
                        <p >Telefone</p>
                        <input placeholder="Telefone" type="number" required value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div className={styles.contato3} >
                        <p>Email</p>
                        <input required value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>

                    <div className={styles.contato3}>
                        <p >Mensagem</p>
                        <input placeholder="Mensagem" type="text" required value={menssagem} onChange={(e) => setMenssagem(e.target.value)}></input>
                    </div>
                    <div className={styles.contato3}>
                        <button onClick={send}>Enviar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contato