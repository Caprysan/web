import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import About from './pages/about';
import {Galery} from './pages/galery';
import Home from './pages/home';
import NotFound from './pages/notfound';
import PhotoWorks from './pages/photoworks';
import Works from './pages/works';


function App() {
  return (

      <BrowserRouter> 
      <Header/>
        <div className='mainContainer'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/*" element={<NotFound/>} />
            <Route path="/photoworks" element={<PhotoWorks/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/galery" element={<Galery/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    
    );
}

export default App;
