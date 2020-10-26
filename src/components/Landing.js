import React from 'react'; 
import {Button, Jumbotron} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'


const Landing = () => {
  return (  
        <section> 
          <center>
            <Jumbotron style={{ background: 'rgba(0,0,0, 0.65)', width: '80rem', color:'white'}}>
              <h1>Zombie Apocalypse Tactical Packs</h1><br></br>
              <h5>Share your favorite tactical packages and prepare for doomsday like no other.</h5><br></br>
              <p><Button variant="dark"><Link to={{pathname: `/tactical_packages`}}>See Tactical Packs</Link></Button></p>
            </Jumbotron>
          </center>
        </section>   
  )
} 

export default Landing