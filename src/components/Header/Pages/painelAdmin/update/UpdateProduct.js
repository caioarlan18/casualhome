import Header from "../../../Header/Header"
import Navigation from "../../../Navigation/Navigation"
import Footer from "../../../rodape/Footer"
import styles from './UpdateProduct.module.css'
import { useState, useEffect } from "react"
import { db } from '../../firebase/FireBase'
import { collection, getDocs } from "firebase/firestore";
import { FaStar } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export function UpdateProduct() {
    const [users, setUsers] = useState([])
    const useCollectionRef = collection(db, 'produtos')
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(useCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()

    }, [])
    const navigate = useNavigate()

    return (
        <div>
            <Header />
            <Navigation navTitle={'Atualizar produtos'} />
            <div className={styles.update}>
                {users.map((user) =>
                    <div className={styles.produto} key={user.id} onClick={() => { navigate(`/editproduct/${user.id}`); scroll.scrollToTop({ duration: 0 }) }} >
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
            </div>
            <Footer />
        </div>

    )
}