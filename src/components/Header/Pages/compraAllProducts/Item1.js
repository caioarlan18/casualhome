import PaginaCompra from "../pagina do produto/PaginaCompra"
import impressoraPortatil from '../../../../image/foto impressora portatil.webp'
import secundaria from '../../../../image/pocket-green.webp'
import terciaria from '../../../../image/pocket-white.webp'
export function Item1() {
    return (
        <PaginaCompra
            imagemMain={impressoraPortatil}
            imagem2={secundaria}
            imagem3={terciaria}
            titulo={'Impressora de etiquetas térmica portátil'}
            custoR={Number(233.87)}
            custoP={Number(179.99)}
            nameVariation={'Cor'}
            variation={'Verde'}
            variation2={'Branco'}
            desc={`A impressora de etiquetas térmica é uma impressora térmica compacta que elimina a necessidade de tinta, permitindo imprimir
            fotos e documentos em trânsito. Seu tamanho leve e pequeno o torna perfeito para viagens, 
            viagens de negócios ou para capturar memórias instantaneamente.Você pode conectar facilmente seu smartphone, 
            tablet ou laptop via Bluetooth e imprimir suas fotos favoritas ou documentos essenciais em apenas alguns segundos. 
            É compatível com os sistemas operacionais iOS e Android, e você pode baixar o aplicativo complementar 
            para gerenciar suas necessidades de impressão.
            Com tecnologia de impressão térmica avançada, esta Mini Impressora de Bolso oferece impressões de alta qualidade 
            com detalhes nítidos. Ele também suporta papel adesivo, permitindo que você crie adesivos personalizados, 
            perfeitos para álbuns de recortes, diários ou para decorar seu planejador.
            Em resumo, a impressora portátil Pocket Mini é a escolha ideal para quem precisa imprimir em trânsito. 
            É fácil de usar, produz impressões de alta qualidade e seus recursos versáteis o tornam um dispositivo indispensável 
            para uso pessoal e profissional.`}
        />
    )
}