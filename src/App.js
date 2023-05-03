import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/MyNavbar";
import Landing from "./Components/Landing.js";
import About from './Components/About.js'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>        
        <Route path='/About' element={<About />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
