import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";

export const MainPage = observer(() => {
  const store = useStore();

  useEffect(() => {
  }, []);

  return (
    <div className="MainPage">
    </div>
  );
});
