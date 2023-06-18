import PaginaCompra from "../pagina do produto/PaginaCompra"
import seladoraVacuo from '../../../../image/foto seladora vacuo.webp'
import secundaria from '../../../../image/seladora sec.webp'
import terciaria from '../../../../image/seladora terc.webp'
export function Item6() {
    return (
        <PaginaCompra
            imagemMain={seladoraVacuo}
            imagem2={secundaria}
            imagem3={terciaria}
            titulo={'Seladora à vácuo portátil'}
            custoR={Number(297.90)}
            custoP={Number(229.90)}
            nameVariation={'Cor'}
            variation={'Branco'}
            variation2={'Preto'}
            desc={`Especificação:
            Esta máquina de dois seladores a vácuo tem aparência diferente, mas na mesma função.
            
            Tensão: 220V
            Largura do selador: Max 29,5 cm
            Kpa:-60kPa
            Potência: 80-100W
            Capacidade de produção: 3-8 (vezes/min)
            Largura de vedação: 2,53 mm
            
            O pacote inclui:
            
            1 * máquina
            1*10 sacos
            1 * manual
            
            PERGUNTAS FREQUENTES:
            Q1: Por que derrete o saco e fecha mal?
            A1:Cada vez que você usar a máquina, certifique-se de que o fio de aquecimento seja resfriado para um bom efeito. O intervalo recomendado é de 40 segundos
            
            A máquina é adequada para produtos secos. Não pode aspirar líquidos e não pode aspirar com muitos produtos em pó de água e óleo. Sofrer umidade causará quebra imediatamente.
            Sólidos congelados líquidos podem ser aspirados, e um saco especial texturizado de um lado deve ser usado. Sacos lisos e transparentes comuns não podem ser aspirados, mas apenas selados. Papel kraft, sacos yin e yang, folha de alumínio e sacos de tecido não podem ser selados e os sacos dobrados não podem ser aspirados`}
        />
    )
}