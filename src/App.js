import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/Header/HomePage/Homepage';
function App() {
  return (
    <div >
      <Router>


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='todosprodutos' element={''} />
          <Route path='itenscasa' element={''} />
          <Route path='itensanimais' element={''} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
