
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './styles/home.css';


function App() {
  return (
    <>
      <div className='App'>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
         
        </Routes>
      </div>

    </>
  );
}

export default App;
