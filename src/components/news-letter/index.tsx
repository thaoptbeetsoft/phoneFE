function Newsletter() {
    return ( 
        <section className="shop-newsletter section">
        <div className="container">
          <div className="inner-top">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-12">
                <div className="inner">
                  <h4>Bảng tin</h4>
                  <p> Miễn phí <span>100%</span> phí ship cho khách hàng mua lần đầu</p>
                  <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                    <input name="EMAIL" placeholder="Địa chỉ email" required type="email" />
                    <button className="btn">Đăng kí kênh youtube</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     );
}

export default Newsletter;