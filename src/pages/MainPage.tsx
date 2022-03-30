import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";

export const MainPage = observer(() => {
  const store = useStore();

  return (
    <div className="MainPage">
      This is react SPA template
    </div>
  );
});
