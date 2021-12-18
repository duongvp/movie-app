import React from 'react'

export default function MovieThreater() {
    return (
        <div className="col-3 item-info-threater">
            <a href="" className="link-hot-movie">
                <img src="https://img.gophim.club/images/film/hon-dao-den-toi.jpg" alt="" />
                <p className="status-film">HD-Vietsub</p>
                <i class="fas fa-play-circle"></i>
                <div className="threater-name">
                    <p>Hòn đảo đen tối</p>
                    <p>Black Island</p>
                    <p className="movie-time">
                        110 phút
                    </p>
                </div>
            </a>
        </div>
    )
}
