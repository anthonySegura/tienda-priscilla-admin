import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import OrdersView from './components/ordersView';
import EditView from './components/editView';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/editar/:id" component={EditView}/>
      <Route path="/pedidos" component={OrdersView}/>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
