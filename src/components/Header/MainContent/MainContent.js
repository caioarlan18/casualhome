import stylesMobile from './MainContent.mobile.module.css'
import stylesDesktop from './MainContent.desktop.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../../image/Banner1.jpeg'
import Banner2 from '../../../image/Banner2.jpeg'
import Banner1D from '../../../image/Banner1D.jpeg'
import Banner2D from '../../../image/Banner2D.jpeg'
function MainContent() {
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
        <div>
            <div className={stylesMobile.sliderMobile}>
                <Slider {...settings} >
                    {images.map((image) => (
                        <div key={image.id}>
                            <img src={image.src} alt={image.alt} className={stylesMobile.banner} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={stylesDesktop.sliderDesktop}>
                <Slider {...settings} >
                    {images2.map((image) => (
                        <div key={image.id}>
                            <img src={image.src} alt={image.alt} className={stylesDesktop.banner2} />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}
export default MainContent