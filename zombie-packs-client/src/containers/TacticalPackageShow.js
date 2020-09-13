import React, { Component } from 'react';  
import TacticalPackage from '../components/TacticalPackage'; 
import {fetchTacticalPackagebyId} from '../actions/index.js'; 
import { connect } from 'react-redux';


class TacticalPackageShow extends Component { 

  constructor(props) { 
    super(props); 
  } 

  componentDidMount() { 
    this.props.fetchTacticalPackagebyId(this.props.match.params.id)
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
   tacticalPackage: tacticalPackages.itemsById[match.params.id] 
  }
}
export default connect(mapStateToProps, { fetchTacticalPackagebyId })(TacticalPackageShow)