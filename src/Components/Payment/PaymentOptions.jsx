import React, { Fragment, Component } from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import CreditForm from "Components/Payment/CreditForm"
import CheckBox from "UI/CheckBox"

class PaymentOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreditForm: false
    }
  }
  handleToggle = (value) => {
    this.setState({
      showCreditForm: value
    })
  }
  render() {
    return (
      <Fragment>
        <ListGroup>
          <ListGroupItem>
            <div className="row" >
              <div className="col-sm-8" >
                <CheckBox 
                  type="radio"
                  label="Paypal"
                  name="payment"
                  onClick={() => this.handleToggle(false)}
                />
              </div>
              <div className="col-sm-4">
                <div className="paypal-icon float-right" style={{ width: "40px", height: "40px" }} />
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className="row">
              <div className="col-sm-8">
                <CheckBox 
                  type="radio"
                  label="Credit Card"
                  name="payment"
                  onClick={() => this.handleToggle(!this.state.showCreditForm)}
                />
              </div>
              <div className="col-sm-4">
                <div className="credit-icon float-right" style={{ width: "65px", height: "40px" }} />
              </div>
            </div>
            {this.state.showCreditForm &&
              <CreditForm />
            }
          </ListGroupItem>
        </ListGroup>
      </Fragment>
    )
  }
}

export default PaymentOptions;