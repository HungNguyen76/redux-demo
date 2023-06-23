// Khởi tạo danh sách sản phẩm mẫu
import pizza from '../../../images/pizza.jpg'
import hamburger from '../../../images/Hamburger.jpg'
import bread from '../../../images/bread.jpg'
import cake from '../../../images/Cake.jpg'

const initialState = [
  {
    productId: "P001",
    productName: "Pizza",
    image: pizza,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 12,
    quantity: 10,
  },
  {
    productId: "P002",
    productName: "Hamburger",
    image: hamburger,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 16,
    quantity: 0,
  },
  {
    productId: "P003",
    productName: "Bread",
    image: bread,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 13,
    quantity: 8,
  },
  {
    productId: "P004",
    productName: "Cake",
    image: cake,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price: 14,
    quantity: 6,
  },
];
const listProduct = (state = initialState, action) => {
  return state;
};
export default listProduct