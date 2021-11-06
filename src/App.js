
import { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Reports from './pages/Reports';
import Product from './pages/Products';
import Home from './pages/Home';
function App() {
  return (
    <> 
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/reports' component={Reports}/>
         <Route path='/products' component={Product}/>        
       </Switch>
     </Router> 
  
    </>
  );
}

export default App;
