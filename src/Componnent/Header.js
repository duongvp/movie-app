import React from "react";
import { Link } from "react-router-dom";
import Category from "./CategoryChild";
function Header() {
  return (
    <header className="header">
      <div className="action-movie d-flex justify-content-between align-items-center">
        <div className="logo-movie d-flex  align-items-center">
          <img src="https://motchill.net/motchill.png?v1.0.2" />
          <div className="search d-flex">
            <input
              type="text"
              placeholder="Tìm : tên phim,đạo diễn,diễn viên"
            />
            <button className="btn-search">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="lst-btn-user">
          <button className="btn-register">
            <i class="fas fa-users pe-2"></i>
            <span>Đăng kí</span>
          </button>
          <button className="btn-log-in">
            <i class="fas fa-sign-in-alt pe-2"></i>
            <span>Đăng nhập</span>
          </button>
        </div>
      </div>
      <nav className="category">
        <ul className="lst-category d-flex list-unstyled m-0 justify-content-between">
          <li className="item-category ps-0">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="item-category">
            <a href="">Thể loại</a>
            <Category link="2" />
          </li>
          <li className="item-category">
            <a href="">Quốc gia</a>
            <Category link="2" />
          </li>
          <li className="item-category">
            <a href="">Phim mới</a>
          </li>
          <li className="item-category">
            <a href="">Phim Bộ</a>
          </li>
          <li className="item-category">
            <Link to="/about">Phim lẻ</Link>
          </li>
          <li className="item-category">
            <a href="">Phim Thuyết minh</a>
          </li>
          <li className="item-category">
            <a href="">Phim chiếu rạp</a>
          </li>
          <li className="item-category pe-0">
            <a href="">tv show</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
