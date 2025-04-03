import "./index.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="cart" element={<Cart />}/>
      </Routes>
    </>
  );
}

export default App;
