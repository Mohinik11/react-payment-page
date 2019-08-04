import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = props => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
      </Nav>
    </Navbar.Collapse>
  )
}

export default Navigation;