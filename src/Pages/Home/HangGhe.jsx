import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { datGhe } from "../../redux/bookingTicketReducer/bookingTicketReducer";
export default function HangGhe(props) {
  const { danhSachGheDangDat } = useSelector(
    (state) => state.bookingTicketReducer
  );
  const dispatch = useDispatch();
  const renderGhe = () => {
    return props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDat = "";
      if (ghe.daDat) {
        cssGheDat = "gheDuocChon";
      }
      let cssGheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            dispatch(datGhe(ghe));
          }}
          className={`ghe ${cssGheDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  const renderSoHang = () => {
    return props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };
  const renderHangGhe = () => {
    if (props.soHangGhe === 0) {
      return (
        <div style={{ marginLeft: "20px" }}>
          <span>{props.hangGhe.hang}</span>
          {renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          <span style={{ marginRight: 5 }}> {props.hangGhe.hang}</span>
          {renderGhe()}
        </div>
      );
    }
  };
  return (
    <div
      className="text-light text-left ml-3 mt-3 "
      style={{ fontSize: 30, marginRight: 20 }}
    >
      {renderHangGhe()}
    </div>
  );
}
