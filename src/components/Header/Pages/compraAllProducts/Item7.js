import PaginaCompra from "../pagina do produto/PaginaCompra"
import escovaMagica from '../../../../image/foto escova magica.webp'
import secundaria from '../../../../image/magica sec.webp'
import terciaria from '../../../../image/magica terc.webp'
export function Item7() {
    return (
        <PaginaCompra
            imagemMain={escovaMagica}
            imagem2={secundaria}
            imagem3={terciaria}
            titulo={'Removedor de pelo de roupas para máquina de lavar'}
            custoR={'77,87'}
            custoP={'59,90'}
            nameVariation={'Cor'}
            variation={'Cinza'}
            variation2={'Azul'}
            desc={`A ESCOVA PARA GATO DA FERRAMENTA DE PREPARAÇÃO PERFEITA: Remove suavemente subpêlo, pêlos soltos, nós, flocos e sujeira presa. é uma boa escolha para cães e gatos com pelagem mais longa e pele não sensível. que não apenas mantêm seus animais de estimação limpos, mas também fornecem um ambiente limpo e higiênico em casa.

            FÁCIL DE LIMPAR: botão de limpeza com um clique. Tudo o que você precisa fazer é pressionar o botão de limpeza para retrair as cerdas e remover os pelos. e os pelos serão removidos da escova com muita facilidade. E nossa escova para animais de estimação é lavável, o que pode manter a escova higiênica.
            
            DESENVOLVIDO PARA MELHORES ESCOVAS DE GATO: Um aperto ergonômico antiderrapante feito de silicone de fácil controle. As escovas de derramamento de contas redondas podem massagear cães de gatos e evitar que a pele do seu animal de estimação arranhe. É uma escova de estimação OBRIGATÓRIA e ótima escolha para o proprietário de animais de estimação! PERFEITO para cães e gatos!
            
            EXPERIÊNCIA DE ESCOVAÇÃO AGRADÁVEL: A higiene do animal de estimação pode fortalecer a comunicação e aprofundar o vínculo entre você e seus animais de estimação.`}
        />
    )
}