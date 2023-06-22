import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, selectedProduct } from '../redux/product/action';

export default function ProductList() {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
  const handleEdit = (product) => {
    dispatch(selectedProduct(product))
  }
  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
