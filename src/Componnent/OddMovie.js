import React from "react";
import ParentMovie from "./ParentMovie";
import RightMovie from "./RightMovie";
export default function OddMovie() {
  return (
    <div className="lst-hot-movie container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 p-0">
            <ParentMovie name="Phim lẻ mới cập nhật" display="none" />
          </div>
          <RightMovie />
        </div>
      </div>
    </div>
  );
}
