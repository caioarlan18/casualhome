import PaginaCompra from "../pagina do produto/PaginaCompra"
import tabuaDobravel from '../../../../image/tabuadobravel.webp'
import secundaria from '../../../../image/secundariaTabuaDobravel.webp'
import terciaria from '../../../../image/TerciariaTabuaDobravel.webp'
export function Item8() {
    return (
        <PaginaCompra
            imagemMain={tabuaDobravel}
            imagem2={secundaria}
            imagem3={terciaria}
            titulo={'Tábua Gourmet de Corte Dobrável'}
            custoR={'51,87'}
            custoP={'39,90'}
            nameVariation={'Cor'}
            variation={'Verde'}
            variation2={'Branco'}
            desc={`ábua Gourmet de Corte Dobrável, ótima qualidade e preço justo para melhor atendê-los! E aí, vamos decorar sua casa?	
														
            * Aberta serve para fatiar os alimentos, fechada serve para colocar tudo fatiado na sua receita.
                                                            
            Medidas:  
            - Altura: 34cm
            - Largura: 22cm 
            
            - Material: Plástico.
                                
            Material de ótima qualidade, e o melhor de tudo muito lindo.`}
        />
    )
}