import * as types from "./constants";
export const act_buy = (product, quantity) => {
  return {
    type: types.ACT_BUY,
    payload: { product, quantity },
  };
};
export const act_update = (productId, quantity) => {
  return {
    type: types.ACT_UPDATE,
    payload: { productId, quantity },
  };
};
export const act_delete = (id) => {
  return {
    type: types.ACT_DELETE,
    payload: id,
  };
};
