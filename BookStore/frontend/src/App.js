import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/pages/home"
import AboutUS from "../src/pages/aboutUS";
import './index.css'
import AddBook from "./admin/addBook";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about_us" element={<AboutUS/>}/>
      <Route path="/contact"/>
      <Route path="/ordered"/>
      <Route path="/login"/>
      <Route path="/dashboard"></Route>
      <Route path="/dashboard/addbook" element={<AddBook/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
