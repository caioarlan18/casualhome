import styles from './Checkout.module.css'
import Header from '../../Header/Header'
import Navigation from '../../Navigation/Navigation'
import Footer from '../../rodape/Footer'
import { useState, useEffect } from 'react'
export function Checkout() {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const [cartItems, setCartItems] = useState([]);
    // Função para recuperar os dados do carrinho ao carregar a página
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const calculateTotal = () => {
            const sum = cartItems.reduce((accumulator, item) => {
                return accumulator + parseFloat(item.custoP.replace('R$ ', ''));
            }, 0);
            setTotal(sum);
        };

        calculateTotal();
    }, [cartItems]);

    function toBuy() {
        if (nome && cpf && cep && endereco && numero && bairro && cidade && estado !== '') {
            alert('Atenção! Para reforçar a sua segurança, estamos realizando uma manutenção em nosso sistema de pagamentos. Nesse período, os pagamentos estão sendo processados por meio do WhatsApp. Ao clicar em OK, você será redirecionado automaticamente para o nosso número.')
            let menssagem = "*Desejo finalizar minha compra. Estes são os itens do meu carrinho:* %0A %0A";

            cartItems.map((item, index) => (
                menssagem += `${index + 1}- ${item.titulo} (Tipo: ${item.selectedValue}) - R$ ${item.custoP}%0A %0A`
            ));

            menssagem += `*Total*: R$ ${total.toFixed(2)}%0A %0A *Meus Dados* %0A %0A Nome: ${nome} %0A %0A CPF: ${cpf} %0A %0A CEP: ${cep} %0A %0A Endereço: ${endereco} %0A %0A Número: ${numero} %0A %0A Complemento: ${complemento} %0A %0A Bairro: ${bairro} %0A %0A Cidade: ${cidade} %0A %0A Estado: ${estado}`
            window.location.href = `https://wa.me/5522999677704?text=${menssagem}`;

        } else {
            alert('Existem campos vazios')
        }

        localStorage.setItem('nome', nome);
        localStorage.setItem('cpf', cpf);
        localStorage.setItem('cep', cep);
        localStorage.setItem('endereco', endereco);
        localStorage.setItem('numero', numero);
        localStorage.setItem('complemento', complemento);
        localStorage.setItem('bairro', bairro);
        localStorage.setItem('cidade', cidade);
        localStorage.setItem('estado', estado);
    }
    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nome');
        const cpfSalvo = localStorage.getItem('cpf');
        const cepSalvo = localStorage.getItem('cep');
        const enderecoSalvo = localStorage.getItem('endereco');
        const numeroSalvo = localStorage.getItem('numero');
        const complementoSalvo = localStorage.getItem('complemento');
        const bairroSalvo = localStorage.getItem('bairro');
        const cidadeSalva = localStorage.getItem('cidade');
        const estadoSalvo = localStorage.getItem('estado');

        if (nomeSalvo) setNome(nomeSalvo);
        if (cpfSalvo) setCpf(cpfSalvo);
        if (cepSalvo) setCep(cepSalvo);
        if (enderecoSalvo) setEndereco(enderecoSalvo);
        if (numeroSalvo) setNumero(numeroSalvo);
        if (complementoSalvo) setNumero(complementoSalvo)
        if (bairroSalvo) setBairro(bairroSalvo);
        if (cidadeSalva) setCidade(cidadeSalva);
        if (estadoSalvo) setEstado(estadoSalvo);
    }, []);

    return (
        <div>
            <Header />
            <Navigation navTitle={'Checkout'} />
            <div className={styles.checkout}>
                <div className={styles.checkout1}>
                    <h1>dados para entrega</h1>
                </div>
                <div className={styles.checkout1}>
                    <p>Nome</p>
                    <input type="text" required value={nome} onChange={(e) => { setNome(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>CPF</p>
                    <input type="number" required value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>CEP</p>
                    <input type="number" required value={cep} onChange={(e) => { setCep(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>Endereço</p>
                    <input type="text" required value={endereco} onChange={(e) => { setEndereco(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>Número</p>
                    <input type="number" required value={numero} onChange={(e) => { setNumero(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>Complemento (opcional)</p>
                    <input type="text" value={complemento} onChange={(e) => { setComplemento(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>Bairro</p>
                    <input type="text" required value={bairro} onChange={(e) => { setBairro(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>Cidade</p>
                    <input type="text" required value={cidade} onChange={(e) => { setCidade(e.target.value) }} />
                </div>
                <div className={styles.checkout1}>
                    <p>Estado</p>
                    <input type="text" value={estado} onChange={(e) => { setEstado(e.target.value) }} required />
                </div>
                <div className={styles.checkout1}>
                    <input type="submit" value={'Comprar'} onClick={toBuy} />
                </div>
            </div>
            <Footer />
        </div>

    )
}