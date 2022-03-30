import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainPage} from "../../pages/MainPage";

export const AppContainer = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
});
