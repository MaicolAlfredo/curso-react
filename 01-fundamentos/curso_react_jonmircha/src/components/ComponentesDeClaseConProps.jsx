import React, { Component } from "react";

class ComponentesDeClaseConProps extends Component {
  render() {
    // Las props se acceden usando 'this.props'
    return <h2>{this.props.msg}</h2>;
  }
}

export default ComponentesDeClaseConProps;
