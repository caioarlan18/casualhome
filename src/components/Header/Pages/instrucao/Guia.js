import Header from "../../Header/Header"
import Navigation from "../../Navigation/Navigation"
import Footer from "../../rodape/Footer"
import styles from './Guia.module.css'
function Guia() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Intruções de compra' />
            <div className={styles.guia}>
                <h1>Instruções gerais</h1>
                <p>
                    1. Navegação: Acesse o menu principal do site e encontre a opção “Loja” ou “Produtos”. Clique nessa opção para visualizar a lista de produtos disponíveis.
                    <br /><br />
                    2. Pesquisa e filtragem: Utilize a barra de pesquisa disponíveis para encontrar o produto desejado.
                    <br /><br />
                    3. Detalhes do produto: Clique no produto de interesse para acessar sua página. Lá, você encontrará informações detalhadas, como descrição, especificações técnicas, imagens e opções de cores/tamanhos, se aplicável.
                    <br /><br />
                    4. Adicionar ao carrinho: Selecione a quantidade desejada e clique no botão “Adicionar ao carrinho”. Isso adicionará o produto ao seu carrinho de compras.
                    <br /><br />
                    5. Revisar o carrinho: Após adicionar todos os produtos desejados, clique no ícone do carrinho, geralmente localizado no canto superior direito do site. Você será redirecionado para a página do carrinho, onde poderá revisar os itens, ajustar as quantidades, aplicar cupons de desconto, se houver, e calcular o frete, se necessário.
                    <br /><br />
                    6. Finalizar a compra: Ao revisar o carrinho, clique no botão “Finalizar compra” ou “Prosseguir para o pagamento”. Você será direcionado para a página de pagamento, onde deverá preencher suas informações de contato, endereço de entrega e opção de pagamento.
                    <br /><br />
                    7. Confirmação do pedido: Após fornecer todas as informações necessárias, revise cuidadosamente os detalhes do pedido. Se estiver tudo correto, clique em “Confirmar pedido” ou “Finalizar compra” para concluir a transação.
                    <br /><br />
                    8. Acompanhamento do pedido: Após a conclusão do pedido, você receberá um e-mail de confirmação com os detalhes do pedido. Você poderá acompanhar o status do seu pedido através do site ou entrando em contato com o suporte ao cliente, se necessário.
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default Guia