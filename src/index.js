import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import Home from "./Pages/Home/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
