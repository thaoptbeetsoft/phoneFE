import { useEffect, useState } from "react";
import Phone from "../../model/Phone";
import PhoneService from "../../service/PhoneService";

function ProductArea() {
  const [phones, setPhones] = useState<Array<Phone>>([]);

  useEffect(() => {
    findAllPhone();
  }, []);

  const findAllPhone = () => {
    PhoneService.findAll().then((response) => {
      setPhones(response.data);
      console.log("Data", response.data);
    }).catch((e: Error) => {
      console.log(e);
    })
  }
  const listPhoneHtml = () => {
    return (
      phones.map((phone) => (
        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
          <div className="single-product">
            <div className="product-img">
              <a href="product-details.html">
                <img className="default-img" src={phone.img} alt="#" />
              </a>
              <div className="button-head">
                <div className="product-action">
                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Thông tin chi tiết</span></a>
                  <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Thêm vào danh sách yêu thích</span></a>
                  <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Thêm vào danh sách để so sánh</span></a>
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
                <span>{phone.price}</span>
              </div>
            </div>
          </div>
        </div>

      ))
    )
  }
  return (
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
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Điện thoại</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Máy tính</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Ipad</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Đồng hồ thông minh</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Phụ kiện</a></li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="man" role="tabpanel">
                  <div className="tab-single">
                    <div className="row">
                      {
                        listPhoneHtml()
                      }
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="women" role="tabpanel">
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
                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="new">New</span>
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
                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="price-dec">30% Off</span>
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
                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="out-of-stock">Hot</span>
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
                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                            <div className="product-price">
                              <span className="old">$60.00</span>
                              <span>$50.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="kids" role="tabpanel">
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
                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="new">New</span>
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
                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="price-dec">30% Off</span>
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
                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="out-of-stock">Hot</span>
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
                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                            <div className="product-price">
                              <span className="old">$60.00</span>
                              <span>$50.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="accessories" role="tabpanel">
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
                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="new">New</span>
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
                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="price-dec">30% Off</span>
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
                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="out-of-stock">Hot</span>
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
                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                            <div className="product-price">
                              <span className="old">$60.00</span>
                              <span>$50.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="essential" role="tabpanel">
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
                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="new">New</span>
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
                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="price-dec">30% Off</span>
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
                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="out-of-stock">Hot</span>
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
                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                            <div className="product-price">
                              <span className="old">$60.00</span>
                              <span>$50.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="prices" role="tabpanel">
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
                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="new">New</span>
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
                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="price-dec">30% Off</span>
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
                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              <span className="out-of-stock">Hot</span>
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
                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                            <div className="product-price">
                              <span className="old">$60.00</span>
                              <span>$50.00</span>
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

  );
}

export default ProductArea;