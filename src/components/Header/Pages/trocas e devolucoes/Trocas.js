import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import styles from './Trocas.module.css'
function Trocas() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Trocas e devoluções' />
            <div className={styles.trocas}>
                <h1>Política de devoulção e troca</h1>
                <p>
                    O prazo de entrega estimado é de 10-19 dias. TODOS OS PRAZOS
                    PARA IMPORTAÇÕES estão sujeitos a extensões ou a diminuições, sendo esses prazos informados apenas estimativas, com base na maioria de pedidos entregue, ou seja, o prazo pode
                    demorar mais como também pode chegar mais rápido.
                    MUITO IMPORTANTE: Os produtos podem levar entre 1-5 DIAS ÚTEIS após a confirmação de pagamento do pedido, para serem
                    DESPACHADOS para IMPORTAÇÃO.
                    Quando ocorrem atrasos, normalmente se devem a
                    lentidão do processo burocrático e de fiscalização da
                    Alfândega Brasileira. O prazo de recebimento de sua encomenda
                    está sujeito a eventuais atrasos em função de condições climáticas, tráfego de aeroportos, greve dos Correios e outros
                    motivos de força maior.
                    ENDEREÇO: Para que a entrega de sua encomenda ocorra no
                    menor tempo possivel e sem imprevistos, é necessário ter ATENÇÃO ao preencher o endereço de entrega, pois não nos
                    responsabilizamos por pedidos não entregues devido ao preenchimento incorreto on incompleto do endereço de entrega
                    no ato do
                    cadastramento. Além disso, o endereçamento incorreto pode
                    acarretar na devolução do objeto ao remetente. Sendo assim necessario o reenvio da mercadoria que deverá ser custeado pelo
                    cliente, visto que, o mesmo cometeu o erro no endereçamento.
                    É muito importante ter pessoas aptas a receberem a encomenda em sua casa, pois caso não haja ninguém no endereço informado,
                    após 3 (Três) tentativas de entrega sem sucesso, os Correios devolverão sua encomenda ao pais de origem. Neste caso, o reenvio do produto terá um custo adicional de frete que deverá
                    ser pago pelo cliente.
                    Caso não seja possivel ter alguém em casa para receber a encomenda, é conveniente que seja informado seu endereço de trabalho como endereço de entrega O cliente ao realizar um
                    compra na Loja
                    Casual Home deve estar ciente que pode receber sua encomenda tanto antes quanto após os prazos informados, devido ao
                    processo de importação, perfeitamente normal que alguns pedidos tenham os códigos de rastreamento com algum tipo de problema, se você comprou, deve aguardar o prazo de envio do código de rastreamento (5 dias), após o recebimento você deve aguardar até 72hrs para a veiculação do código no fluxo postal, após esse prazo, caso seu código ainda não esteja funcionado,
                    entre em contato com nosso time de suporte para abrir um chamado, esse chamado tem um prazo de resposta entre 1-3 dias úteis após a data da abertura e confirmação da abertura. sendo esse um procedimento interno. o cliente receberá um protocolo da abertura do chamado, esse protocolo poderá ser consultado
                    com nosso time de suporte durante todo o processo
                    Em alguns casos o problema não será solucionado entre 1-3 dias úteis, sendo o cliente informado a todo momento sobre os prazos
                    excedentes.
                    O Prazo MÁXIMO para entrega é de 120 dias, após esse prazo as encomendas serão consideradas perdidas e o cliente terá a opção de um novo envio do produto, ou então a devolução do dinheiro. Infelizmente estamos sujeitos a esse tipo de problema, tendo em vista que nossa empresa não efetua a entrega, e sim contratamos
                    uma empresa terceirizada. Em hipótese nenhuma o
                    cliente terá prejuizo a comprar conosco. Caso sua encomenda
                    não chegue no prazo de 120 dias (4 meses) após a data de postagem, você deve entrar em contado com o SAC da loja, para que possamos abrir um sinistro junto nos Correios para que seja iniciada uma investigação de possibilidade de extravio de seu
                    pacote.
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default Trocas