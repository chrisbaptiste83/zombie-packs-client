import React from 'react';
import {Card} from 'react-bootstrap';


const TacticalPackage = ({tacticalPackage:{attributes}}) => { 
  
  return (
    <React.Fragment>
      <center>
        <Card style={{background: 'rgba(0,0,0, 0.80)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h1>{attributes.title}</h1></Card.Title> 
            <Card.Text> 
            <img src={attributes.image} width={500} height={240} alt="" /><br></br><br></br>
              <h4>{attributes.description}</h4>
              <small>created by:{attributes.creator}</small>
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Primary Weapon:</h2><br></br><h2>{attributes.primary_weapon_name}</h2></Card.Title> 
            <Card.Text>
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Secondary Weapon:</h2><br></br><h2>{attributes.secondary_weapon_name}</h2></Card.Title> 
         
            <Card.Text>
           
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Lethal Weapon:</h2><br></br><h2>{attributes.lethal_weapon_name}</h2></Card.Title> 
           
            <Card.Text>
             
            </Card.Text> 
          </Card.Body>
        </Card><br></br>
        <Card style={{background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>Tactical Equipment:</h2><br></br><h2>{attributes.tactical_item_name}</h2></Card.Title> 
          
            <Card.Text> 
            </Card.Text> 
          </Card.Body>
        </Card><br></br>    
      </center>  
    </React.Fragment>
  )
}

export default TacticalPackage;