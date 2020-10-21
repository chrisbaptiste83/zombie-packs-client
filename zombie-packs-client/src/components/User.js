import React from 'react';
import {Card} from 'react-bootstrap';


const User = ({user}) => { 

  return (
    <React.Fragment>
        <Card style={{background: 'rgba(0,0,0, 0.80)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h1>{user.username}'s Profile Page</h1></Card.Title> 
            <Card.Text>
              <h3>(Email: {user.email})</h3><br></br>
              <h3>{user.username}'s Tactical Packages:</h3>
            </Card.Text> 
          </Card.Body>
        </Card>  
     
    </React.Fragment>
  )
}

export default User;