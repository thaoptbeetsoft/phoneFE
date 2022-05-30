import { useEffect, useState } from "react";
import Phone from "../../model/Phone";
import PhoneService from "../../service/PhoneService";

function MostPopular() {
  const [phones, setPhones] = useState<Array<Phone>>([]);
  useEffect(() => {
    findAllPhone();
    console.log("call API");
  }, [])

  const listPhoneHtml = () => {
    return (
      phones.map((phone) => (
      <div className="single-product" key={phone.id}>
        <div className="product-img">
          <a href="product-details.html">
            <img className="default-img" src="https://via.placeholder.com/550x750" height="750px" width="550px" alt="#" />
            <span className="out-of-stock">Hot</span>
          </a>
          <div className="button-head">
            <div className="product-action">
              <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Thông tin chi tiết</span></a>
              <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Thêm vào danh sách yêu thích</span></a>
              <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Thêm vào danh sách so sánh</span></a>
            </div>
            <div className="product-action-2">
              <a title="Add to cart" href="#">Add to cart</a>
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
    )));
  }


  const findAllPhone = () => {
    PhoneService.findAll().then((response) => {
      setPhones(response.data);
      console.log("Data",response.data);
    }).catch((e: Error) => {
      console.log(e);
    })
  }
  return (
    <div className="product-area most-popular section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Hàng bán chạy</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel popular-slider">
              {
                listPhoneHtml()
              }
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default MostPopular;