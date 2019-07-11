import React, { Component } from 'react';
import Header from './header';
import { getProduct } from '../api_requests/requests';

class EditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      img: '',
      stock: '',
      tax: ''
    }
    this.changeName = this.changeName.bind(this);
    this.chancePrice = this.chancePrice.bind(this);
    this.changeImg = this.changeImg.bind(this);
    this.changeStock = this.changeStock.bind(this);
    this.changeTax = this.changeTax.bind(this);
  }

  async componentDidMount() {
    const { params } = this.props.match;
    let productDetails = await getProduct(params.id);
    this.setState({
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.price,
      img: productDetails.img,
      stock: productDetails.stock,
      tax: productDetails.tax,
    });
  }

  changeName(event) {
    this.setState({
      name: event.target.value
    })
  }
  
  chancePrice(event) {
    this.setState({
      price: event.target.value
    })
  }

  changeImg(event) {
    this.setState({
      img: event.target.value
    })
  }

  changeStock(event) {
    this.setState({
      stock: event.target.value
    })
  }

  changeTax(event) {
    this.setState({
      tax: event.target.value
    })
  } 

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="col">
            <div className="card">
              <table>
                <tbody>
                  <tr>
                    <td> Nombre</td>
                    <td><input value={this.state.name} onChange={this.changeName}/></td>
                  </tr>
                  <tr>
                    <td> Precio</td>
                    <td><input value={this.state.price} onChange={this.chancePrice}/></td>
                  </tr>
                  <tr>
                    <td> Imagen</td>
                    <td><input value={this.state.img} onChange={this.changeImg}/></td>
                  </tr>
                  <tr>
                    <td> Stock</td>
                    <td><input value={this.state.stock} onChange={this.changeStock}/></td>
                  </tr>
                  <tr>
                    <td> Impuesto</td>
                    <td><input value={this.state.tax} onChange={this.changeTax}/></td>
                  </tr>
                  <tr>
                    <td>
                      <button>Actualizar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditView;