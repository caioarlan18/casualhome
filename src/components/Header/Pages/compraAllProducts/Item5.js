import PaginaCompra from "../pagina do produto/PaginaCompra"
import tampasSilicone from '../../../../image/foto tampas de silicone.webp'
import secundaria from '../../../../image/tampa sec.webp'
import terciaria from '../../../../image/terc tampa.webp'
export function Item5() {
    return (
        <PaginaCompra
            imagemMain={tampasSilicone}
            imagem2={secundaria}
            imagem3={terciaria}
            titulo={'Tampas de silicone ajustáveis (6 peças)'}
            custoR={'90,87'}
            custoP={'69,90'}
            nameVariation={'Cor'}
            variation={'retangular - 6 pcs'}
            variation2={'circular - 6pcs'}
            desc={`Características:

            1. Saudável e higiênico: material de gel de sílica de qualidade alimentar, saudável e inofensivo, baixo carbono e reciclável
            2. Design ergonômico: Existem cantos convexos ao redor da capa fresca, que é conveniente de pegar e usar.
            3. À prova de vazamento e sem manchas de odores: Tem uma propriedade de vedação muito boa. Pode evitar vazamento de líquido e contaminação de odores.
            4. antiderrapante: design antiderrapante do anel interno, bom desempenho de absorção, bom efeito de manutenção de frescor.
            5. Habdle incluído: a alça facilita o transporte e o uso.
            
            Descrições:
            
            1. O design à prova de vazamentos e a boa adsorção evitam o vazamento de ar ou líquido. Mesmo quando o recipiente fechado estiver de cabeça para baixo, a comida dentro não cairá.
            2. Tampas de armazenamento de alimentos reutilizáveis ​​são super flexíveis, duráveis ​​e anti-esquis.
            
            Especificações:
            
            Material: gel de sílica
            Cor branca
            
            Pontas:
            
            1. As cores podem diferir ligeiramente, pois as exibições podem variar em diferentes monitores.
            2. Pequenas diferenças nas especificações podem aparecer devido a diferentes formas de medição manual.`}
        />
    )
}