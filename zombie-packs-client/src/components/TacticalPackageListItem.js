import React from 'react'; 
import { Link } from 'react-router-dom'; 
import {Card, Button} from 'react-bootstrap'

const TacticalPackageListItem = ({id, attributes}) => { 
  return (
    <React.Fragment> 
        <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>{attributes.title}</h2></Card.Title> 
            <Card.Text>
              <h5>{attributes.description}</h5>
              <small>created by: {attributes.creator}</small>
            </Card.Text> 
            <img src={attributes.primary_weapon_image_url} width={500} height={240} alt="" /><br></br><br></br>
            <Button style={{ background: 'black'}}><Link to={{ pathname: `/tactical_packages/${id}`}}> View Tac Pack</Link></Button>
          </Card.Body>
        </Card><br></br>
    </React.Fragment>
  ) 
}

export default TacticalPackageListItem