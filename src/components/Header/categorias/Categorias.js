import styles from './Categorias.module.css'
import { animateScroll as scroll } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Categorias({ imagem, path, titulo }) {
    const handleClick = () => {
        // Rolar para o topo imediatamente
        scroll.scrollToTop({ duration: 0 });
    };
    return (
        <section className={styles.categoriesSection} >
            <Link to={path} onClick={handleClick}>
                <div className={styles.categoriesSection1}>
                    <img src={imagem} alt="icone" />
                </div>
                <h1>{titulo}</h1>
            </Link>
        </section>
    )
}