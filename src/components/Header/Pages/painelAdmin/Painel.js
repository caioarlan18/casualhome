import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../rodape/Footer';
import styles from './Painel.module.css'
import { FaPlus } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

export function Painel() {
    return (
        <div>
            <Header />
            <Navigation navTitle={'Painel'} />
            <div className={styles.painel}>
                <Link to={'/createproduct'} className={styles.painel1}>
                    <h1><FaPlus /> Criar produto</h1>
                </Link>
                <Link to={'/updateproduct'} className={styles.painel1}>
                    <h1><FaEdit /> Atualizar produtos</h1>
                </Link>
            </div>
            <Footer />
        </div>
    )
}