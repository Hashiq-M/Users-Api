import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./Api";
import Product from "./Product";
import { useState } from "react";

function App() {
  const [clickedProduct, setClickedProduct] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Api setClickedProduct={setClickedProduct} />}
        />
        <Route
          path="/product"
          element={<Product clickedProduct={clickedProduct} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
