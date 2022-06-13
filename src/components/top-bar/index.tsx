function TopBar() {
    return (
      <div>
        <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="top-left">
                <ul className="list-main">
                  <li><i className="ti-headphone-alt" /> +060 (800) 801-582</li>
                  <li><i className="ti-email" /> thaopt@beetsoft.com.vn</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="right-content">
                <ul className="list-main">
                  <li><i className="ti-user" /> <a href="/signup">Đăng kí</a></li>
                  <li><i className="ti-power-off" /><a href="/signin">Đăng nhập</a></li>
                  <li><i className="ti-user" /><a href="/create-phone">Thêm mới sản phẩm</a></li>
                  <li><i className="ti-power-off" /><a href="/signin">Đăng xuất</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              <div className="logo">
                <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
              </div>
              <div className="search-top">
                <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                <div className="search-top">
                  <form className="search-form">
                    <input type="text" placeholder="Search here..." name="search" />
                    <button value="search" type="submit"><i className="ti-search" /></button>
                  </form>
                </div>
              </div>
              <div className="mobile-nav" />
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <select>
                    <option>Điện thoại</option>
                    <option>Laptop</option>
                    <option>Đồng hồ</option>
                  </select>
                  <form>
                    <input name="search" placeholder="Tìm kiếm sản phẩm....." type="search" />
                    <button className="btnn"><i className="ti-search" /></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                </div>
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                </div>
                <div className="sinlge-bar ">
                  <a href="/create-phone" className="single-icon"><i className="ti-bag" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
}

export default TopBar;