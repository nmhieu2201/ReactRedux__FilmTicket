import React from "react";
import "./Home.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "../../data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default function Home() {
  const renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url(./img/bookingticket/bgmovie.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div
                className=" text-center "
                style={{ fontSize: "40px", fontWeigth: "700", color: "gold" }}
              >
                Bài Tập Đặt Vé
              </div>
              <div
                style={{
                  fontSize: "30px",
                  margin: "20px 0",
                  color: "white",
                }}
              >
               <h3 className="text-center"> Màn Hình</h3>
              </div>
              <div style={{}}>
                <div className="screen w-100"></div>
                <br />
              </div>
              {renderHangGhe()}
            </div>
            <div className="col-4">
              <div
                className=" text-center "
                style={{
                  fontSize: "30px",
                  fontWeigth: "500",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Danh Sách Ghế Bạn Chọn
              </div>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
