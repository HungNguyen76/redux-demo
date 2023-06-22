import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  UPDATE_PRODUCT,
} from "./constant";

const initialState = {
  products: [],
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        selectedProduct: null
      };
    default:
      return state;
  }
};
export default productReducer;
