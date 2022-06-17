import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const endpoint = "http://localhost:8000/api";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  // const[(count, setCount)] = useState();

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
    toast.success("Successfully Deleted Product");
    navigate(`/`);
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => (
            <tr key={product.id}>
              <td> {product.description} </td>
              <td> {product.price} </td>
              <td> {product.stock} </td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
