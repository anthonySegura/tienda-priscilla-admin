import React, { Component } from 'react';
import Header from './header';
import { getProducts, postProduct, deleteProduct as delProduct } from '../api_requests/requests';
import '../App.css';
import { Link } from 'react-router-dom';

class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.renderProducts = this.renderProducts.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  async componentDidMount() {
    this.loadProducts();
  }

  async loadProducts() {
    let products = await getProducts();
    this.setState({
      products: products.products
    })
  }

  async createProduct() {
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
    let img = document.querySelector('#img').value;
    let stock = document.querySelector('#stock').value;
    let tax = document.querySelector('#tax').value;

    await postProduct({
      name: name,
      price: price,
      img: img,
      stock: stock,
      tax: tax
    });
    alert('producto agregado')
    // Recarga los productos
    this.loadProducts();

  }

  async deleteProduct(id) {
    await delProduct(id);
    this.loadProducts();
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
              <button className="btn btn-danger"
                      onClick={(e) => this.deleteProduct(p.id)}>Eliminar</button>
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
            <button onClick={this.createProduct}>Agregar</button>
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