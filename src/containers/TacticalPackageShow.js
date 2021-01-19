import React, { Component } from 'react';  
import TacticalPackage from '../components/TacticalPackage'; 
import { connect } from 'react-redux';


class TacticalPackageShow extends Component { 

  constructor(props) { 
    super(props); 
  } 

  render() { 
    if (!this.props.tacticalPackage) {
      return <div></div> 
    } 
    else {
      return ( 
        <React.Fragment>
          <TacticalPackage tacticalPackage={this.props.tacticalPackage}/>      
        </React.Fragment> 
      ) 
    }  
  }
} 

const mapStateToProps = ({tacticalPackages},{match}) => { 
  return {
   tacticalPackage: tacticalPackages.items[match.params.id-1]
  } 
}
export default connect(mapStateToProps, null )(TacticalPackageShow)