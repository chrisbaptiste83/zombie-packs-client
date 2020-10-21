import React, { Component } from 'react';  
import User from '../components/User'; 
// import {fetchUserbyId} from '../actions/index.js'; 
import {Jumbotron, Button} from 'react-bootstrap';
import { connect } from 'react-redux'; 
import UserTacticalPackagesList from '../components/UserTacticalPackagesList'


class UserShow extends Component { 

  constructor(props) { 
    super(props); 
  } 

  // componentDidMount() { 
  //   this.props.fetchUserbyId(this.props.user.id) 
  // } 


  render() { 
    if (!this.props.user) {
      return <div></div> 
    } 
    else {
      return ( 
        <React.Fragment> 
          <center> 
          <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '65rem' }}>
          <User user={this.props.user}/><br></br>
          <UserTacticalPackagesList tacticalPackages={this.props.tacticalPackages}/> 
          </Jumbotron> 
          </center>     
        </React.Fragment> 
      ) 
    }  
  }
} 

const mapStateToProps = ({usersReducer}) => { 
  return { 
    user: usersReducer.user, 
    tacticalPackages: usersReducer.user.tactical_packages 
  } 
}
export default connect(mapStateToProps, null )(UserShow)