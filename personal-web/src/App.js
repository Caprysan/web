import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import About from './pages/about';
import CaseStudy from './pages/casestudy';
import Home from './pages/home';
import NotFound from './pages/notfound';
import PhotoWorks from './pages/photoworks';
import Projects from './pages/projects';


function App() {
  return (

      <BrowserRouter> 
      <Header/>
        <div className='mainContainer'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/notfound" element={<NotFound/>} />
            <Route path="/photoworks" element={<PhotoWorks/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/casestudies" element={<CaseStudy/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    
    );
}

export default App;
