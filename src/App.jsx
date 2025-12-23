import "./App.css";

import Naved from "./bootstrap/Naved";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Shoes from "./component/Shoes";
import Clothes from "./component/Clothes";

function App() {
  return (
    <>
      <Naved />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/Clothes" element={<Clothes />} />
      </Routes>
    </>
  );
}

export default App;
