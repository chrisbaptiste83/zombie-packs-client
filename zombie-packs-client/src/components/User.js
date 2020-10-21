import React from 'react';
import {Card} from 'react-bootstrap';


const User = ({user}) => { 

  return (
    <React.Fragment>
      <center>
        <Card style={{background: 'rgba(0,0,0, 0.80)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h1>{user.username}'s Profile Page</h1></Card.Title> 
            <Card.Text>
              <h4>Email: {user.email}</h4>
            </Card.Text> 
          </Card.Body>
        </Card><br></br>    
      </center>  
    </React.Fragment>
  )
}

export default User;