import { Component } from 'react'
import Phone from '../../../../model/Phone';
import PhoneService from '../../../../service/PhoneService';
type Props={}
type State ={phone: Phone};
export default class DeletePhone extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.deletePhone=this.deletePhone.bind(this);
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
    }
    componentDidMount(){
      let id: any;
      id = new URLSearchParams(window.location.search).get('id');
        PhoneService.findById(id).then((response: any)=>{
            this.setState({
                phone: response.data
            })
        })
    }
    deletePhone(){
      let id: any;
      id = new URLSearchParams(window.location.search).get('id');
      console.log(id);
        // PhoneService.deletePhone(this.props.match.params.id).then((response:any)=>{
        //    
        // })
    }
  render() {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="">
              <div className="card-body">
                  <div className="form-group">
                    <label className='form-group-label'>Name: {this.state.phone.name}</label>
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Company: {this.state.phone.company}</label>
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Chip: {this.state.phone.chip}</label>
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Ram: {this.state.phone.ram}</label>
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Price: {this.state.phone.price} </label>
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Price Old: {this.state.phone.price}</label>
                  </div>
                  <div className="form-group">
                    <label className='form-group-label'>Img: {this.state.phone.img}</label>
                  </div>
                  <button className="btn btn-success" onClick={this.deletePhone}>Delete</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
