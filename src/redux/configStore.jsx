import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "./bookingTicketReducer/bookingTicketReducer";
export const store = configureStore({
  reducer: {
    bookingTicketReducer,
  },
});
