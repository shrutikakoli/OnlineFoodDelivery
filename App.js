import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import BuyNow from "./pages/BuyNow";
import FormData from "./pages/FormData";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/formData" element={<FormData/>} />
  
       
          <Route path="/buyNow" element={<BuyNow />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
