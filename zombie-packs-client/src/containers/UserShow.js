import React, { Component } from 'react';  
import User from '../components/User'; 
// import {fetchUserbyId} from '../actions/index.js'; 
import { connect } from 'react-redux'; 
import TacticalPackagesList from '../components/TacticalPackagesList'


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
          <User user={this.props.user}/> 
          {/* <TacticalPackagesList tacticalPackages={this.props.tacticalPackages}/>       */}
        </React.Fragment> 
      ) 
    }  
  }
} 

const mapStateToProps = ({usersReducer}) => { 
  return { 
    user: usersReducer.user, 
    tacticalPackages: usersReducer.user.tacticalPackages
  } 
}
export default connect(mapStateToProps, null )(UserShow)