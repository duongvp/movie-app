import React from "react";
import FeaturedMovies from "../FeaturedMovies";
export default function RightMovie() {
  return (
    <div className="col-4 pe-0">
      <FeaturedMovies />
      <FeaturedMovies />
      <FeaturedMovies />
      <div className="upcoming-movie w-100">
        <div className="title-upcome-movie d-flex align-items-center">
          <i class="fas fa-tags pe-2 pb-0"></i>
          <span>Từ khóa nổi bật</span>
        </div>
        <div className="famous-key container-fluid">
          <div className="row w-100 m-0">
            <div className="col-4 p-0 pb-2">
              <a href="">
                <span>quái vật</span>
              </a>
            </div>
            <div className="col-4 p-0 pb-2">
              <a href="">
                <span>khủng bố</span>
              </a>
            </div>
            <div className="col-4 p-0 pb-2">
              <a href="">
                <span>châu tinh trì</span>
              </a>
            </div>
            <div className="col-4 p-0 pb-2">
              <a href="">
                <span>quái vật</span>
              </a>
            </div>
            <div className="col-4 p-0 pb-2">
              <a href="">
                <span>khủng bố</span>
              </a>
            </div>
            <div className="col-4 p-0 pb-2">
              <a href="">
                <span>châu tinh trì</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
