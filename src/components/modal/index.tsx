function Modal() {
    return (
<div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true" /></button>
      </div>
      <div className="modal-body">
        <div className="row no-gutters">
          <div className="col-lg-6 offset-lg-3 col-12">
            <h4 style={{marginTop: '100px', fontSize: '30px', fontWeight: 700, color: '#F7941D', display: 'block', marginBottom: '5px'}}>Thông tin chi tiết sản phẩm</h4>
            <h3 style={{fontSize: '20px', color: '#333'}}>Hello mọi người người thông tin chi tiết chưa có</h3>
            <p style={{display: 'block', marginTop: '20px', color: '#888', fontSize: '14px', fontWeight: 400}}>Mô tả sản phẩm</p>
            <div className="button" style={{marginTop: '30px'}}>
              <a href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/" target="_blank" className="btn" style={{color: '#fff'}}>Mua ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      );
}

export default Modal;