import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
