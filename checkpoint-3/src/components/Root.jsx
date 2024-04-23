import App from "../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
