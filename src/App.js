import React from 'react';
import './App.css';
import "./Navation";
//  import Navation from './Navation';
// import Banner from './Banner';
// import Home from './Home';
// import Social from './Social';
import About from './About';
import Contact from './Contact'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import Homepg from './Homepg';
 import HomePage from './HomePage';


function App() {
  return (
    
    <div className="App">
       <Router>
        {/* <NavLink exact activeClassName='active' to="/">Home</NavLink>
        <NavLink exact activeClassName='active' to="/about">About</NavLink>
        <NavLink exact activeClassName='active' to="/contact">Contact</NavLink> */}
   
    <Switch>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/' component={HomePage}/>

      </Switch> 
      


    </Router>
    {/* <Banner/>
    <Home/>
    <Social/> */}
<div>

     </div> 
    </div>
  );
}

export default App;
