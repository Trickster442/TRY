import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/pages/home"
import AboutUS from "../src/pages/aboutUS";
import './index.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about_us" element={<AboutUS/>}/>
      <Route path="/contact"/>
      <Route path="/ordered"/>
      <Route path="/login"/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
