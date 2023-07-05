import stylesMobile from './MainContent.mobile.module.css'
import stylesDesktop from './MainContent.desktop.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../../image/Banner30Mobile.jpg'
import Banner2 from '../../../image/bannerFreteMobile.jpg'
import Banner1D from '../../../image/banner main.jpeg'
import Banner2D from '../../../image/BannerFreteDesktop.jpg'
import petIcon from '../../../image/icone-de-pet.png'
import homeIcon from '../../../image/icone-de-casa-removebg-preview.png'
import { FaTruck } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { FaRegListAlt } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import ItensCozinha from '../../../image/icone-de-categoria-cozinha.svg'
import banheiro from '../../../image/icone privada.png'
import { useContext } from "react"
import { ArrayContext } from '../Pages/arrayproducts/ArrayProvider';
function MainContent() {
    const produtos = useContext(ArrayContext);

    const handleClick = () => {
        // Rolar para o topo imediatamente
        scroll.scrollToTop({ duration: 0 });
    };
    const images = [
        { id: 1, src: Banner1, alt: 'Image 1' },
        { id: 2, src: Banner2, alt: 'Image 2' },
    ];
    const images2 = [
        { id: 1, src: Banner1D, alt: 'Image 1' },
        { id: 2, src: Banner2D, alt: 'Image 2' },
    ];
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };



    return (
        <div >
            {/* slider Mobile */}
            <div className={`${stylesMobile.sliderM} ${stylesDesktop.sliderM}`}>
                <Slider {...settings} >
                    {images.map((image) => (
                        <div key={image.id}>
                            <Link to='/todosprodutos'><img src={image.src} alt={image.alt} className={stylesMobile.banner} /></Link>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* slider desktop */}
            <div className={`${stylesMobile.sliderD} ${stylesDesktop.sliderD}`}>
                <Slider {...settings} >
                    {images2.map((image) => (
                        <div key={image.id}>
                            <Link to='/todosprodutos'><img src={image.src} alt={image.alt} className={stylesDesktop.banner2} /></Link>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* seção de produtos */}
            <div className={`${stylesMobile.secG} ${stylesDesktop.secG}`}>
                <div className={`${stylesMobile.title} ${stylesDesktop.title}`}>
                    <h1>Produtos em destaque</h1>
                </div>
                <div className={`${stylesMobile.productSections} ${stylesDesktop.productSections}`}>
                    {produtos[0]}
                    {produtos[1]}
                    {produtos[2]}
                    {produtos[3]}
                </div>
            </div>

            <div className={`${stylesMobile.secG} ${stylesDesktop.secG}`}>
                <div className={`${stylesMobile.title} ${stylesDesktop.title}`}>
                    <h1>Lançados recentemente</h1>
                </div>
                <div className={`${stylesMobile.productSections} ${stylesDesktop.productSections}`}>
                    {produtos[produtos.length - 1]}
                    {produtos[produtos.length - 2]}
                    {produtos[produtos.length - 3]}
                    {produtos[produtos.length - 4]}

                </div>

            </div>

            {/* seção de categoria */}
            <div className={`${stylesMobile.secG} ${stylesDesktop.secG}`} >
                <div className={`${stylesMobile.title} ${stylesDesktop.title}`}>
                    <h1>Categorias</h1>
                </div>
                <section className={`${stylesMobile.categoriesSection} ${stylesDesktop.categoriesSection}`} >
                    <Link to='/itenscasa' onClick={handleClick}> <div className={`${stylesMobile.categoriesSection1} ${stylesDesktop.categoriesSection1}`}>
                        <img src={homeIcon} alt="icone de casa" />
                        <h1>Itens para casa</h1>
                    </div>
                    </Link>
                    <Link to='/itenscozinha' onClick={handleClick}> <div className={`${stylesMobile.categoriesSection1} ${stylesDesktop.categoriesSection1}`}>
                        <img src={ItensCozinha} alt="icone de panela" />
                        <h1>Itens para cozinha</h1>
                    </div>
                    </Link>
                    <Link to='/itensbanheiro' onClick={handleClick}> <div className={`${stylesMobile.categoriesSection1} ${stylesDesktop.categoriesSection1}`}>
                        <img src={banheiro} alt="icone de banheiro" />
                        <h1>Itens para banheiro</h1>
                    </div>
                    </Link>
                    <Link to='/itensanimais' onClick={handleClick}>
                        <div className={`${stylesMobile.categoriesSection1} ${stylesDesktop.categoriesSection1}`}>
                            <img src={petIcon} alt="icone de pet" />
                            <h1>Itens para animais</h1>
                        </div>
                    </Link>
                </section>
            </div>

            {/* informações */}

            <div className={`${stylesMobile.infoSection} ${stylesDesktop.infoSection}`}>
                <section className={`${stylesMobile.info} ${stylesDesktop.info}`}>
                    <div className={`${stylesMobile.info1} ${stylesDesktop.info1}`}>
                        <FaTruck />
                        <h1>Frete rápido</h1>
                        <h2>Para todo o Brasil</h2>
                    </div>
                    <div className={`${stylesMobile.info1} ${stylesDesktop.info1}`}>
                        <FaCreditCard />
                        <h1>Parcele sua compra</h1>
                        <h2>em até 12x</h2>
                    </div>
                    <div className={`${stylesMobile.info1} ${stylesDesktop.info1}`}>
                        <FaShieldAlt />
                        <h1>Compra segura</h1>
                        <h2>seus dados protegidos</h2>
                    </div>
                    <div className={`${stylesMobile.info1} ${stylesDesktop.info1}`}>
                        <FaRegListAlt />
                        <h1>Pedido monitorado</h1>
                        <h2>código de rastreamento</h2>
                    </div>
                </section>
            </div>



        </div>
    )
}
export default MainContent