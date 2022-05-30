function ShowService() {
    return ( 
<section className="shop-services section home">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service">
          <i className="ti-rocket" />
          <h4>Free ship</h4>
          <p>Đơn trên 10 triệu</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service">
          <i className="ti-reload" />
          <h4>Miễn phí đổi trả </h4>
          <p>Trong vòng 30 ngày</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service">
          <i className="ti-lock" />
          <h4>Hình thức ship COD</h4>
          <p>Thanh toán an toàn</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service">
          <i className="ti-tag" />
          <h4>Giá ưu đãi</h4>
          <p>Hỗ trợ giá tốt nhất</p>
        </div>
      </div>
    </div>
  </div>
</section>
     );
}

export default ShowService;