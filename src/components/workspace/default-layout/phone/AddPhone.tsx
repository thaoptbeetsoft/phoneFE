import React, { Component} from 'react'
import Phone from '../../../../model/Phone';

type Props = {};
type State = Phone;
export default class AddPhone extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
    this.changeChipHandler = this.changeChipHandler.bind(this);
    this.changeRamHandler = this.changeRamHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changePriceOldHandler = this.changePriceOldHandler.bind(this);
    this.changeImgHandler = this.changeImgHandler.bind(this);
    this.savePhone = this.savePhone.bind(this);
    this.state = {
      name: '',
      company: '',
      chip: '',
      ram: 0,
      price: 0,
      priceOld: 0,
      img: '',
    }
  }

  savePhone=(e: any)=> {
    e.preventDefault();//ngăn chăn khi save thì sẽ tạo ra trang mới 
    const phone: Phone ={
      name: this.state.name,
      company: this.state.company,
      chip: this.state.chip,
      ram: this.state.ram,
      price: this.state.price,
      priceOld: this.state.priceOld,
      img: this.state.img
    }
    console.log('Phone ==>'+ JSON.stringify(phone));
    // window.location.reload();
    // PhoneService.create(phone).then((response: any)=>{
    //   this.setState({
    //     name: '',
    //     company: '',
    //     chip: '',
    //     ram: 0,
    //     price: 0,
    //     priceOld: 0,
    //     img: '',
    //   })
    // })
    
  }
  changeNameHandler = (event: any) => {
    this.setState({ name: event.target.value });
  }
  changeCompanyHandler = (event: any) => {
    this.setState({ company: event.target.value });
  }
  changeChipHandler = (event: any) => {
    this.setState({ chip: event.target.value });
  }
  changeRamHandler = (event: any) => {
    this.setState({ ram: event.target.value });
  }
  changePriceHandler = (event: any) => {
    this.setState({ price: event.target.value });
  }
  changePriceOldHandler = (event: any) => {
    this.setState({ priceOld: event.target.value });
  }
  changeImgHandler = (event: any) => {
    this.setState({ img: event.target.value });
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
                      value={this.state.name} onChange={this.changeNameHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Company: </label>
                    <input placeholder="Company" name="company" className="form-control"
                      value={this.state.company} onChange={this.changeCompanyHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Chip:</label>
                    <input placeholder="Chip" name="chip" className="form-control"
                      value={this.state.chip} onChange={this.changeChipHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Ram:</label>
                    <input placeholder="Ram" name="ram" className="form-control"
                      value={this.state.ram} onChange={this.changeRamHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Price:</label>
                    <input placeholder="Price" name="price" className="form-control"
                      value={this.state.price} onChange={this.changePriceHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Price Old:</label>
                    <input placeholder="Price Old" name="priceOld" className="form-control"
                      value={this.state.priceOld} onChange={this.changePriceOldHandler} />
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Img:</label>
                    <input placeholder="Img" name="img" className="form-control"
                      value={this.state.img} onChange={this.changeImgHandler} />
                  </div>

                  <button className="btn btn-success" onClick={this.savePhone}>Save</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
