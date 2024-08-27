import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home"/>
      <Route path="/about_us"/>
      <Route path="/contact"/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
