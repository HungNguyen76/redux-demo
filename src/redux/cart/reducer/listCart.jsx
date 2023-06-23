import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constants";

// lấy danh sách giỏ hàng đã lưu ở localStorage , nếu chưa có thì khởi tạo mảng rỗng
const initState = JSON.parse(localStorage.getItem("list-cart")) || [];

const listCart = (state = initState, action) => {
  switch (action.type) {
    case ACT_BUY:
      if (state.length === 0) {
        // khách chưa mua hàng
        let newCart = {
          id: 1,
          product: action.payload.product,
          quantity: action.payload.quantity,
        };
        state = [...state, newCart];
      } else {
        // đã có sản phẩm trong giỏ hàng
        if (checkCartExist(state, action.payload.product.productId)) {
          // sản phẩm thêm mới trùng
          for (let i = 0; i < state.length; i++) {
            if (
              state[i].product.productId === action.payload.product.productId
            ) {
              state[i].quantity += action.payload.quantity;
              break;
            }
          }
          state = [...state];
        } else {
          // sản phẩm ko bị trùng
          let newId = state[state.length - 1].id + 1; // tạo id tự tăng
          let newCart = {
            id: newId,
            product: action.payload.product,
            quantity: action.payload.quantity,
          };
          state = [...state, newCart];
        }
      }
      localStorage.setItem("list-cart", JSON.stringify(state));
      return state;
    case ACT_UPDATE:
      // xử lí update
      for (let i = 0; i < state.length; i++) {
        if (state[i].product.productId === action.payload.productId) {
          state[i].quantity = action.payload.quantity;
          break;
        }
      }
      state = [...state];
      // lưu lại vào storage để cập nhật
      localStorage.setItem("list-cart", JSON.stringify(state));
      return state;
    case ACT_DELETE:
      // Xử lí xoá
      let listCart = state.filter((cart) => cart.id !== action.payload); // phương thức filter cho phép mình lọc các phần tử mảng theo điều kiện
      state = [...listCart];
      localStorage.setItem("list-cart", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

const checkCartExist = (listCart, productId) => {
  for (let i = 0; i < listCart.length; i++) {
    if (listCart[i].product.productId === productId) {
      return true;
    }
  }
  return false;
};
export default listCart