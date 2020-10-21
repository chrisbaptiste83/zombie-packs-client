import React, { Component } from 'react';  
import TacticalPackageListItem from './TacticalPackageListItem'; 
import {Jumbotron} from 'react-bootstrap'; 


class TacticalPackagesList extends Component {
  
  constructor(props) {
    super(props);
  }

  tacticalPackagesList = tacPackages => tacPackages.map(packageAttributes =><TacticalPackageListItem {...packageAttributes}/>) 
  

  render() {  
    const {tacticalPackages} = this.props; 
    const packageList = this.tacticalPackagesList(tacticalPackages) 
    
    return (
      
      <React.Fragment> 
        <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '65rem' }}>
           <h3>{packageList}</h3>
        </Jumbotron> 
      </React.Fragment>
    )
  } 
  
}

export default TacticalPackagesList