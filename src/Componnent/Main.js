import React from "react";
import Hotmovie from "./HotMovie";
import ListMovie from "./ListMovie";
const Main = () => {
  return (
    <div className="lst-hot-movie container-fluid">
      <Hotmovie />
      <ListMovie />
    </div>
  );
};

export default Main;
