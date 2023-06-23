import {
  ACT_BUY,
  ACT_DELETE,
  ACT_UPDATE,
  ADD_SUCCESS,
  DELETE_SUCCESS,
  READY_TO_BUY,
  UPDATE_SUCCESS,
} from "../constants";

// tiến hành cập nhật các sự kiện thêm, sửa, xoá với các notify tương ứng
const initState = READY_TO_BUY;
const notify = (state = initState, action) => {
  switch (action.type) {
    case ACT_BUY:
      state = ADD_SUCCESS;
      return state;
    case ACT_UPDATE:
      state = UPDATE_SUCCESS;
      return state;
    case ACT_DELETE:
      state = DELETE_SUCCESS;
      return state;
    default:
      return state;
  }
};
export default notify
