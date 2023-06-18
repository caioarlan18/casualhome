import PaginaCompra from "../pagina do produto/PaginaCompra"
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
import secundaria from '../../../../image/eseletrica secundaria.webp'
import terciaria from '../../../../image/eseletrica terciaria.webp'
export function Item4() {
    return (
        <PaginaCompra
            imagemMain={escovaEletrica}
            imagem2={secundaria}
            imagem3={terciaria}
            titulo={'Escova elétrica rotatória para limpeza'}
            custoR={Number(193.97)}
            custoP={Number(149.90)}
            nameVariation={'Tipo'}
            variation={'Pilha'}
            variation2={'Bateria'}
            desc={`Bola de lavanderia flutuante de pele de animal de estimação fiapos de cabelo, bola de limpeza de roupas, remoção de pêlos, bolsa de malha para máquina de lavar

            Características:
            
            1. Capacidade de limpeza: a bolsa de malha de veludo de algodão flutuante para máquina de lavar pode ser colocada em sabão em pó, com a rotação contínua da água, pode dissolver completamente o sabão em pó, produzir espuma densa, tornar a limpeza mais limpa.
            
            2. Fácil de usar: coloque a bolsa de malha de flanela de algodão flutuante na máquina de lavar, que é fácil de limpar e flutua sobre as roupas sem danificá-las.
            
            3. Aplicável: É adequado para pequenas máquinas de lavar portáteis. Você encontra problemas de fiapos de algodão.
            
            4. Pode ser reutilizado: bolsa de malha cônica de alta qualidade, malha fina, material de poliéster, durável. Deixe detritos, detritos e cabelos não terem para onde escapar.
            
            5. Adequado para quem tem animais de estimação fofos como cães ou gatos.
            
            Especificações:
            
            Material: Poliéster + Plástico PP
            
            Tamanho: 8 cm * 15 cm (como a imagem)
            
            É fácil de limpar e flutua em cima da máquina de lavar.
            
            Mais adequado para pequenas máquinas de lavar portáteis com problemas de fiapos. Se houver muitas roupas ou uma máquina de lavar grande, se você tiver muitas roupas ou uma máquina de lavar grande, precisará de pelo menos 2-3 filtros de filtro.
            
            O pacote inclui:
            
            1 x sacos de malha de fiapos`}
        />
    )
}