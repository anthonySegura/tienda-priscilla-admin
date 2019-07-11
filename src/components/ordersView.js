import React, { Component } from 'react';
import Header from './header';
import {getOrders} from '../api_requests/requests';

class OrdersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  async componentDidMount() {
    let orders = await getOrders();
    this.setState({
      orders: orders.orders
    });
  }
  

  renderOrders () {
    return (
      this.state.orders.map((p, i) => {
        return (
          <tr>
            <td>{p.id}</td>
            <td>{p.address}</td>
            <td>{p.email}</td>
            <td>
              <input type="checkbox" checked={p.state === 'pendiente'}/>
            </td>
            <td>
              <input type="checkbox" checked={p.state === 'despachado'}/>
            </td>
            <td>
              <input type="checkbox" checked={p.state === 'entregado'}/>
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
        <div>
          <table className="table text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dirección</th>
                <th>Email</th>
                <th>Pendiente</th>
                <th>Despachado</th>
                <th>Entregado</th>
              </tr>
            </thead>
            <tbody>
              {this.renderOrders()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OrdersView;