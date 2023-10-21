import styles from './Login.module.css'
import Header from '../../Header/Header'
import Navigation from '../../Navigation/Navigation'
import Footer from '../../rodape/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router'
export function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()
    function login() {
        if (email === '' || senha === '') {
            alert('Existem campos vazios')
        }
        else if (email === 'casualhomeoficial@gmail.com' && senha === 'casualhomeoficial') {
            navigate('/painel')
        } else {
            alert('Email ou senha errados')
        }
    }
    return (
        <div>
            <Header />
            <Navigation navTitle={'Login'} />
            <div className={styles.hd}>
                <div className={styles.hdd}>
                    <div className={styles.hd1}>
                        <h1>Bem vindo</h1>

                    </div>
                    <div className={styles.hd15}>
                        <div className={styles.hdd2}>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <div class={styles.hd3}>
                            <input type="submit" value="Logar" onClick={login} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}