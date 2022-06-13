import { useEffect, useState } from "react";
import Laptop from "../../model/Laptop";
import Phone from "../../model/Phone";
import LaptopService from "../../service/LaptopService";
import PhoneService from "../../service/PhoneService";
// import ReactPaginate from "react-paginate";

function ProductArea(): JSX.Element {
  const initialPhoneState: Phone = {
    name: '',
    company: '',
    chip: '',
    ram: 0,
    price: 0,
    priceOld: 0,
    img: '',
  }

  const [phones, setPhones] = useState<Array<Phone>>([]);
  const [laptops, setLaptops] = useState<Array<Laptop>>([]);
  const [phone, setPhone] = useState<Phone>(initialPhoneState);

  useEffect(() => {
    findAllPhone();
    findAllLaptop();
  }, []);


  const findAllPhone = () => {
    PhoneService.findAll().then((response) => {
      setPhones(response.data);
    }).catch((e: Error) => {
      console.log(e);
    })
  }


  const findAllLaptop = () => {
    LaptopService.findAll().then((response) => {
      setLaptops(response.data);
    }).catch((e: Error) => {
      console.log(e);
    })
  }


  const listLaptopHtml = () => {
    return (
      laptops.map((laptop) => (
        <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={laptop.id}>
          <div className="single-product">
            <div className="product-img">
              <a href="product-details.html">
                <img className="default-img" src={laptop.img} alt="#" />
              </a>
              <div className="button-head">
                <div className="product-action">
                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Thông tin chi tiết</span></a>
                  <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Thêm vào dang sách yêu thích</span></a>
                  <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Thêm vào danh sách so sánh</span></a>
                </div>
                <div className="product-action-2">
                  <a title="Add to cart" href="#">Mua ngay</a>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="product-details.html">{laptop.name}</a></h3>
              <div className="product-price">
                <span className="old">{laptop.priceOld}</span>
                <span>{laptop.price} đ</span>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  }

  const modalPhone = (id: string | undefined) => {
    PhoneService.findById(id).then((response) => {
      setPhone(response.data);
    })
  }

  const listPhoneHtml = () => {
    return (
      phones.map((phone) => (
        <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={phone.id}>
          <div className="single-product">
            <div className="product-img">
              <a href="product-details.html">
                <img className="default-img" src={phone.img} alt="Loading" />
              </a>
              <div className="button-head">
                <div className="product-action">
                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href='' onClick={() => modalPhone(phone.id)} ><i className=" ti-eye" /><span>Thông tin chi tiết</span></a>
                  <a title="Wishlist" href=""><i className=" ti-heart " /><span>Thêm vào danh sách yêu thích</span></a>
                  <a title="Compare" href=""><i className="ti-bar-chart-alt" /><span>Thêm vào danh sách để so sánh</span></a>
                </div>
                <div className="product-action-2">
                  <a title="Add to cart" href="#">Mua ngay</a>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h3><a href="product-details.html">{phone.name}</a></h3>
              <div className="product-price">
                <span className="old">{phone.priceOld}</span>
                <span>{phone.price} đ</span>
              </div>
            </div>
          </div>
        </div>

      ))
    )
  }
  return (
    <>
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Thịnh Hành</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#phone" role="tab">Điện thoại</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#laptop" role="tab">Máy tính</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#ipad" role="tab">Ipad</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#smart-watch" role="tab">Đồng hồ thông minh</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessory" role="tab">Phụ kiện</a></li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="phone" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        {
                          listPhoneHtml()
                        }   
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="laptop" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        {
                          listLaptopHtml()
                        }
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="ipad" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href=""><i className=" ti-eye" /><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="smart-watch" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="accessory" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true" /></button>
            </div>
            <div className="modal-body">
              <div className="row no-gutters">
                <div className="col-lg-6 offset-lg-3 col-12">
                  <h4 style={{ marginTop: '100px', fontSize: '30px', fontWeight: 700, color: '#F7941D', display: 'block', marginBottom: '5px' }}>{phone.name}</h4>
                  <p style={{ display: 'block', marginTop: '20px', color: '#888', fontSize: '14px', fontWeight: 400 }}>Hãng:{phone.company}</p>
                  <p style={{ display: 'block', marginTop: '20px', color: '#888', fontSize: '14px', fontWeight: 400 }}>Chip:{phone.chip}</p>
                  <p style={{ display: 'block', marginTop: '20px', color: '#888', fontSize: '14px', fontWeight: 400 }}>Ram:{phone.ram}</p>
                  <div className="button" style={{ marginTop: '30px' }}>
                    <a href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/" target="_blank" className="btn" style={{ color: '#fff' }}>Mua ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProductArea;