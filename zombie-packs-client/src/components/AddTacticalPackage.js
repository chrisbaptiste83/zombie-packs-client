import React, { Component } from 'react'; 
import {Jumbotron} from 'react-bootstrap' 
import {addTacticalPackage } from '../actions'; 
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';

class AddTacticalPackage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
    title: '', 
    description: '', 
    creator: '', 
    user_id: `${this.props.user.id}`, 
    primary_weapon_name: '',
    primary_weapon_image_url: '',
    secondary_weapon_name: '',
    secondary_weapon_image_url: '',
    lethal_weapon_name: '',
    lethal_weapon_image_url: '',
    tactical_item_name: '',
    tactical_item_image_url: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

  handleSubmit(e) {
    e.preventDefault(); 
    debugger
    this.props.addTacticalPackage(this.state) 
      .then(res => { 
        this.props.history.push(`/tactical_packages`)
      })  
    this.setState({ 
      submitted:true
      }) 
  }

  render() {
    return ( 
      <div>
        <center> 
          <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '75rem' }}> 
            <h2>Create a Tactical Pack</h2>
            <h4>Create a tactical package first, then add weapons and equipment.</h4>
          </Jumbotron>
          <Jumbotron style={{ background: 'rgba(0,0,0, 0.75)',color:'white', width: '75rem' }}> 
            <h2>Tactical Package Details:</h2><br></br> 
            <form onSubmit={this.handleSubmit}>
              <p>
                <label htmlFor="title"><h3>Title</h3></label><br></br>
                <input 
                  style={{width: "725px"}} 
                  className="border"
                  type="text" 
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="description"><h3>Description:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="creator"><h3>Creator:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="creator"
                  id="creator"
                  value={this.state.creator}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="primary_weapon_name"><h3>Primary Weapon Name:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="primary_weapon_name"
                  id="primary_weapon_name"
                  value={this.state.primary_weapon_name}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="primary_weapon_image_url"><h3>Primary Weapon Image URL:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="primary_weapon_image_url"
                  id="primary_weapon_image_url"
                  value={this.state.primary_weapon_image_url}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="secondary_weapon_name"><h3>Secondary Weapon Name:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="secondary_weapon_name"
                  id="secondary_weapon_name"
                  value={this.state.secondary_weapon_name}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="secondary_weapon_image_url"><h3>Secondary Weapon Image URL:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="secondary_weapon_image_url"
                  id="secondary_weapon_image_url"
                  value={this.state.secondary_weapon_image_url}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="lethal_weapon_name"><h3>Lethal Weapon Name:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="lethal_weapon_name"
                  id="lethal_weapon_name"
                  value={this.state.lethal_weapon_name}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="lethal_weapon_image_url"><h3>Lethal Weapon Image URL:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="lethal_weapon_image_url"
                  id="lethal_weapon_image_url"
                  value={this.state.lethal_weapon_image_url}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="tactical_item_name"><h3>Tactical Item Name:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="tactical_item_name"
                  id="tactical_item_name"
                  value={this.state.tactical_item_name}
                  onChange={this.handleChange}
                />
              </p><br></br> 
              <p>
                <label htmlFor="tactical_item_image_url"><h3>Tactical Item Image URL:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="tactical_item_image_url"
                  id="tactical_item_image_url"
                  value={this.state.tactical_item_image_url}
                  onChange={this.handleChange}
                />
              </p><br></br>
              <input 
                disabled={this.state.submitted}
                type="submit" 
                value="Create Package" 
              />
            </form> 
          </Jumbotron> 
        </center> 
      </div>
    ) 
  }
} 

const mapStateToProps = ({ usersReducer }) => {
  return {
    user: usersReducer.user
  };
};

export default withRouter(connect(mapStateToProps, { addTacticalPackage })(AddTacticalPackage));