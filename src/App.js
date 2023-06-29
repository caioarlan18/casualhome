import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/Header/HomePage/Homepage';
import TodosProdutos from './components/Header/Pages/AllProducts/TodosProdutos';
import HomeItens from './components/Header/Pages/itens para casa/HomeItens';
import PetItens from './components/Header/Pages/itens para animais/PetItens';
import Sobre from './components/Header/Pages/about/Sobre';
import Trocas from './components/Header/Pages/trocas e devolucoes/Trocas';
import PoliticaPrivacidade from './components/Header/Pages/politica de privacidade/PoliticaPrivacidade';
import Contato from './components/Header/Pages/contato/Contato';
import Guia from './components/Header/Pages/instrucao/Guia';
import Termos from './components/Header/Pages/termos e condicoes/Termos';
import Busca from './components/Header/Pages/busca de produtos/Busca';
import Carrinho from './components/Header/Pages/carrinho/Carrinho';
import PaginaCompra from './components/Header/Pages/pagina do produto/PaginaCompra';
import { Item1 } from './components/Header/Pages/compraAllProducts/Item1';
import { Item2 } from './components/Header/Pages/compraAllProducts/Item2';
import { Item3 } from './components/Header/Pages/compraAllProducts/Item3';
import { Item4 } from './components/Header/Pages/compraAllProducts/Item4';
import { Item5 } from './components/Header/Pages/compraAllProducts/Item5';
import { Item6 } from './components/Header/Pages/compraAllProducts/Item6';
import { Item7 } from './components/Header/Pages/compraAllProducts/Item7';
import { Item8 } from './components/Header/Pages/compraAllProducts/Item8';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/todosprodutos' element={<TodosProdutos />} />
          <Route path='/itenscasa' element={<HomeItens />} />
          <Route path='/itensanimais' element={<PetItens />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/trocas' element={<Trocas />} />
          <Route path='/politicadeprivacidade' element={<PoliticaPrivacidade />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/instrucaodecompra' element={<Guia />} />
          <Route path='/termos' element={<Termos />} />
          <Route path='/busca' element={<Busca />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/compra' element={<PaginaCompra />} />
          <Route path='/item1' element={<Item1 />} />
          <Route path='/item2' element={<Item2 />} />
          <Route path='/item3' element={<Item3 />} />
          <Route path='/item4' element={<Item4 />} />
          <Route path='/item5' element={<Item5 />} />
          <Route path='/item6' element={<Item6 />} />
          <Route path='/item7' element={<Item7 />} />
          <Route path='/item8' element={<Item8 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
