import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUser, ADD_TACTICALPACK } from "../actions/index";
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button, Jumbotron} from "react-bootstrap";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signupUser(this.state);
  }

  handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value,
      });
  }

  render() {
    const {
      email,
      username,
      password,
      password_confirmation,
    } = this.state;

    return (
      <center>
          <Jumbotron style={{ background: 'rgba(0,0,0, 0.65)', width: '80rem', color:'white'}}>
            <h3>Create Account!</h3><br></br>
            <Form onSubmit={this.handleSubmit} className="signup">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="username required!"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.props.usernameError}</div>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  placeholder="email required!"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.props.emailError}</div>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Control
                    placeholder="Password Required!"
                    type="password"
                    name="password"
                    autoComplete={password}
                    value={password}
                    onChange={this.handleChange}
                  />
                  <div style={{ color: "red" }}>{this.props.passwordError}</div>
                </Col>

                <Col>
                  <Form.Control
                    placeholder="Confirm Password!"
                    type="password"
                    name="password_confirmation"
                    autoComplete={password_confirmation}
                    value={password_confirmation}
                    onChange={this.handleChange}
                  />
                  <div style={{ color: "red" }}>
                    {this.props.passwordConfirmationError}
                  </div>
                </Col>
              </Row>
              <div />
              <br />
              <Button variant="success" type="submit">
                Signup
              </Button>
            </Form><br></br>
            <h4>Already have an account?</h4><br></br>
              <Button to="/login">Login</Button>
      </Jumbotron> 
      </center>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  const {
    user,
    emailError,
    usernameError,
    passwordError,
    passwordConfirmationError,
  } = usersReducer;

  return {
    user: user,
    emailError: emailError,
    usernameError: usernameError,
    passwordError: passwordError,
    passwordConfirmationError: passwordConfirmationError,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signupUser: (formData) => dispatch(signupUser(formData, ownProps)),
  };
};

const customComponentConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default withRouter(customComponentConnect);