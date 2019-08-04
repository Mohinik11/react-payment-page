import React, { Fragment } from "react"
import { ReactComponent as ReactLogo } from "./logo.svg"
import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Logo = props => {
  return (
    <Fragment>
      <Link to="/" className="navbar-brand">
        <ReactLogo width="40" />
          Payment App
        </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Fragment>
  )
}

export default Logo;