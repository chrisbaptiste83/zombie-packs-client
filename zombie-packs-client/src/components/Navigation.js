import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <Navbar  variant="dark" fixed="top" style={{ height: '6rem', background:'rgba(0,0,0, 0.60)'}}> 
      <Nav.Link><Link to={{ pathname: `/`}} style={{ color: '#FFF' }}><h2>Home</h2></Link></Nav.Link>
      <Nav.Link><Link to={{ pathname: `/tactical_packages/`}} style={{ color: '#FFF' }}><h2>Zombie Tactical Packs</h2></Link></Nav.Link>
      <Nav.Link><Link to={{ pathname: `/primary_weapons/`}} style={{ color: '#FFF' }}><h2>Primary Weapons</h2></Link></Nav.Link>   
      <Nav.Link><Link to={{ pathname: `/secondary_weapons/`}} style={{ color: '#FFF' }}><h2>Secondary Weapons</h2></Link></Nav.Link>     
      <Nav.Link><Link to={{ pathname: `/lethal_weapons/`}} style={{ color: '#FFF' }}><h2>Lethal Weapons</h2></Link></Nav.Link>     
      <Nav.Link><Link to={{ pathname: `/tactical_items/`}} style={{ color: '#FFF' }}><h2>Tactical Items</h2></Link></Nav.Link>     
      <Nav.Link><Link to={{ pathname: `/tactical_packages/new`}} style={{ color: '#FFF' }}><h2>Create</h2></Link></Nav.Link>     
      </Navbar>
    </div>
  )
}

export default Navigation