import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { act_delete, act_update } from "../redux/cart/actions";

export default function Cart({ cart, stt }) {
  const dispatch = useDispatch();
  // khai báo 1 useState quản lí số lượng sản phẩm trong giỏ hàng
  const [quantityItem, setQuantityItem] = useState(0);

  // Khai báo hàm handleUpdate để bắn action act_update lên store để cập nhật số lượng sản phẩm trong giỏ hàng
  const handleUpdate = () => {
    dispatch(act_update(cart.product.productId, quantityItem));
  };
  
  // Khai báo hàm handleDelete để bắn action act_delete lên store để xoá 1 sản phẩm trong giỏ hàng
  const handleDelete = () => {
    dispatch(act_delete(cart.id));
  };

  // hàm trong useEffect dẽ được thực thi khi có sự thay đổi số lượng của sản phẩm trong giỏ hàng Cart
  useEffect(() => {
    setQuantityItem(cart.quantity);
  }, [cart.quantity]);
  return (
    <tr>
      <th scope="row">{stt}</th>
      <td>{cart.product.productName}</td>
      <td>{cart.product.price} USD</td>
      <td>
        <input
          name="cart-item-quantity-1"
          type="number"
          min="1"
          value={quantityItem}
          onChange={(e) => setQuantityItem(+e.target.value)}
        />
      </td>
      <td>
        <strong>{cart.product.price * quantityItem} USD</strong>
      </td>
      <td>
        <button
          className="label label-info update-cart-item"
          data-product=""
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="label label-danger delete-cart-item"
          data-product=""
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
