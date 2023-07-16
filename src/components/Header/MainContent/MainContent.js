import stylesMobile from './MainContent.mobile.module.css'
import stylesDesktop from './MainContent.desktop.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../../image/Banner30Mobile.webp'
import Banner2 from '../../../image/bannerFreteMobile.webp'
import Banner1D from '../../../image/Banner1D.webp'
import Banner2D from '../../../image/BannerFreteDesktop.webp'
import petIcon from '../../../image/categoria_animal-removebg-preview.webp'
import homeIcon from '../../../image/casa_categoria-removebg-preview.webp'
import { FaTruck } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { FaRegListAlt } from 'react-icons/fa';
import ItensCozinha from '../../../image/categoria_cozinha_melhor-removebg-preview.webp'
import banheiro from '../../../image/categoria_banheiro_melhor-removebg-preview.webp'
import { useContext } from "react"
import { ArrayContext } from '../Pages/arrayproducts/ArrayProvider';
import { Categorias } from '../categorias/Categorias';
function MainContent() {
    const produtos = useContext(ArrayContext);


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


    const categoria = [
        <Categorias titulo={'casa'} imagem={homeIcon} path={'/itenscasa'} />,
        <Categorias titulo={'cozinha'} imagem={ItensCozinha} path={'/itenscozinha'} />,
        <Categorias titulo={'banheiro'} imagem={banheiro} path={'/itensbanheiro'} />,
        <Categorias titulo={'animais'} imagem={petIcon} path={'/itensanimais'} />,
    ]

    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        autoplay: false,
        swipeToSlide: true,
        touchThreshold: 200,
        cssEase: 'linear',



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3.5,
                }
            }
        ]
    };

    const settings3 = {
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        touchThreshold: 10,
        cssEase: 'ease'

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

            {/* seção de categoria mobile */}
            <div className={`${stylesMobile.sec} ${stylesDesktop.sec}`} >

                <Slider {...settings2} >
                    {categoria.map((categorias, index) => (
                        <div key={index}  >
                            {categorias}
                        </div>
                    ))}
                </Slider>


            </div>

            {/* seção de categoria desktop */}
            <div className={`${stylesMobile.sec2} ${stylesDesktop.sec2}`} >

                <Slider {...settings3} >
                    {categoria.map((categorias, index) => (
                        <div key={index} >
                            {categorias}
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