import React from 'react';
import {Card} from 'react-bootstrap';


const TacticalPackage = ({tacticalPackage}) => { 
  
  return (
    <React.Fragment>
      <center>
        <Card style={{background: 'rgba(0,0,0, 0.80)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h1>{tacticalPackage.title}</h1></Card.Title> 
            <Card.Text> 
            <img src={`http://localhost:3001/${tacticalPackage.avatar}`} width={500} height={240} alt="" /><br></br><br></br>
              <h4>{tacticalPackage.description}</h4>
              <small>created by:{tacticalPackage.creator}</small>
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Primary Weapon:</h2><br></br><h2>{tacticalPackage.primary_weapon_name}</h2></Card.Title> 
            <Card.Text>
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Secondary Weapon:</h2><br></br><h2>{tacticalPackage.secondary_weapon_name}</h2></Card.Title> 
         
            <Card.Text>
           
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Lethal Weapon:</h2><br></br><h2>{tacticalPackage.lethal_weapon_name}</h2></Card.Title> 
           
            <Card.Text>
             
            </Card.Text> 
          </Card.Body>
        </Card><br></br>
        <Card style={{background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Tactical Equipment:</h2><br></br><h2>{tacticalPackage.tactical_item_name}</h2></Card.Title> 
          
            <Card.Text> 
            </Card.Text> 
          </Card.Body>
        </Card><br></br>    
      </center>  
    </React.Fragment>
  )
}

export default TacticalPackage;