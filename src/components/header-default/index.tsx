function HeaderDefault() {
    return (  
        <header className="header shop">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="top-left">
                  <ul className="list-main">
                    <li><i className="ti-headphone-alt" /> +060 (800) 801-582</li>
                    <li><i className="ti-email" /> support@shophub.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                <div className="right-content">
                  <ul className="list-main">
                    <li><i className="ti-location-pin" /> Địa chỉ</li>
                    <li><i className="ti-user" /> <a href="#">Đăng kí</a></li>
                    <li><i className="ti-power-off" /><a href="login.html#">Đăng nhập</a></li>
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
                      <option >Thể loại</option>{/*/selected={selected}*/}
                      <option>Đồng hồ</option>
                      <option>Điện thoại</option>
                      <option>Laptop</option>
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
                  <div className="sinlge-bar shopping">
                    <a href="#" className="single-icon"><i className="ti-bag" /> <span className="total-count">2</span></a>
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>2 Items</span>
                        <a href="#">View Cart</a>
                      </div>
                      <ul className="shopping-list">
                        <li>
                          <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                          <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                          <h4><a href="#">Woman Ring</a></h4>
                          <p className="quantity">1x - <span className="amount">$99.00</span></p>
                        </li>
                        <li>
                          <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                          <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                          <h4><a href="#">Woman Necklace</a></h4>
                          <p className="quantity">1x - <span className="amount">$35.00</span></p>
                        </li>
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">$134.00</span>
                        </div>
                        <a href="checkout.html" className="btn animate">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-inner">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <div className="col-lg-3">
                  <div className="all-category">
                    <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true" />Menu</h3>
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
                            <li><a href="#">Sản phẩm<i/><span className="new">Mới ra</span></a>
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