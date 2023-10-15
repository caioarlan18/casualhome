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
import Carrinho from './components/Header/Pages/carrinho/Carrinho';
import PaginaCompra from './components/Header/Pages/pagina do produto/PaginaCompra';
import { Checkout } from './components/Header/Pages/checkout/Checkout';
import ItensCozinha from './components/Header/Pages/itens para cozinha/ItensCozinha';
import ItensBanheiro from './components/Header/Pages/itens banheiro/ItensBanheiro';
import { Painel } from './components/Header/Pages/painelAdmin/Painel';
import { CreateProduct } from './components/Header/Pages/painelAdmin/create/CreateProduct';
import { UpdateProduct } from './components/Header/Pages/painelAdmin/update/UpdateProduct';
import { EditProduct } from './components/Header/Pages/painelAdmin/edit/EditProduct';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/todosprodutos' element={<TodosProdutos />} />
          <Route path='/itenscasa' element={<HomeItens />} />
          <Route path='/itenscozinha' element={<ItensCozinha />} />
          <Route path='/itensbanheiro' element={<ItensBanheiro />} />
          <Route path='/itensanimais' element={<PetItens />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/trocas' element={<Trocas />} />
          <Route path='/politicadeprivacidade' element={<PoliticaPrivacidade />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/instrucaodecompra' element={<Guia />} />
          <Route path='/termos' element={<Termos />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/compra/:id' element={<PaginaCompra />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/painel' element={<Painel />} />
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
          <Route path='/editproduct/:id' element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
