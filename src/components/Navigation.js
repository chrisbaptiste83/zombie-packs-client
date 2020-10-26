import React from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
import { logoutUser } from "../actions/index"; 
import { withRouter } from "react-router"; 
import { connect } from 'react-redux';

const Navigation = (props) => { 
  const handleClick = () => {
    const { logoutUser, status, user } = props;
    if (status) {
      logoutUser(user.id).then(() => {
        props.history.push("/");
      });
    }
  };

  return ( 
    <Navbar  variant="dark" fixed="top" style={{ height: '6rem', background:'rgba(0,0,0, 0.60)'}}> 
    {props.status ? ( 
    <>
        <Nav.Link><Link to={{ pathname: `/users/${props.user.id}`}} style={{ color: '#FFF' }}><h2>Profile</h2></Link></Nav.Link>
        <Nav.Link><Link to={{ pathname: `/tactical_packages/`}} style={{ color: '#FFF' }}><h2>Zombie Tactical Packs</h2></Link></Nav.Link> 
        <Nav.Link><Link to={{ pathname: `/tactical_packages/new`}} style={{ color: '#FFF' }}><h2>Create</h2></Link></Nav.Link> 
        {/* <Nav.Link><Link to={{ pathname: `/sign_up`}} style={{ color: '#FFF' }}><h2>Sign Up</h2></Link></Nav.Link>
        <Nav.Link><Link to={{ pathname: `/log_in`}} style={{ color: '#FFF' }}><h2>Log In</h2></Link></Nav.Link>       */}
        
        <Button variant="danger" onClick={handleClick}> Logout</Button> 
    </> 
    ):( 
    <>   
        <Nav.Link><Link to={{ pathname: `/`}} style={{ color: '#FFF' }}><h2>Home</h2></Link></Nav.Link>
        {/* <Nav.Link><Link to={{ pathname: `/tactical_packages/`}} style={{ color: '#FFF' }}><h2>Zombie Tactical Packs</h2></Link></Nav.Link>  */}
        <Nav.Link><Link to={{ pathname: `/sign_up`}} style={{ color: '#FFF' }}><h2>Sign Up</h2></Link></Nav.Link>
        <Nav.Link><Link to={{ pathname: `/log_in`}} style={{ color: '#FFF' }}><h2>Log In</h2></Link></Nav.Link>      
    </>
  )} 
  </Navbar>
  );
};

export default withRouter(connect(null, { logoutUser })(Navigation));