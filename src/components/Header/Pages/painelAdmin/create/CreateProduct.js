import Header from "../../../Header/Header"
import Navigation from "../../../Navigation/Navigation"
import Footer from "../../../rodape/Footer"
import styles from './CreateProduct.module.css'
import { useState } from "react"
import { db, storage } from '../../firebase/FireBase'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'

export function CreateProduct() {
    const [name, setName] = useState('')
    const [realPrice, setRealPrice] = useState('')
    const [promoPrice, setPromoPrice] = useState('')
    const [mainImage, setMainImage] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const produto = {
        name: name,
        realPrice: realPrice,
        promoPrice: promoPrice,
        mainImage: mainImage,
        image1: image1,
        image2: image2,
        description: description,
        category: category
    }
    const useCollectionRef = collection(db, 'produtos')


    async function criar() {

        if (name && realPrice && promoPrice && mainImage && image1 && image2 && description !== '') {

            const user = await addDoc(useCollectionRef, {
                produto
            })
            console.log(user)
            alert('Seu produto foi adicionado com sucesso')
            setName('')
            setRealPrice('')
            setPromoPrice('')
            setMainImage('')
            setImage1('')
            setImage2('')
            setDescription('')
            setCategory('')
        } else {
            alert('Existem campos vazios')
        }

    }



    const handleImagemChange = (event) => {
        event.preventDefault()
        const file = event.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setMainImage(url)
                })
            }
        )
    };
    const handleImagemChange2 = (event) => {
        event.preventDefault()
        const file = event.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImage1(url)
                })
            }
        )
    };
    const handleImagemChange3 = (event) => {
        event.preventDefault()
        const file = event.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImage2(url)
                })
            }
        )
    };

    const handleRemoveImagem = () => {
        if (mainImage) {
            // Extrai o nome do arquivo da URL


            // Obtém a referência do arquivo no Firebase Storage
            const imageRef = ref(storage, mainImage);

            // Remove o arquivo do Firebase Storage
            deleteObject(imageRef)
                .then(() => {
                    console.log('Arquivo removido com sucesso do Firebase Storage');
                    setMainImage('');
                })
                .catch((error) => {
                    console.error('Erro ao remover o arquivo:', error);
                });
        }
    };
    const handleRemoveImagem2 = () => {
        if (image1) {
            // Extrai o nome do arquivo da URL


            // Obtém a referência do arquivo no Firebase Storage
            const imageRef = ref(storage, image1);

            // Remove o arquivo do Firebase Storage
            deleteObject(imageRef)
                .then(() => {
                    console.log('Arquivo removido com sucesso do Firebase Storage');
                    setImage1('');
                })
                .catch((error) => {
                    console.error('Erro ao remover o arquivo:', error);
                });
        }
    };
    const handleRemoveImagem3 = () => {
        if (image2) {
            // Extrai o nome do arquivo da URL


            // Obtém a referência do arquivo no Firebase Storage
            const imageRef = ref(storage, image2);

            // Remove o arquivo do Firebase Storage
            deleteObject(imageRef)
                .then(() => {
                    console.log('Arquivo removido com sucesso do Firebase Storage');
                    setImage2('');
                })
                .catch((error) => {
                    console.error('Erro ao remover o arquivo:', error);
                });
        }
    };

    return (
        <div>
            <Header />
            <Navigation navTitle={'Criar produto'} />
            <div className={styles.add}>
                <div className={styles.add1}>
                    <h1>Informações do produto</h1>
                </div>
                <div className={styles.add1}>
                    <p>Imagem principal</p>
                    <input type="file" accept="image/*" onChange={handleImagemChange} />
                    {mainImage &&
                        <div className={styles.upimg}>
                            <div>
                                {mainImage && <img src={mainImage} alt="Imagem Carregada" />}
                            </div>

                            <div>
                                <button onClick={handleRemoveImagem} className={styles.remove}>Remover Imagem</button>
                            </div>

                        </div>
                    }

                </div>
                <div className={styles.add1}>
                    <p>Imagem Secundária</p>
                    <input type="file" accept="image/*" onChange={handleImagemChange2} />
                    {image1 &&
                        <div className={styles.upimg}>
                            <div>
                                {image1 && <img src={image1} alt="Imagem Carregada" />}
                            </div>

                            <div>
                                <button onClick={handleRemoveImagem2} className={styles.remove}>Remover Imagem</button>
                            </div>

                        </div>
                    }
                </div>
                <div className={styles.add1}>
                    <p>Imagem Terciária</p>
                    <input type="file" accept="image/*" onChange={handleImagemChange3} />
                    {image2 &&
                        <div className={styles.upimg}>
                            <div>
                                {image2 && <img src={image2} alt="Imagem Carregada" />}
                            </div>

                            <div>
                                <button onClick={handleRemoveImagem3} className={styles.remove}>Remover Imagem</button>
                            </div>

                        </div>
                    }
                </div>
                <div className={styles.add1}>
                    <p>Nome do produto</p>
                    <input type="text" placeholder="ex: produto1" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className={styles.add1}>
                    <p>Preço real do produto</p>
                    <input type="number" placeholder="ex: 99.99" value={realPrice} onChange={(e) => { setRealPrice(e.target.value) }} />
                </div>
                <div className={styles.add1}>
                    <p>Preço promocional do produto</p>
                    <input type="number" placeholder="ex: 50" value={promoPrice} onChange={(e) => { setPromoPrice(e.target.value) }} />
                </div>
                <div className={styles.add1}>
                    <p>Categoria do produto</p>
                    <input type="text" placeholder="ex: casa" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                </div>
                <div className={styles.add1}>
                    <p>Descrição do produto</p>
                    <input type="text" placeholder="ex: produto bacana" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div className={styles.add1}>
                    <button onClick={criar}>Adicionar</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}