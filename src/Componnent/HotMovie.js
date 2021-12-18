import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hotmovie = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
    return (
        <div className="row  w-100 m-0 pb-3">
            <Slider {...settings}>
                <div className="hot-items-film">
                    <a href="" className="text-decoration-none link-hot-movie">
                        <img src="https://i0.wp.com/image.motphim.net/poster/bau-troi-ruc-do-9339.jpg?1633677029" alt="" />
                        <p className="status-film">Tập 18 Vietsub</p>
                        <i class="fas fa-play-circle"></i>
                        <div className="movie-div d-flex justify-content-center align-items-center">
                           <p className="movie-hot-name m-0">Cửa hàng tiện lợi Saelbyul</p>
                        </div>
                    </a>
                </div>
                <div className="hot-items-film">
                    <a href="" className="text-decoration-none link-hot-movie">
                        <img src="https://i0.wp.com/image.motphim.net/poster/bau-troi-ruc-do-9339.jpg?1633677029" alt="" />
                        <p className="status-film">Tập 18 Vietsub</p>
                        <i class="fas fa-play-circle"></i>
                        <div className="movie-div d-flex justify-content-center align-items-center">
                           <p className="movie-hot-name m-0">Cửa hàng tiện lợi Saelbyul</p>
                        </div>
                    </a>
                </div>
                <div className="hot-items-film">
                    <a href="" className="text-decoration-none link-hot-movie">
                        <img src="https://i0.wp.com/image.motphim.net/poster/bau-troi-ruc-do-9339.jpg?1633677029" alt="" />
                        <p className="status-film">Tập 18 Vietsub</p>
                        <i class="fas fa-play-circle"></i>
                        <div className="movie-div d-flex justify-content-center align-items-center">
                           <p className="movie-hot-name m-0">Cửa hàng tiện lợi Saelbyul</p>
                        </div>
                    </a>
                </div>
                <div className="hot-items-film">
                    <a href="" className="text-decoration-none link-hot-movie">
                        <img src="https://i0.wp.com/image.motphim.net/poster/bau-troi-ruc-do-9339.jpg?1633677029" alt="" />
                        <p className="status-film">Tập 18 Vietsub</p>
                        <i class="fas fa-play-circle"></i>
                        <div className="movie-div d-flex justify-content-center align-items-center">
                           <p className="movie-hot-name m-0">Cửa hàng tiện lợi Saelbyul</p>
                        </div>
                    </a>
                </div>
                <div className="hot-items-film">
                    <a href="" className="text-decoration-none link-hot-movie">
                        <img src="https://i0.wp.com/image.motphim.net/poster/bau-troi-ruc-do-9339.jpg?1633677029" alt="" />
                        <p className="status-film">Tập 18 Vietsub</p>
                        <i class="fas fa-play-circle"></i>
                        <div className="movie-div d-flex justify-content-center align-items-center">
                           <p className="movie-hot-name m-0">Cửa hàng tiện lợi Saelbyul</p>
                        </div>
                    </a>
                </div>
                <div className="hot-items-film">
                    <a href="" className="text-decoration-none link-hot-movie">
                        <img src="https://i0.wp.com/image.motphim.net/poster/bau-troi-ruc-do-9339.jpg?1633677029" alt="" />
                        <p className="status-film">Tập 18 Vietsub</p>
                        <i class="fas fa-play-circle"></i>
                        <div className="movie-div d-flex justify-content-center align-items-center">
                           <p className="movie-hot-name m-0">Cửa hàng tiện lợi Saelbyul</p>
                        </div>
                    </a>
                </div>
            </Slider>   
        </div>
    );
}

export default Hotmovie;
