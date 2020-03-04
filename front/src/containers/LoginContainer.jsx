import React from "react";
import { connect } from "react-redux";

import Login from "../components/Login";
import { login } from "../store/actions/login";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //para tener input controlado lo guardamos en state mediante handleChange
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.mandandoUser(this.state); //login toma {email, password}
  }
  render() {
    console.log(this.state);
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    mandandoUser: user => dispatch(login(user)) // ACA TENGO QUE USAR LA ACCION, CAMBIAR NOMBRE
  };
};

export default connect(null, mapDispatchToProps)(LoginContainer);
