import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

export default function ListProduct() {
  // sử dụng useSelector để lấy ra danh sách sản phẩm trong store và đổ ra giao diện
  const listProducts = useSelector((state) => state.listProduct);
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {listProducts.map((product) => (
            <Product key={product.productId} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
