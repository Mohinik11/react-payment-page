import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from 'Pages/Home';
import Checkout from 'Pages/Checkout';
import About from 'Pages/About';

const Web =props=>{
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/about" component={About}/>
    </Switch>
  )
}
export default Web;