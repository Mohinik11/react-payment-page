import React from "react"

const TotalPrice = props => {
  return(
    <div className="total-price">
      <div className="row">
        <div className="col-sm-6"><h4><strong>Total (inc. Tax)</strong></h4></div>
        <div className="col-sm-6"><h4><strong>&euro; {props.price}</strong></h4></div>
      </div>
      <div className="row">
        <div className="col-sm-8">
        <span className="shadow-text">
        * Contract partner for personal transportation services: FlixBus Inc.
        </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
        <span className="shadow-text">
        * With your booking, 1 ticket is generated.
        </span>
        </div>
      </div>
    </div>
  )
}

export default TotalPrice;