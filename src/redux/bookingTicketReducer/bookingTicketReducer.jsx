import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  danhSachGheDangDat: [],
};

const bookingTicketReducer = createSlice({
  name: "bookingTicketReducer",
  initialState,
  reducers: {
    datGhe: (state, action) => {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.payload);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
    },
    huyGhe: (state, action) => {
      state.danhSachGheDangDat = state.danhSachGheDangDat.filter(
        (ghe) => ghe.soGhe !== action.payload.soGhe
      );
    },
  },
});

export const { datGhe, huyGhe } = bookingTicketReducer.actions;

export default bookingTicketReducer.reducer;
