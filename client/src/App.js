import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import "./App.css"
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import PageNotFound from './components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}>
        </Route>
      </Routes>
      <Routes>
        <Route  path='/contact' element={<Contact />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='/about' element={<About />}>
        </Route>
      </Routes>
      <Routes>
        <Route  path='/signin' element={<Signin />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />}>
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
