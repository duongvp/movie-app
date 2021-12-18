import React from "react";

export default function FeaturedMovies() {
  return (
    <div className="upcoming-movie w-100">
      <div className="title-upcome-movie d-flex align-items-center">
        <i class="fab fa-galactic-senate pe-2"></i>
        <span>Phim sắp chiếu</span>
      </div>
      <div className="list-top-movie-thumb w-100">
        <ul className="lst-thumb list-unstyled w-100">
          <li className="item-thumb w-100" id="item-thumb-1">
            <a href="">
              <img
                src="https://i0.wp.com/image.motphim.net/poster/dang-cap-thuong-luu-9370.jpg?1633966164"
                alt=""
              />
              <span className="label">Vietsub</span>
              <div className="info-thumb">
                <p className="thumb-name-vn">Thanh trâm hành</p>
                <p className="thumb-name-en">The Golden Hairpin</p>
                <div className="rank-movie">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p className="view">
                <span>Lượt xem: </span>
                <span>202</span>
              </p>
            </a>
          </li>
          <li className="item-thumb">
            <a href="">
              <div className="container-fluid p-0">
                <div className="row p-2">
                  <div className="col-10 d-flex film-item-ver">
                    <img
                      src="https://i0.wp.com/image.motphim.net/poster/sam-sam-den-roi-ban-thai-9014.jpg?1622734329"
                      alt=""
                    />
                    <div className="info-esp-movie w-75 ps-1">
                      <p className="thumb-name-vn">Thanh trâm hành</p>
                      <p className="thumb-name-en">The Golden Hairpin</p>
                      <p className="view">
                        <span>Lượt xem: </span>
                        <span>202</span>
                      </p>
                      <div className="rank-movie">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <span className="label">Vietsub</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="item-thumb">
            <a href="">
              <div className="container-fluid p-0">
                <div className="row p-2">
                  <div className="col-10 d-flex film-item-ver">
                    <img
                      src="https://i0.wp.com/image.motphim.net/poster/sam-sam-den-roi-ban-thai-9014.jpg?1622734329"
                      alt=""
                    />
                    <div className="info-esp-movie w-75 ps-1">
                      <p className="thumb-name-vn">Thanh trâm hành</p>
                      <p className="thumb-name-en">The Golden Hairpin</p>
                      <p className="view">
                        <span>Lượt xem: </span>
                        <span>202</span>
                      </p>
                      <div className="rank-movie">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <span className="label">Vietsub</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
