import TopBar from "../top-bar";

function Header() {
    return (
        <header className="header shop">
            <TopBar />
            <div className="header-inner">
                <div className="container">
                    <div className="cat-nav-head">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-area">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="navbar-collapse">
                                            <div className="nav-inner">
                                                <ul className="nav main-menu menu navbar-nav">
                                                    <li className="active"><a href="/">Trang chủ</a></li>
                                                    <li><a href="#">Thêm mới</a>
                                                        <ul className="dropdown">
                                                            <li><a href="create-phone">Điện thoại</a></li>
                                                            <li><a href="create-laptop">Laptop</a></li>
                                                            <li><a href="create-headphone">Tai nghe</a></li>
                                                            <li><a href="create-speaker">Loa</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Blog<i className="ti-angle-down"></i></a>
                                                        <ul className="dropdown">
                                                            <li><a href="blog-single-sidebar.html">Tạo</a></li>
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

export default Header;