import { Select } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import Phone from "../../model/Phone";
import PhoneService from "../../service/PhoneService";
import UploadFilebase from "../upload/UploadFilebase";

const LoginPage: React.FC = () => {
  const initialPhoneState = {
    name: " ",
    chip: " ",
    ram: 0,
    price: 0,
    priceOld: 0,
  }
  const [phone, setPhone] = useState<Phone>(initialPhoneState);
  const [company, setCompany] = useState("Apple");
  const [type, setType] = useState("phone");
  const [old, setOld] = useState(1);
  const [urlImage, setUrlImage] = useState("");//lấy dữ liệu từ dưới componet UploadFilebase

  const updateUrlImage = (url: string) => {
    setUrlImage(url);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPhone({ ...phone, [name]: value });
    console.log(name, value);

  };


  const handleSubmit = () => {
  
    const data: Phone = {
      name: phone.name,
      company: company,
      chip: phone.chip,
      ram: phone.ram,
      price: phone.price,
      priceOld: phone.priceOld,
      img: urlImage,
      type: type,
      old: old
    }
    PhoneService.create(data).then((response)=>{
      setUrlImage("");//set lại dữ liệu cho UrlImage là rỗng
      setPhone(initialPhoneState);
      alert("Ok");
    }).catch((e: Error) => {
      console.log(e);
    });

  }

  return (
    <>
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bread-inner">
                  <ul className="bread-list">
                    <li><a href="/">Home<i className="ti-arrow-right" /></a></li>
                    <li className="active"><a href="create-phone">Thêm điện thoại</a></li>
                  </ul>
                </div>
              </div>    
            </div>
          </div>
        </div>
        <section className="shop checkout section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="checkout-form">
                  <h2>Thêm mới sản phẩm</h2>
                  <p></p>
                  <div className="form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label style={{ "marginRight": "13px" } as React.CSSProperties}>Hãng sản xuất:</label>
                          <Select id="company" name="company" onChange={(e) => setCompany(e.target.value)}>
                            <option value="Apple" >Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Xiaomi">Xiaomi</option>
                            <option value="OPPO">OPPO</option>
                            <option value="Nokia">Nokia</option>
                            <option value="Sony">Sony</option>
                            <option value="Lg">Lg</option>
                            <option value="Realme">Realme</option>
                            <option value="Vivo">Vivo</option>
                            <option value="ASUS">ASUS</option>
                            <option value="Vsmart">Vsmart</option>
                            <option value="BlackBerry">BlackBerry</option>
                            <option value="Oneplus">Oneplus</option>
                            <option value="Philips">Philips</option>
                            <option value="Bphone">Bphone</option>
                            <option value="ZTE">ZTE</option>
                            <option value="Google">Google</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Masstel">Masstel</option>
                          </Select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label>Tình trạng hàng:</label>
                          <Select id="old" name="old" onChange={(e) => setOld(Number(e.target.value))}>
                            <option value="1" >Hàng mới</option>
                            <option value="2" >Hàng trôi bảo hành</option>
                            <option value="3">Hàng cũ</option>
                            <option value="4">Hàng trưng bày</option>
                          </Select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label style={{ "marginRight": "60px" } as React.CSSProperties} >Thể loại:</label>
                          <Select id="type" name="type" onChange={(e) => setType(e.target.value)}>
                            <option value="phone" >Điện thoại</option>
                            <option value="tablet" >Máy tính bảng</option>
                          </Select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="name">Tên điện thoại</label>
                          <input type="text" id="name" placeholder="Tên điện thoại" name="name" value={phone.name} required onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="chip">Chip</label>
                          <input type="text" id="chip" name="chip" placeholder="Chip" required value={phone.chip} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="ram">Ram</label>
                          <input type="number" id="ram" name="ram" placeholder="Ram" required value={phone.ram} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="price">Giá mới</label>
                          <input type="number" id="price" name="price" placeholder="Giá mới" required value={phone.price} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="priceOld">Giá cũ</label>{/*htmlFor để khi click vào giá cũ và nhập nó cũng tự động nhập vào o input có id là priceOld*/}
                          <input type="number" id="priceOld" name="priceOld" placeholder="Giá cũ" value={phone.priceOld} required onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12">
                        <UploadFilebase urlImage={urlImage} product={"phone"} updateUrlImage={updateUrlImage} />
                      </div>
                      <div className="col-12">
                        <div className="button">
                          <button className="btn" onClick={handleSubmit}>Thêm mới sản phẩm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="order-details">
                  <div className="single-widget">
                    <h2>CART  TOTALS</h2>
                    <div className="content">
                      <ul>
                        <li>Sub Total<span>$330.00</span></li>
                        <li>(+) Shipping<span>$10.00</span></li>
                        <li className="last">Total<span>$340.00</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-widget payement">
                    <div className="content">
                      <img src="images/payment-method.png" alt="#" />
                    </div>
                  </div>
                  <div className="single-widget get-button">
                    <div className="content">
                      <div className="button">
                        <a href="aaaaa" className="btn">proceed to checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </>
  );
}

export default LoginPage;