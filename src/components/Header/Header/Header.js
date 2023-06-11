import stylesMobile from './Header.mobile.module.css'
import stylesDesktop from './Header.desktop.module.css'
import { FaBars } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import Logo from '../../../image/WhatsApp_Image_2023-06-11_at_00.00.07-removebg-preview.png'
function Header() {
    return (
        <div>
            <div className={`${stylesMobile.hd} ${stylesDesktop.hd}`}>
                <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                    <FaBars />
                </div>
                <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                    <img src={Logo} alt="logo do site" />
                </div>
                <div className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>
                    <IoCartOutline />
                </div>
            </div>
            <div className={`${stylesMobile.hdd} ${stylesDesktop.hdd}`}>
                <div className={`${stylesMobile.hdd1} ${stylesDesktop.hdd1}`}>

                </div>
            </div>
        </div>
    )
}
export default Header