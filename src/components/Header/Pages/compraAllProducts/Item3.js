import PaginaCompra from "../pagina do produto/PaginaCompra"
import lavadorDeCopos from '../../../../image/foto lavador de copo.webp'
import secundaria from '../../../../image/lavador secundaria.webp'
import terciaria from '../../../../image/lavador terciaria.webp'
export function Item3() {
    return (
        <PaginaCompra
            imagemMain={lavadorDeCopos}
            imagem2={secundaria}
            imagem3={terciaria}
            titulo={'Lavador automático de copo para pia'}
            custoR={Number(149.90)}
            custoP={Number(99.90)}
            nameVariation={'Tipo'}
            variation={'1 PC ENXAGUADOR'}
            variation2={'1 CONJUNTO'}
            desc={`Lavadora de copos automática torneira de vidro enxaguador de pia de cozinha barra de vidro lavador de café jarro de café copo de lavagem para ferramentas de barra de cozinha acessórios

            Descrição:
            
            Nova torneira automática copo arruela máquina de lavar copo substituição barra de vidro enxaguador café jarro lavar copo ferramenta para cozinha hotel casa
            
            Nome do item: arruela de copo
            
            Material: ABS
            
            Tamanho: 14,2×13,2×2,2cm
            
            Cor preta
            
            Peso: 170g
            
            Quantidade: 1pcs
            
            Especificações:
            
            Características:
            
            100% novo e de alta qualidade.
            
            Material de alta qualidade: Feito de material plástico de alta qualidade, resistente e durável.
            
            Limpeza eficiente: jatos de água potentes enxaguam completamente os resíduos em segundos.
            
            Fácil de usar: coloque a boca do copo para baixo, pressione levemente o fundo do copo, ele irá borrifar água automaticamente para limpar, depois que o copo for limpo, remova o copo e pare de borrifar água.
            
            Tipos de copos aplicáveis: copos de vinho, copos de cerveja, xícaras de café, xícaras de chá, mamadeiras, etc.
            
            Ampla gama de aplicações: adequado para casa, cozinha, bar, restaurante, cafeteria, chá com leite, etc.
            
            Incluído no Pacote:
            
            Tipo: 1 PC ENXAGUADOR: 1 x arruela de copo
            
            Tipo: 1 CONJUNTO: 1 x arruela de copo 1 x mangueira de 80 cm
            
            Tipo: 1 CONJUNTO + CONECTOR: 1x arruela de copo 1x mangueira de 80cm + conector 1/2 tê de aço inoxidável (diâmetro 20mm)`}
        />
    )
}