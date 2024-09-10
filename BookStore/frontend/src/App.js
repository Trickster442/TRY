import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/pages/home"
import AboutUS from "../src/pages/aboutUS";
import './index.css'
import AddBook from "./admin/addBook";
import BookDescription from "./pages/bookDescription";
import Login from "./pages/login";
import Bookmark from "./pages/bookmark";
import Contact from "./pages/contact"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about_us" element={<AboutUS/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/bookmark" element={<Bookmark/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard"></Route>
      <Route path="/dashboard/addbook" element={<AddBook/>}></Route>
      <Route path="/bookDescription" element={<BookDescription/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
