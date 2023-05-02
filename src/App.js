import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/MyNavbar";
import Landing from "./Components/Landing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
