import React, {Component, Fragment} from "react"
import PaymentOptions from "Components/Payment/PaymentOptions"
import PaymentTerms from "Components/Payment/PaymentTerms"
import {
  Form as ReactForm,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap"

class Form extends Component {
  handleSubmit = (event) => {
    alert("we can send submitted data to payment server here");
    event.preventDefault();
  }
  render() {
    return (
      <Fragment>
        <ReactForm onSubmit={e => this.handleSubmit(e)} >
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-sm-1">
                  <div className="box-colored circle" style={{ width: "40px", height: "40px" }}>
                    <h4 className="p-1"><strong>3</strong></h4>
                  </div>
                </div>
                <div className="col-sm-11">
                  <h4 className="p-2"><strong>Payment</strong></h4>
                </div>
              </div>
              <PaymentOptions />
              <PaymentTerms />
            </Card.Body>
          </Card>
          <ListGroup className="borderless">
            <ListGroupItem>
              <button type="submit" className="float-right btn-custom">
                <span>Confirm & Pay </span>
                <span className="pl-2">&euro;{this.props.totalPrice}</span>
              </button></ListGroupItem>
          </ListGroup>
        </ReactForm>
      </Fragment>
    )
  }
}
export default Form;
