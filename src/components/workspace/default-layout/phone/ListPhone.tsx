import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Phone from '../../../../model/Phone';
import PhoneService from '../../../../service/PhoneService';
type Props = {};
type State = {
  phones: Array<Phone>
};
export default class ListPhone extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      phones: []
    };
  }
  
  componentDidMount() {
    PhoneService.findAll().then((response: any) => {
      this.setState({
        phones: response.data
      });
      console.log(response.data);
    }).catch((e: Error) => {
      console.log(e);
    });
  }

  render() {
    return (
      // <div className='list-phone'>
      //     <div className='add-phone'>
      //         <Link to={"/add"} className="badge">Add Phone</Link>
      //         </div>
      //     <table className='table'>
      //       <thead>
      //               <tr>
      //                 <th>TT</th>
      //                 <th>Name</th>
      //                 <th>Company</th>
      //                 <th>Chip</th>
      //                 <th>Ram</th>
      //                 <th>Price</th>
      //                 <th>Price Old</th>
      //                 <th> Img</th>
      //                 <th>Edit</th>
      //                 <th>Delete</th>
      //             </tr>
      //       </thead>

      //     <tbody>
      //           {
      //             this.state.phones.map(
      //                 phone =>
      //                     <tr key={phone.id}>
      //                         <td>{phone.id}</td>
      //                         <td>{phone.name}</td>
      //                         <td>{phone.company}</td>
      //                         <td>{phone.chip}</td>
      //                         <td>{phone.ram}</td>
      //                         <td>{phone.price}</td>
      //                         <td>{phone.priceOld}</td>
      //                         <td><img src={phone.img} alt="Phone img" /></td>
      //                         <td> <Link to={"/update/" + phone.id} >Edit</Link></td>
      //                         <td><Link to={"/view/" + phone.id} >Delete</Link></td>
      //                     </tr>

      //             )}
      //     </tbody>



      //     </table>
      // </div>
      <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="single-product-widget">
                <h2 className="product-wid-title">List Phone</h2>
                {
                  this.state.phones.map(
                      phone =>
                <div className="single-wid-product" key={phone.id}>
                  <Link to={"/view?id=" + phone.id} ><img src={phone.img} alt="" className="product-thumb" /></Link>
                  <h2><a href="single-product.html">{phone.name}</a></h2>
                  <div className="product-wid-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product-wid-price">
                    <i>{phone.price}đ </i>
                     <del>{phone.priceOld}</del>
                  </div>
                </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
