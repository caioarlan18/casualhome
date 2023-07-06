import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Produto from '../../produtos/Produto';
import removedorDePelos from '../../../../image/foto remover de pelo.webp'
import lavadorDeCopos from '../../../../image/foto lavador de copo.webp'
import tampaSilicone from '../../../../image/foto tampas de silicone.webp'
import escovaMagica from '../../../../image/foto escova magica.webp'
import impressoraPortatil from '../../../../image/foto impressora portatil.webp'
import escovaEletrica from '../../../../image/foto escova eletrica.webp'
import seladoraVacuo from '../../../../image/foto seladora vacuo.webp'
import tabuaDobravel from '../../../../image/tabuadobravel.jpg'

export const ArrayContext = createContext();

export const ArrayProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    alert('Produto adicionado ao carrinho');
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);



  // meus produtos
  const produtos = [
    <Produto imagemProduto={impressoraPortatil} titulo={'Impressora de etiquetas térmica portátil'} custoR={'R$ 233,87'} custoP={'R$ 179,90'} addToCart={addToCart} buy={'/item1'} categoria={['casa']} />,
    <Produto imagemProduto={removedorDePelos} titulo={'Removedor de pelo de roupas para máquina de lavar'} custoR={'R$ 32,50'} custoP={'R$ 25,00'} addToCart={addToCart} buy={'/item2'} categoria={['casa']} star={'4'} />,
    <Produto imagemProduto={lavadorDeCopos} titulo={'Lavador automático de copo para pia'} custoR={'R$ 149,90'} custoP={'R$ 99,90'} addToCart={addToCart} buy={'/item3'} categoria={['casa', 'cozinha']} />,
    <Produto imagemProduto={escovaEletrica} titulo={'Escova elétrica rotatória para limpeza'} custoR={'R$ 193,97'} custoP={'R$ 149,90'} addToCart={addToCart} buy={'/item4'} categoria={['casa', 'cozinha', 'banheiro']} star={'4'} />,
    <Produto imagemProduto={tampaSilicone} titulo={'Tampas de silicone ajustáveis (6 peças)'} custoR={'R$ 90,87'} custoP={'R$ 69,90'} addToCart={addToCart} buy={'/item5'} categoria={['casa', 'cozinha']} />,
    <Produto imagemProduto={seladoraVacuo} titulo={'Seladora à vácuo portátil'} custoR={'R$ 297,97'} custoP={'R$ 229,90'} addToCart={addToCart} buy={'/item6'} categoria={['casa', 'cozinha']} star={'4'} />,
    <Produto imagemProduto={escovaMagica} titulo={'Escova mágica de gato e cachorro para pelo'} custoR={'R$ 77,87'} custoP={'R$ 59,90'} addToCart={addToCart} buy={'/item7'} categoria={['casa', 'animais']} />,
    <Produto imagemProduto={tabuaDobravel} titulo={'Tábua Gourmet de Corte Dobrável'} custoR={'R$ 51,87'} custoP={'R$ 39,90'} addToCart={addToCart} buy={'/item8'} categoria={['casa', 'cozinha']} />
  ];

  return (
    <ArrayContext.Provider value={produtos}>
      {children}
    </ArrayContext.Provider>
  );
};