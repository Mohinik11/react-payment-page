import React, { Fragment } from "react"
import moment from "moment"

const OrderItem = ({ items }) => {
  let element = <p>Loadding...</p>;
  if (items) {
    element = items.map(el => (
      <div className="order-item">
        <div className="row">
          <div className="col-sm-8">
            <strong>{moment(el.date).format("ddd, D MMM | HH:SS")}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 shadow-text">
            {el.fromStation} - {el.toStation}*
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ul className="list-unstyled shadow-text">
              {
                el.items.map(item =>
                  <div>
                    <li>
                      <span className="pr-2">{item.quantity}</span>
                      <span className="pr-2">{item.itemName}</span>
                      <span>{item.weight && <span>({item.weight})</span>}</span>
                    </li>
                  </div>
                )
              }
              <hr />
            </ul>
          </div>
          <div className="col-sm-6">
            <span><strong>&euro;{el.price}</strong></span>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <Fragment>
      {element}
    </Fragment>
  )
}
export default OrderItem;