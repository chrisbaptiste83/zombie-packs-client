import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUser } from "../actions/index";
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
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
      <div
        className="form"
        style={{
          display: "block",
          width: "500px",
          float: "center",
          backgroundColor: "black",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontStyle: "bold",
            width: "100%",
            padding: "0%",
          }}
        >
          Create Account!
        </h4>
        <ul>
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
                  placeholder="password required!"
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
          </Form>
          <span className="bottom_link" style={{ color: "antiquewhite" }}>
            Have an account!
            <Link to="/login">Login</Link>
          </span>
        </ul>
      </div>
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