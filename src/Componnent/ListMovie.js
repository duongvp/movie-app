import React from "react";
import ParentMovie from "./ParentMovie";
import RightMovie from "./RightMovie";
import TabContent from "./TabContent";
export default function ListMovie() {
  var row = [];
  for (let i = 0; i <= 10; i++) {
    row.push(<TabContent />);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 p-0">
          <div className="row w-100 ms-0 mb-3">
            <div className="col-6 ps-0">
              <ul className="list-unstyled img-colllection mb-0 h-100">
                <li className="item-image-collect h-25">
                  <a href="">
                    <img
                      src="https://1.bp.blogspot.com/-Me8nPHuQ1Ls/Xe2kMRMudZI/AAAAAAAAAtQ/yitov6AR38k4fk0oTxYxmxx8ukQ09mvKgCLcBGAsYHQ/s1600/Tuyen-Tap-Marvel.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="item-image-collect h-25">
                  <a href="">
                    <img
                      src="https://1.bp.blogspot.com/-6nuUg26KJOE/Xe2kMGJyJLI/AAAAAAAAAtM/kRmnjQqvwno2p-3AjP6bH-6dI-tS4waMACLcBGAsYHQ/s1600/Tuyen-Tap-DC.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="item-image-collect h-25">
                  <a href="">
                    <img
                      src="https://1.bp.blogspot.com/-TZ7xqDgoaUg/Xe2kLFXwwRI/AAAAAAAAAs4/ebZ6Npdx-Q4xFXdYnnGV5_MjnRZ4wKiLACLcBGAsYHQ/s1600/Co-Trang-Trung-Quoc.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="item-image-collect h-25">
                  <a href="">
                    <img
                      src="https://1.bp.blogspot.com/-6nuUg26KJOE/Xe2kMGJyJLI/AAAAAAAAAtM/kRmnjQqvwno2p-3AjP6bH-6dI-tS4waMACLcBGAsYHQ/s1600/Tuyen-Tap-DC.jpg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 ui-tab-panel pb-2 ps-0 pe-0">
              <div className="btn-tab-movie d-grid">
                <button>Phim lẻ mới</button>
                <button>Phim bộ mới</button>
                <button>Phim bộ full</button>
              </div>
              {row}
            </div>
          </div>
          <ParentMovie name="Phim chiếu rạp" />
          <ParentMovie name="Phim lẻ mới cập nhật" />
          <ParentMovie name="Phim bộ mới cập nhật" />
        </div>
        <RightMovie />
      </div>
    </div>
  );
}
