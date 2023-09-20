import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Categories, Login, Products } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
