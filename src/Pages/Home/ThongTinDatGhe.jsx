import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { huyGhe } from "../../redux/bookingTicketReducer/bookingTicketReducer";
export default function ThongTinDatGhe() {
  const { danhSachGheDangDat } = useSelector(
    (state) => state.bookingTicketReducer
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div>
          <button className="gheDuocChon"></button>
          <span
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "600",
              marginLeft: "0",
            }}
          >
            ghế đã đặt
          </span>
        </div>
        <br />
        <div>
          <button className="gheDangChon"></button>
          <span
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "600",
            }}
          >
            ghế đang đặt
          </span>
        </div>
        <br />
        <div>
          <button className="ghe"></button>
          <span
            style={{
              fontSize: "30px",
              color: "white",
              fontWeight: "600",
              margin: "0",
            }}
          >
            ghế chưa đặt
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="table-responsive">
          <table className="table" border={2}>
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số Ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {danhSachGheDangDat.map((ghe, index) => {
                return (
                  <tr className="text-warning" key={index}>
                    <td>{ghe.soGhe}</td>
                    <td>{ghe.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          dispatch(huyGhe(ghe));
                        }}
                        className="btn btn-danger"
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng Tiền</td>
                <td>
                  {danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
