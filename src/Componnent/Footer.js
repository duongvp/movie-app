import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6 img-logo-info pe-4">
                                <img src="https://motchill.net/motchill.png?v1.0.2" alt="" />
                                <p>© 2020 GoPhim Media<br/> Các phim tại GoPhim được tổng hợp và re-upload từ internet.GoPhim không chịu trách nhiệm liên quan đến bất cứ nội dung nào do thành viên đăng tải.
                                    <br/>All films are collected from and hosted by Google. GoPhim is not liable for copyright.
                                </p>
                            </div>
                            <div className="col-2 new-film">
                                <ul className="list-unstyled">
                                    <li className="title-content">
                                        <p>Phim mới</p>
                                    </li>
                                    <li>
                                        <a href=""><p>Phim chiếu rạp</p></a>
                                    </li>
                                    <li><a href=""><p>Phim lẻ</p></a></li>
                                    <li><a href=""><p>Phim bộ</p></a></li>
                                    <li><a href=""><p>Phim tâm lý</p></a></li>
                                </ul>
                            </div>
                            <div className="col-2 new-film">
                                <ul className="list-unstyled">
                                    <li className="title-content">
                                        <p>Phim Hay</p>
                                    </li>
                                    <li>
                                        <a href=""><p>Phim chiếu rạp</p></a>
                                    </li>
                                    <li><a href=""><p>Phim lẻ</p></a></li>
                                    <li><a href=""><p>Phim bộ</p></a></li>
                                    <li><a href=""><p>Phim tâm lý</p></a></li>
                                </ul>
                            </div>
                            <div className="col-2 new-film">
                                <ul className="list-unstyled">
                                    <li className="title-content">
                                        <p>Phim Hot</p>
                                    </li>
                                    <li>
                                        <a href=""><p>Phim chiếu rạp</p></a>
                                    </li>
                                    <li><a href=""><p>Phim lẻ</p></a></li>
                                    <li><a href=""><p>Phim bộ</p></a></li>
                                    <li><a href=""><p>Phim tâm lý</p></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="contact d-flex justify-content-end">
                             <i class="fas fa-phone-alt"></i>
                             <div className="email text-start ps-2">
                                 <p>Email liên hệ</p>
                                 <p>duongnnguyen19122000@gmail.com</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
