import React, { Component } from 'react';  
import UserTacticalPackageListItem from './UserTacticalPackageListItem'; 
import {Jumbotron} from 'react-bootstrap'; 


class UserTacticalPackagesList extends Component {  

  constructor(props) {
    super(props);
  }

  userTacticalPackagesList = tacPackages => tacPackages.map(packageAttributes =><UserTacticalPackageListItem {...packageAttributes}/>) 
  

  render() {  
    const {tacticalPackages} = this.props; 
    const packageList = this.userTacticalPackagesList(tacticalPackages) 
    
    return (
      <React.Fragment> 
        <h3>{packageList}</h3>
      </React.Fragment>
    )
  } 
}

export default UserTacticalPackagesList;