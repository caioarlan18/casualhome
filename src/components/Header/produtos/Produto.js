import styles from './Produto.mobile.module.css'
import stylesDesktop from './Produto.desktop.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { db } from '../Pages/firebase/FireBase'
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

function Produto({ n1, n2 }) {
    const navigate = useNavigate()

    const handleClick = () => {
        scroll.scrollToTop({ duration: 0 });
    };
    const [users, setUsers] = useState([])
    const useCollectionRef = collection(db, 'produtos')
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(useCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])
    return (

        <>
            {users.slice(n1, n2).map((user) =>
                <div className={styles.produto} key={user.id} onClick={() => { navigate(`/compra/${user.id}`); scroll.scrollToTop({ duration: 0 }) }} >
                    <div className={styles.produto1} >
                        <img src={user.produto.mainImage} alt="imagem do produto" />
                    </div>
                    <div className={styles.produto1} >
                        <h1>{user.produto.name}</h1>
                    </div>
                    <div className={styles.produto2} >
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <div className={styles.produto1} >
                        <h3>R$ {user.produto.realPrice}</h3>
                        <span><AiOutlineArrowDown />30%</span>
                        <h2>R$ {user.produto.promoPrice}</h2>
                    </div>



                </div>

            )}
        </>
    )
}
export default Produto