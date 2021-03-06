import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import ShowProducts from "./components/ShowProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app">
        {/* <Router>
        <Routes>
          <Route exact path="/" element={<ShowProducts />} />
          <Route exact path="/create" element={<CreateProduct />} />
          <Route exact path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Router> */}
        {/* <button className="btn btn-primary">Create</button> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ShowProducts />} />
            <Route exact path="/create" element={<CreateProduct />} />
            <Route exact path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
