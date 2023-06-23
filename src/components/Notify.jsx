import React from "react";
import { useSelector } from "react-redux";

export default function Notify() {
  // dùng useSelector để lấy ra thông báo và hiển thị với thao tác tương ứng
  let notify = useSelector((state) => state.notify);
  return (
    <div className="alert alert-success" role="alert" id="notification">
      {notify}
    </div>
  );
}
