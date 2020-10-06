import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/index";
import { withRouter, Link } from "react-router-dom";
import { Form, Button, Jumbotron } from "react-bootstrap";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "test_user@exemple.com",
      password: "111",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <center> 
        <Jumbotron style={{ background: 'rgba(0,0,0, 0.65)', width: '80rem', color:'white'}}>
        <h3 style={{ textAlign: "center" }}>Log In</h3><br></br>
          <Form onSubmit={this.handleSubmit} className="loginUser">
            <Form.Group>
              <Form.Label><h4>Email</h4></Form.Label>
              <Form.Control
                placeholder="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{this.props.emailError}</div>
            </Form.Group>

            <Form.Group>
              <Form.Label><h4>Password</h4></Form.Label>
              <Form.Control
                placeholder="password"
                type="password"
                name="password"
                autoComplete={password}
                value={password}
                onChange={this.handleChange}
              />
              <div style={{ color: "red" }}>{this.props.passwordError}</div>
            </Form.Group><br></br>
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form><br></br>
          <div className="bottom_link" style={{ color: "antiquewhite" }}>
            <h4>Don't have an account?</h4><br></br>
            <h4><Link to="/sign_up">Sign Up</Link></h4>
          </div>
        </Jumbotron> 
      </center>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    emailError: usersReducer.emailError,
    passwordError: usersReducer.passwordError,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUser: (formDAta) => dispatch(loginUser(formDAta, ownProps)),
  };
};

const customConnectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

export default withRouter(customConnectComponent);