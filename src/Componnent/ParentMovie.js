import React from "react";
import MovieThreater from "./MovieThreater";

export default function ParentMovie(props) {
  const { name, display, margin } = props;
  var row1 = [];
  for (let i = 0; i <= 6; i++) row1.push(<MovieThreater />);
  return (
    <div className="movie-theaters mb-3">
      <div className="title-threaters d-flex justify-content-between align-items-end">
        <p>{name}</p>
        <a href="" style={{ display: `${display}` }}>
          <span>Xem tất cả</span>
          <i class="fas fa-caret-right ps-1"></i>
        </a>
      </div>
      <div className="container-fluid p-0">
        <div className="row gx-2 gy-2">{row1}</div>
      </div>
    </div>
  );
}
