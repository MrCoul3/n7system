import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppContainer = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<div />} />
      </Routes>
    </BrowserRouter>
  );
});
