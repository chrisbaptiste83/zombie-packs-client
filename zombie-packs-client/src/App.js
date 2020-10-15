import React from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TacticalPackageShow from './containers/TacticalPackageShow'; 
import Landing from './components/Landing'; 
import SessionStatus from './containers/SessionStatus'; 
import TacticalPackagesContainer from './containers/TacticalPackagesContainer'; 
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return ( 
    <Router> 
       <SessionStatus /><br></br>
          <Switch> 
            <Route exact path="/" component={Landing}/>
            <Route exact path="/tactical_packages" component={TacticalPackagesContainer}/>   
            <Route exact path="/tactical_packages/:id" component={TacticalPackageShow}/>  
            <Route exact path="/sign_up" component={SignUp}/>
            <Route exact path="/log_in" component={LogIn}/>  
          </Switch> 
    </Router>
  );
}

export default App;