import TopBar from "../top-bar";

function HeaderDefault() {
  return (
    <header className="header shop">
     <TopBar/>

      <div className="header-inner">
        <div className="container">
          <div className="cat-nav-head">
            <div className="row">
              <div className="col-lg-3">
                <div className="all-category">
                  <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="false" />Menu</h3>
                  <ul className="main-category">
                    <li><a href="#">Điện thoại <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      <ul className="sub-category">
                        <li><a href="#">Samsung</a></li>
                        <li><a href="#">Apple</a></li>
                        <li><a href="#">Xiaomi</a></li>
                        <li><a href="#">OPPO</a></li>
                        <li><a href="#">Nokia</a></li>
                        <li><a href="#">OnePlus</a></li>
                        <li><a href="#">ASUS</a></li>
                        <li><a href="#">Vivo</a></li>
                        <li><a href="#">Các hãng khác </a></li>
                      </ul>
                    </li>
                    <li><a href="#">Máy tính <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      <ul className="sub-category">
                        <li><a href="#">Apple</a></li>
                        <li><a href="#">ASUS</a></li>
                        <li><a href="#">Dell</a></li>
                        <li><a href="#">OPPO</a></li>
                        <li><a href="#">HP</a></li>
                        <li><a href="#">Lenovo</a></li>
                        <li><a href="#">Microsoft Surface</a></li>
                        <li><a href="#">Acer</a></li>
                        <li><a href="#">Các hãng khác </a></li>
                      </ul>
                    </li>
                    <li><a href="#">Ipad</a></li>
                    <li><a href="#">Tivi</a></li>
                    <li><a href="#">Đồng hồ</a></li>
                    <li><a href="#">Âm thanh</a></li>
                    <li><a href="#">Nhà thông minh</a></li>
                    <li><a href="#">Phụ kiện</a></li>
                    <li><a href="#">Thu cũ</a></li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li className="active"><a href="#">Home</a></li>
                          <li><a href="#">Sản phẩm hot</a></li>
                          <li><a href="#">Sản phẩm<i /><span className="new">Mới ra</span></a>
                          </li>
                          <li><a href="#">Danh sách đã lưu</a></li>
                          <li><a href="#">Blog<i className="ti-angle-down" /></a>
                            <ul className="dropdown">
                              <li><a href="blog-single-sidebar.html">Lịch ra sản phẩm mới</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}

export default HeaderDefault;