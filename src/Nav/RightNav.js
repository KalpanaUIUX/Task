import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import logo from '../../src/logo.svg';
import Vector from '../../src/Vector.png';
import About from '../Pages/About.js';
import Home from '../Pages/Home.js';
import Contact from '../Pages/Contact.js';
import { VerticalAlignTopRounded } from '@material-ui/icons';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  
  return (
    <div className="container"> 
     <Router>
        <Ul open={open}>  
        <li>
        <img src={Vector} className="App-logo" alt="logo" />       
        </li>   
        <li className="logo-letter">ORIZON</li>
         <li className="m-l">Services</li>
          <li>Product</li>
           <li>Technology</li>
            <li><Link to="/About">About us</Link></li>
          <li ><Link to="/">Client</Link></li>
         
          <li><Link to="/Contact"> Partner</Link></li>        
          <li>Sign Up</li>
        </Ul>
         <Switch>
         
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
     </Router>
    </div>
  )
}

export default RightNav;