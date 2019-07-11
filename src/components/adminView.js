import React, { Component } from 'react';
import Header from './header';
import { getProducts } from '../api_requests/requests';
import '../App.css';
import { Link } from 'react-router-dom';

class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.renderProducts = this.renderProducts.bind(this);
  }

  async componentDidMount() {
    let products = await getProducts();
    this.setState({
      products: products.products
    })
  }


  renderProducts() {
    return (
      this.state.products.map((p, i) => {
        return (
          <tr key={i}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.img}</td>
            <td>{p.stock}</td>
            <td>{p.tax}</td>
            <td>
              <Link to={`/editar/${p.id}`}>
                <button className="btn btn-primary">Editar</button>
              </Link>
            </td>
            <td>
              <button className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: '2%' }}>
          <div>
            <input placeholder="Nombre" id="name" />
            <input placeholder="Precio" type="number" id="price" />
            <input placeholder="Imagen URL" id="img" />
            <input placeholder="Stock" type="number" id="stock" />
            <input placeholder="Impuesto" type="number" id="tax" />
            <button>Agregar</button>
          </div>

          <div>
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Stock</th>
                  <th>Impuesto</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderProducts()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminView;