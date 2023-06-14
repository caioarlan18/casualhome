import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/Header/HomePage/Homepage';
import TodosProdutos from './components/Header/Pages/AllProducts/TodosProdutos';
import HomeItens from './components/Header/Pages/itens para casa/HomeItens';
import PetItens from './components/Header/Pages/itens para animais/PetItens';
import Sobre from './components/Header/Pages/about/Sobre';
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
          <Route path='/trocas' />
          <Route path='/politicadeprivacidade' />
          <Route path='/contato' />
          <Route path='/intrucaodecompra' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
