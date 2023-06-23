import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { act_buy } from "../redux/cart/actions";

export default function Product({ product }) {
  const dispatch = useDispatch();
  // tạo 1 useState để quản lí số lượng người dùng muốn mua
  const [quantity, setQuantity] = useState(1);
  // khai báo hàm handleBuy để bắn action act_buy lên store cho phép thêm sản phẩm sau khi ấn nút mua hàng
  const handleBuy = () => {
    dispatch(act_buy(product, quantity));
  };

  // cho phép mua những sản phẩm còn hàng
  let elementShow =
    product.quantity !== 0 ? (
      <div>
        <input
          name="quantity-product-1"
          type="number"
          min={1}
          value={quantity}
          onChange={(event) => setQuantity(+event.target.value)}
        />
        <a data-product={1} href="#" className="price" onClick={handleBuy}>
          {product.price} USD
        </a>
      </div>
    ) : (
      // nếu không thì ẩn đi
      <span className="price"> {product.price} USD</span>
    );
  return (
    <div className="media product">
      <div className="media-left">
        <a>
          <img
            className="media-object"
            src={product.image}
            alt={product.productName}
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{product.productName}</h4>
        <p>{product.title}</p>
        {elementShow}
      </div>
    </div>
  );
}
