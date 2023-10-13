import styles from '../create/CreateProduct.module.css'
import Header from '../../../Header/Header'
import Navigation from '../../../Navigation/Navigation'
import Footer from '../../../rodape/Footer'
import { getDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'
import { useParams, useNavigate } from 'react-router-dom';
import { db, storage } from '../../firebase/FireBase'
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export function EditProduct() {
    const { id } = useParams()
    const [userData, setUserData] = useState({
        produto: {
            name: '',
            realPrice: '',
            promoPrice: '',
            mainImage: '',
            image1: '',
            image2: '',
            description: '',
            category: ''
        }
    });

    const handleImagemChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            },
            error => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {

                    setUserData(prevUserData => ({
                        ...prevUserData,
                        produto: {
                            ...prevUserData.produto,
                            mainImage: url, // Atualize também a imagemURL dentro do userData
                        },
                    }));
                });
            }
        );
    };

    const handleRemoveImagem = async () => {
        if (userData.produto.mainImage) {
            try {
                const imageRef = ref(storage, userData.produto.mainImage);


                await deleteObject(imageRef);
                console.log('Arquivo removido com sucesso do Firebase Storage');


                setUserData(prevUserData => ({
                    ...prevUserData,
                    produto: {
                        ...prevUserData.produto,
                        mainImage: '',
                    },
                }));
            } catch (error) {
                console.error('Erro ao remover o arquivo:', error);
            }
        }
    };

    const handleImagemChange2 = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            },
            error => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {

                    setUserData(prevUserData => ({
                        ...prevUserData,
                        produto: {
                            ...prevUserData.produto,
                            image1: url, // Atualize também a imagemURL dentro do userData
                        },
                    }));
                });
            }
        );
    };

    const handleRemoveImagem2 = async () => {
        if (userData.produto.image1) {
            try {
                const imageRef = ref(storage, userData.produto.image1);


                await deleteObject(imageRef);
                console.log('Arquivo removido com sucesso do Firebase Storage');


                setUserData(prevUserData => ({
                    ...prevUserData,
                    produto: {
                        ...prevUserData.produto,
                        image1: '',
                    },
                }));
            } catch (error) {
                console.error('Erro ao remover o arquivo:', error);
            }
        }
    };

    const handleImagemChange3 = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            },
            error => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {

                    setUserData(prevUserData => ({
                        ...prevUserData,
                        produtos: {
                            ...prevUserData.produto,
                            image2: url, // Atualize também a imagemURL dentro do userData
                        },
                    }));
                });
            }
        );
    };

    const handleRemoveImagem3 = async () => {
        if (userData.produto.image2) {
            try {
                const imageRef = ref(storage, userData.produto.image2);


                await deleteObject(imageRef);
                console.log('Arquivo removido com sucesso do Firebase Storage');


                setUserData(prevUserData => ({
                    ...prevUserData,
                    produtos: {
                        ...prevUserData.produto,
                        image2: '',
                    },
                }));
            } catch (error) {
                console.error('Erro ao remover o arquivo:', error);
            }
        }
    };




    useEffect(() => {
        const fetchUserData = async () => {
            const userRef = doc(db, 'produtos', id);

            try {
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                } else {
                    console.log('Documento não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar documento:', error);
            }
        };

        fetchUserData();
    }, [id]);

    const navigate = useNavigate()

    async function DeleteHome() {
        const userDoc = doc(db, 'produtos', id)
        await deleteDoc(userDoc)
        alert('Produto removido com sucesso')
        navigate('/updateproduct')
        scroll.scrollToTop({ duration: 0 })
        if (userData.produto.image2) {
            try {
                const imageRef = ref(storage, userData.produto.image2);


                await deleteObject(imageRef);
                console.log('Arquivo removido com sucesso do Firebase Storage');


                setUserData(prevUserData => ({
                    ...prevUserData,
                    produtos: {
                        ...prevUserData.produto,
                        image2: '',
                    },
                }));
            } catch (error) {
                console.error('Erro ao remover o arquivo:', error);
            }
        };

        if (userData.produto.image1) {
            try {
                const imageRef = ref(storage, userData.produto.image1);


                await deleteObject(imageRef);
                console.log('Arquivo removido com sucesso do Firebase Storage');


                setUserData(prevUserData => ({
                    ...prevUserData,
                    produto: {
                        ...prevUserData.produto,
                        image1: '',
                    },
                }));
            } catch (error) {
                console.error('Erro ao remover o arquivo:', error);
            }
        }

        if (userData.produto.mainImage) {
            try {
                const imageRef = ref(storage, userData.produto.mainImage);


                await deleteObject(imageRef);
                console.log('Arquivo removido com sucesso do Firebase Storage');


                setUserData(prevUserData => ({
                    ...prevUserData,
                    produto: {
                        ...prevUserData.produto,
                        mainImage: '',
                    },
                }));
            } catch (error) {
                console.error('Erro ao remover o arquivo:', error);
            }
        }

    }
    const userRef = doc(db, 'produtos', id);


    async function editDoc() {
        try {
            if (userData.produto.name && userData.produto.mainImage && userData.produto.realPrice && userData.produto.promoPrice && userData.produto.image1 && userData.produto.image2 && userData.produto.description !== '') {
                await updateDoc(userRef, {
                    produto: userData.produto
                });
                alert('Seu produto foi atualizado com sucesso')
                navigate(`/updateproduct`)
                scroll.scrollToTop({ duration: 0 })
            } else {
                alert('Existem campos vazios')
            }


        } catch (error) {
            console.error("Erro ao atualizar o documento:", error);
            alert('Erro ao atualizar o produto');
        }
    }


    return (
        <div>
            <Header />
            <Navigation navTitle={'Editar produto'} />
            <div className={styles.add}>
                <div className={styles.add1}>
                    <h1>Informações do produto</h1>
                </div>
                <div className={styles.add1}>
                    <p>Imagem principal</p>
                    <input type="file" accept="image/*" onChange={handleImagemChange} />

                    <div className={styles.upimg}>
                        <div>
                            <img src={userData.produto.mainImage} alt="Imagem Carregada" />
                        </div>

                        <div>
                            <button onClick={handleRemoveImagem} className={styles.remove}>Remover Imagem</button>
                        </div>

                    </div>


                </div>
                <div className={styles.add1}>
                    <p>Imagem Secundária</p>
                    <input type="file" accept="image/*" onChange={handleImagemChange2} />

                    <div className={styles.upimg}>
                        <div>
                            <img src={userData.produto.image1} alt="Imagem Carregada" />
                        </div>

                        <div>
                            <button onClick={handleRemoveImagem2} className={styles.remove}>Remover Imagem</button>
                        </div>

                    </div>

                </div>
                <div className={styles.add1}>
                    <p>Imagem Terciária</p>
                    <input type="file" accept="image/*" onChange={handleImagemChange3} />

                    <div className={styles.upimg}>
                        <div>
                            <img src={userData.produto.image2} alt="Imagem Carregada" />
                        </div>

                        <div>
                            <button onClick={handleRemoveImagem3} className={styles.remove}>Remover Imagem</button>
                        </div>

                    </div>

                </div>
                <div className={styles.add1}>
                    <p>Nome do produto</p>
                    <input type="text" placeholder="ex: produto1" value={userData.produto.name} onChange={(e) =>
                        setUserData({
                            ...userData,
                            produto: {
                                ...userData.produto,
                                name: e.target.value,
                            },
                        })
                    } />
                </div>
                <div className={styles.add1}>
                    <p>Preço real do produto</p>
                    <input type="number" placeholder="ex: 99.99" value={userData.produto.realPrice} onChange={(e) =>
                        setUserData({
                            ...userData,
                            produto: {
                                ...userData.produto,
                                realPrice: e.target.value,
                            },
                        })
                    } />
                </div>
                <div className={styles.add1}>
                    <p>Preço promocional do produto</p>
                    <input type="number" placeholder="ex: 50" value={userData.produto.promoPrice} onChange={(e) =>
                        setUserData({
                            ...userData,
                            produto: {
                                ...userData.produto,
                                promoPrice: e.target.value,
                            },
                        })
                    } />
                </div>
                <div className={styles.add1}>
                    <p>Categoria do produto</p>
                    <input type="text" placeholder="ex: casa" value={userData.produto.category} onChange={(e) =>
                        setUserData({
                            ...userData,
                            produto: {
                                ...userData.produto,
                                category: e.target.value,
                            },
                        })
                    } />
                </div>
                <div className={styles.add1}>
                    <p>Descrição do produto</p>
                    <input type="text" placeholder="ex: produto bacana" value={userData.produto.description} onChange={(e) =>
                        setUserData({
                            ...userData,
                            produto: {
                                ...userData.produto,
                                description: e.target.value,
                            },
                        })
                    } />
                </div>
                <div className={styles.add1}>
                    <button onClick={editDoc}>Atualizar</button>
                </div>
                <div className={styles.add1}>
                    <button onClick={DeleteHome} className={styles.remove2}>Remover produto</button>
                </div>
            </div>
            <Footer />
        </div>

    )
}