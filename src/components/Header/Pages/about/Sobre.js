import Header from "../../Header/Header"
import Footer from "../../rodape/Footer"
import Navigation from "../../Navigation/Navigation"
import stylesMobile from './Sobre.mobile.module.css'
import stylesDesktop from './Sobre.desktop.module.css'
import mulherAbout from '../../../../image/mulherAbout.webp'
function Sobre() {
    return (
        <div>
            <Header />
            <Navigation navTitle='Sobre nós' />
            <div className={`${stylesMobile.about} ${stylesDesktop.about}`}>
                {/* mobile */}
                <div className={`${stylesMobile.about1} ${stylesDesktop.about1}`}>
                    <h1>Sobre nós</h1>
                    <h2>Conheça um pouco sobre a Casual Home</h2>
                    <p>
                        A Casual Home é uma loja especializada em oferecer produtos práticos e funcionais para facilitar o dia a dia. Nossa missão é proporcionar soluções de qualidade com um toque de estilo. Valorizamos o atendimento ao cliente e buscamos constantemente novidades para oferecer uma seleção atualizada de utilidades domésticas. Nossa meta é ajudar a tornar seu lar organizado e funcional, proporcionando uma experiência única e satisfatória. Confira nosso catálogo e descubra a praticidade com estilo que a Casual Home oferece. Obrigado por escolher a Casual Home para suas necessidades do dia a dia.
                    </p>
                    <img src={mulherAbout} alt="foto de uma mulher" />
                </div>

                {/* desktop */}
                <div className={`${stylesMobile.about2} ${stylesDesktop.about2}`}>
                    <h1>Sobre nós</h1>
                    <h2>Conheça um pouco sobre a Casual Home</h2>
                    <p>
                        A Casual Home é uma loja especializada em oferecer produtos práticos e funcionais para facilitar o dia a dia. Nossa missão é proporcionar soluções de qualidade com um toque de estilo. Valorizamos o atendimento ao cliente e buscamos constantemente novidades para oferecer uma seleção atualizada de utilidades domésticas. Nossa meta é ajudar a tornar seu lar organizado e funcional, proporcionando uma experiência única e satisfatória. Confira nosso catálogo e descubra a praticidade com estilo que a Casual Home oferece. Obrigado por escolher a Casual Home para suas necessidades do dia a dia.
                    </p>
                </div>
                <div className={`${stylesMobile.about2} ${stylesDesktop.about2}`}>
                    <img src={mulherAbout} alt="foto de uma mulher" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Sobre