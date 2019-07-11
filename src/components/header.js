import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModalLogin from 'react-modal-login';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      user: {}
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
    this.afterTabsChange = this.afterTabsChange.bind(this);
  }


  openModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  onLoginSuccess(method, response) {
    console.log(response);
    console.log("logged successfully with " + method);
  }

  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }

  startLoading() {
    this.setState({
      loading: true
    });
  }

  finishLoading() {
    this.setState({
      loading: false
    });
  }

  afterTabsChange() {
    this.setState({
      error: null
    });
  }

  onLogin() {

  }

  onRegister() {

  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <Link to="/">
            <a class="navbar-brand" href="#">Administración de productos</a>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <Link to="/pedidos">
                <li class="nav-item">
                  <a class="nav-link" href="#">Pedidos</a>
                </li>
              </Link>
            </ul>
            <span className={this.state.logged ? "fa fa-sign-out" : "fa fa-sign-in"} onClick={this.openModal}>
              {this.state.logged ? this.state.user.email : ''}
            </span>
          </div>
        </nav>
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Datos incorrectos, por favor intente de nuevo"
          }}
          registerError={{
            label: "Hubo un error en el registro, por favor intente de nuevo."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            loginBtn: {
              label: "Iniciar Sesión"
            },
            registerBtn: {
              label: "Registrarse"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Contraseña',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'contraseña',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Contraseña',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'contraseña',
              }
            ],
          }}
        />
      </div>
    );
  }
}

export default Header;