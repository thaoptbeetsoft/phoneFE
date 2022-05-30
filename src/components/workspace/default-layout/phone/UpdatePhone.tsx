import { Component } from 'react'
import Phone from '../../../../model/Phone';
import PhoneService from '../../../../service/PhoneService';
type Props = {};
type State = { phone: Phone };
export default class UpdatePhone extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
    this.changeChipHandler = this.changeChipHandler.bind(this);
    this.changeRamHandler = this.changeRamHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changePriceOldHandler = this.changePriceOldHandler.bind(this);
    this.changeImgHandler = this.changeImgHandler.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.state = {
      phone: {
        name: '',
        company: '',
        chip: '',
        ram: 0,
        price: 0,
        priceOld: 0,
        img: '',
      }

    }
    console.log(this.state);
  }

  updatePhone = (e: any) => {
    e.preventDefault();//ngăn chăn khi save thì sẽ tạo ra trang mới 
    const phone: Phone = {
      name: this.state.phone.name,
      company: this.state.phone.company,
      chip: this.state.phone.chip,
      ram: this.state.phone.ram,
      price: this.state.phone.price,
      priceOld: this.state.phone.priceOld,
      img: this.state.phone.img
    }
    console.log('Phone ==>' + JSON.stringify(phone));
    // window.location.reload();
    // window.location.reload();
    // PhoneService.create(phone).then((response: any)=>{
    //  alert("OK");
    // });
  }

  componentDidMount() {
    let id: any;
     id = new URLSearchParams(window.location.search).get('id');
     console.log(id);
    PhoneService.findById(id).then((response: Phone | any) => {
      this.setState({
        phone: response.data
      });
    })
    // const id = new URLSearchParams(window.location.search).get('id') lấy dữ liệu trên đường dẫn kiểu pram

  }
  changeNameHandler = (event: any) => {
    this.setState( function (prevState) {
      return {
        phone: {
          ...prevState.phone,//(khi không có thẻ form thì cần)chỉ thay đổi một thành phần thì dùng và nó sẽ tự động lấy những thành phần cũ set vào cho thành phần mới
          name: event.target.value
      },
    };
    });
  }
  changeCompanyHandler = (event: any) => {
    this.setState( function (prevState) {
      return {
        phone: {
          ...prevState.phone,//(khi không có thẻ form thì cần)chỉ thay đổi một thành phần thì dùng và nó sẽ tự động lấy những thành phần cũ set vào cho thành phần mới
          company: event.target.value
      },
    };
    });
  }
  changeChipHandler = (event: any) => {
    this.setState( function (prevState) {
      return {
        phone: {
          ...prevState.phone,//(khi không có thẻ form thì cần)chỉ thay đổi một thành phần thì dùng và nó sẽ tự động lấy những thành phần cũ set vào cho thành phần mới
          chip: event.target.value
      },
    };
    });
  }
  changeRamHandler = (event: any) => {
    this.setState( function (prevState) {
      return {
        phone: {
          ...prevState.phone,//(khi không có thẻ form thì cần)chỉ thay đổi một thành phần thì dùng và nó sẽ tự động lấy những thành phần cũ set vào cho thành phần mới
          ram: event.target.value
      },
    };
    });
  }
  changePriceHandler = (event: any) => {
    this.setState( function (prevState) {
      return {
        phone: {
          ...prevState.phone,//(khi không có thẻ form thì cần)chỉ thay đổi một thành phần thì dùng và nó sẽ tự động lấy những thành phần cũ set vào cho thành phần mới
          price: event.target.value
      },
    };
    });
  }
  changePriceOldHandler = (event: any) => {
    this.setState( function (prevState) {
      return {
        phone: {
          ...prevState.phone,//(khi không có thẻ form thì cần)chỉ thay đổi một thành phần thì dùng và nó sẽ tự động lấy những thành phần cũ set vào cho thành phần mới
          priceOld: event.target.value
      },
    };
    });
  }
  changeImgHandler = (event: any) => {
    this.setState( function (prevState) {
      return {
        phone: {
          ...prevState.phone,//(khi không có thẻ form thì cần)chỉ thay đổi một thành phần thì dùng và nó sẽ tự động lấy những thành phần cũ set vào cho thành phần mới
          img: event.target.value
      },
    };
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className='form-group-label'>Name: </label>
                    <input placeholder="Name" name="name" className="form-control"
                      value={this.state.phone.name} onChange={this.changeNameHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Company: </label>
                    <input placeholder="Company" name="company" className="form-control"
                      value={this.state.phone.company} onChange={this.changeCompanyHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Chip:</label>
                    <input placeholder="Chip" name="chip" className="form-control"
                      value={this.state.phone.chip} onChange={this.changeChipHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Ram:</label>
                    <input placeholder="Ram" name="ram" className="form-control"
                      value={this.state.phone.ram} onChange={this.changeRamHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Price:</label>
                    <input placeholder="Price" name="price" className="form-control"
                      value={this.state.phone.price} onChange={this.changePriceHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Price Old:</label>
                    <input placeholder="Price Old" name="priceOld" className="form-control"
                      value={this.state.phone.price} onChange={this.changePriceOldHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Img:</label>
                    <input placeholder="Img" name="img" className="form-control"
                      value={this.state.phone.img} onChange={this.changeImgHandler} />
                  </div>
                  <button className="btn btn-success" onClick={this.updatePhone}>Save</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
