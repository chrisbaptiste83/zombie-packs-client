import React from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TacticalPackageShow from './containers/TacticalPackageShow'; 
import Landing from './components/Landing'; 
import Navigation from './components/Navigation'; 
import TacticalPackagesContainer from './containers/TacticalPackagesContainer'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return ( 
    <Router> 
      <Navigation/><br></br>
          <Switch> 
            <Route exact path="/" component={Landing}/>
            <Route exact path="/tactical_packages" component={TacticalPackagesContainer}/>   
            <Route exact path="/tactical_packages/:id" component={TacticalPackageShow}/>  
          </Switch> 
    </Router>
  );
}

export default App;