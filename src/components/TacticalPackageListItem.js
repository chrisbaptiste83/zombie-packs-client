import React from 'react'; 
import { Link } from 'react-router-dom'; 
import {Card, Button} from 'react-bootstrap'

const TacticalPackageListItem = (tacticalPackage) => { 
  return (
    <React.Fragment> 
        <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>{tacticalPackage.title}</h2></Card.Title> 
            <Card.Text> <img src={`http://localhost:3001/${tacticalPackage.avatar}`} width={500} height={240} alt="" /><br></br><br></br>
              <h5>{tacticalPackage.description}</h5>
              <small>created by: {tacticalPackage.creator}</small>
            </Card.Text> 
            <Button style={{ background: 'black'}}><Link to={{ pathname: `/tactical_packages/${tacticalPackage.id}`}}> View Tac Pack</Link></Button>
          </Card.Body>
        </Card><br></br>
    </React.Fragment>
  ) 
}

export default TacticalPackageListItem