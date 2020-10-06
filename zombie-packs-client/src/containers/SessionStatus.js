import React, { Component } from "react";
import { connect } from "react-redux";
import { sessionStatus } from "../actions/sessionStatus";
import Navigation from "../components/NavBar";

class SessionStatus extends Component {
  componentDidMount() {
    this.props.sessionStatus();
  }

  render() {
    if (this.props) {
      const { status, user } = this.props;
      return (
        <>
          <Navigation status={status} user={user} />
        </>
      );
    }
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    status: usersReducer.status,
    user: usersReducer.user,
  };
};
export default connect(mapStateToProps, { sessionStatus })(SessionStatus);