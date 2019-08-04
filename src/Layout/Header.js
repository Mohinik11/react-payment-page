import React from "react"
import { Navbar } from "react-bootstrap"
import Logo from "Components/Logo"
import Navigation from "Layout/Nav"

const Header = props => {
  return(
    <Navbar className="navbar-bg" variant="dark" expand="lg">
      <Logo/>
      <Navigation />
    </Navbar>
  )
}
export default Header;