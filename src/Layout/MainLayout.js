import React from "react"
import Header from "Layout/Header"
import Footer from "Layout/Footer"

const MainLayout = props => {
  return(
    <React.Fragment>
      <Header/>
        <div className="container">
          {props.children}
        </div>
      <Footer/>
    </React.Fragment>
  )
}

export default MainLayout;