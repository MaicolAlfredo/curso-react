import React, { Component } from "react";

function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}
function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderizadoCondicionalClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }
  render() {
    return (
      <div>
        <h3>Rendirizado Condicional</h3>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
