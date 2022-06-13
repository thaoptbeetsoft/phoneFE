import { Select } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import Laptop from '../../model/Laptop';
import LaptopService from '../../service/LaptopService';
import UploadFilebase from '../upload/UploadFilebase';

function AddLaptop() {
    const initialLaptopState = {
        name: '',
        ram: 0,
        company: '',
        cpu: '',
        card: '',
        hardDrive: '',
        price: 0,
        priceOld: 0,
        img: ''
    }

    const [laptop, setLaptop] = useState<Laptop>(initialLaptopState);

    const [urlImage, setUrlImage] = useState('');

    const [company, setCompany] = useState('Apple');
    const updateUrlImage = (url: string) => {
        setUrlImage(url);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLaptop({ ...laptop, [name]: value });
    }

    const handleSubmit = () => {
        const data: Laptop = {
            name: laptop.name,
            ram: laptop.ram,
            company: company,
            cpu: laptop.cpu,
            card: laptop.card,
            hardDrive: laptop.hardDrive,
            price: laptop.price,
            priceOld: laptop.priceOld,
            img: urlImage
        }
        console.log("data:",data);
        LaptopService.create(data).then((response) => {
            setUrlImage("");
            setLaptop(initialLaptopState);
            alert("Ok");
        }).catch((e: Error) => {
            console.log(e);
        })
    }

    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bread-inner">
                                <ul className="bread-list">
                                    <li><a href="/">Home<i className="ti-arrow-right" /></a></li>
                                    <li className="active"><a href="create-phone">Thêm laptop</a></li>
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
                                                    <label>Hãng sản xuất:</label>
                                                    <Select id="company" name="company" onChange={(e)=>setCompany(e.target.value)}>
                                                        <option value="Apple" >Macbook</option>
                                                        <option value="Samsung">Samsung</option>
                                                        <option value="Dell">Dell</option>
                                                        <option value="ASUS">ASUS</option>
                                                        <option value="Hp">Hp</option>
                                                        <option value="Lenovo">Lenovo</option>
                                                        <option value="Lg">Lg</option>
                                                        <option value="Microsoft Surface">Microsoft Surface</option>
                                                        <option value="Acer">Acer</option>
                                                        <option value="Huawei">Huawei</option>
                                                        <option value="MSI">MSI</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Tên laptop:</label>
                                                    <input type="text" id="name" placeholder="Tên laptop" name="name" value={laptop.name} required onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="ram">Ram:</label>
                                                    <input type="number" id="ram" name="ram" placeholder="Ram" required value={laptop.ram} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="cpu">Cpu:</label>
                                                    <input type="text" id="cpu" name="cpu" placeholder="Cpu" required value={laptop.cpu} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="card">Card:</label>
                                                    <input type="text" id="card" name="card" placeholder="Card" required value={laptop.card} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="hardDrive">HardDrive:</label>
                                                    <input type="text" id="hardDrive" name="hardDrive" placeholder="HardDrive" required value={laptop.hardDrive} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="price">Giá mới</label>
                                                    <input type="number" id="price" name="price" placeholder="Giá mới" required value={laptop.price} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="priceOld">Giá cũ</label>{/*htmlFor để khi click vào giá cũ và nhập nó cũng tự động nhập vào o input có id là priceOld*/}
                                                    <input type="number" id="priceOld" name="priceOld" placeholder="Giá cũ" value={laptop.priceOld} required onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <UploadFilebase urlImage={urlImage} product={"laptop"} updateUrlImage={updateUrlImage} />
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
    );
}

export default AddLaptop;