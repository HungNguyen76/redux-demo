import React from "react";
import CartInfo from "../components/CartInfo";
import Notify from "../components/Notify";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";

export default function ListCart() {
  // dùng useSelector để lấy ra danh sách giỏ hàng trong store
  const listCarts = useSelector((state) => state.listCart);

  //  dùng phương thức reduce() của mảng để thực hiện tính tổng giá tiền của giỏ hàng
  let total = listCarts.reduce(
    (sum, cart) => sum + cart.product.price * cart.quantity,
    0
  );
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Product Name</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {listCarts.map((cart, index) => (
                <Cart key={cart.id} cart={cart} stt={index + 1} />
              ))}
            </tbody>
            <CartInfo size={listCarts.length} total={total} />
          </table>
        </div>
      </div>
      <Notify />
    </div>
  );
}
