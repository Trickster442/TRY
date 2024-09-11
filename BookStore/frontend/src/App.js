import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import AboutUS from "../src/pages/aboutUS";
import './index.css';
import AddBook from "./admin/addBook";
import BookDescription from "./pages/bookDescription";
import Login from "./pages/login";
import Bookmark from "./pages/bookmark";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUS />} />
        
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"/> {/* Add Dashboard component */}
        <Route path="/dashboard/addbook" element={<AddBook/>} />
        <Route path="/book-description" element={<BookDescription />} /> {/* Changed path for consistency */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
