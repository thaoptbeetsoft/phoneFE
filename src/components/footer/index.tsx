function Footer() {
    return ( 
        <footer className="footer">
        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="single-footer about">
                  <div className="logo">
                    <a href="index.html"><img src="images/logo2.png" alt="#" /></a>
                  </div>
                  <p className="text">Chúng tôi cam kết sản phẩn chính hãng</p>
                  <p className="call">Khiếu nại<span><a href="tel:123456789">+0123 456 789</a></span></p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer links">
                  <h4>Thông tin</h4>
                  <ul>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Câu hỏi thường gặp</a></li>
                    <li><a href="#">Điều khoản &amp; Dịch vụ</a></li>
                    <li><a href="#">Liên hệ với chúng tôi</a></li>
                    <li><a href="#">Trợ giúp</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer links">
                  <h4>Dịch vụ khách hàng</h4>
                  <ul>
                    <li><a href="#">Chính sách bảo hành</a></li>
                    <li><a href="#">Chính sách đổi trả</a></li>
                    <li><a href="#">Thu cũ đổi mới</a></li>
                    <li><a href="#">Chính sách mua hàng</a></li>
                    <li><a href="#">Chính sách sửa chữa</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer social">
                  <h4>Địa chỉ</h4>
                  <div className="contact">
                    <ul>
                      <li>488B - Hải Ninh - Hải Hậu - Nam Định</li>
                      <li>012 Vương quốc trên không</li>
                      <li>info@eshop.com</li>
                      <li>+032 3456 7890</li>
                    </ul>
                  </div>
                  <ul>
                    <li><a href="#"><i className="ti-facebook" /></a></li>
                    <li><a href="#"><i className="ti-twitter" /></a></li>
                    <li><a href="#"><i className="ti-flickr" /></a></li>
                    <li><a href="#"><i className="ti-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="left">
                    <p>Bản quyền © 2020 <a href="http://www.wpthemesgrid.com" target="_blank"> Kim Thị Hải Yến</a>  -  Chính sách được uỷ quyền Apple</p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="right">
                    <img src="images/payments.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
     );
}

export default Footer;