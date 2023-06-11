import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header/Header';
function App() {
  return (
    <div >
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={''} />
          <Route path='todosprodutos' element={''} />
          <Route path='itenscasa' element={''} />
          <Route path='itensanimais' element={''} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
