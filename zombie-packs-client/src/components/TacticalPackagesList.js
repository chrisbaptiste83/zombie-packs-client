import React, { Component } from 'react';  
import TacticalPackageListItem from './TacticalPackageListItem'; 
import {Jumbotron} from 'react-bootstrap'; 
import PackageListItem from './PackageListItem';

class TacticalPackagesList extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      selectedTacticalPackages: [],
      message: '',
    };
  }

  tacticalPackagesList = tacPackages => 
  tacPackages.map(packageAttributes => 
    packageAttributes.primary_weapon&&packageAttributes.secondary_weapon&&packageAttributes.lethal_weapon&&packageAttributes.tactical_item?
    <TacticalPackageListItem {...packageAttributes}/>:<PackageListItem {...packageAttributes}/>) 


  filterTacticalPackages = () => {
    let keyword = this.state.searchWord.toLowerCase(); 
    let searchedTacticalPackages = this.props.tacticalPackages.filter(tacPack => {
      let title = tacPack.title.toLowerCase();
      return title.includes(keyword);
    });

    if (searchedTacticalPackages.length === 0) {
      this.setState({ message: 'Sorry, that word was not found in any Tactical Package title' });
    } else {
      this.setState({ selectedTacticalPackages: searchedTacticalPackages });
      this.setState({ searchWord: '' });
      this.setState({ message: '' });
      };
  }; 

  handleInput = event => {
    this.setState({ searchWord: event.target.value });
  };  
  

  render() {  
    const { tacticalPackages} = this.props; 
    const packageList = this.tacticalPackagesList(tacticalPackages) 
    let renderTacPacks;
    if (this.state.selectedTacticalPackages.length !== 0) {
      renderTacPacks = this.tacticalPackagesList(this.state.selectedTacticalPackages)
    } else {
      renderTacPacks = packageList
    };  
    return (
      <React.Fragment> 
        <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '65rem' }}>
          <label><h3>Keyword Search </h3></label><br></br>
          <input 
            style={{width: "450px"}}
            type='text'
            value={this.state.searchWord}
            onChange={this.handleInput}
          /><br></br><br></br>
          <input
            type='button'
            value='Search'
            onClick={this.filterTacticalPackages.bind(this)}
          /><br></br><br></br>
          {this.state.message}
        </Jumbotron>
        <h3>{renderTacPacks}</h3>
      </React.Fragment>
    )
  } 
}

export default TacticalPackagesList