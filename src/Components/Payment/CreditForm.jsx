import React, {Component, Fragment} from "react"
import {Row, Col, Button, ListGroup, ListGroupItem} from "react-bootstrap"
import FormControl from "UI/Control"

class CreditForm extends Component {
  handleSave = (event) => {
    alert("validate & save data");
    event.preventDefault();
  }
  render() {
    return (
    <Fragment>
      <FormControl placeholder="Name" label="Name"/>
      <FormControl type="number" placeholder="1234 5678 9123 4567" label="Card Number"/>
      <Row>
        <Col>
          <FormControl 
            type="password" 
            placeholder="CVV" 
            label="CVV"
            maxLength="3"
          />
        </Col>
        <Col>
          <FormControl 
            type="date" 
            placeholder="Date" 
            label="Date"
          />
        </Col>
      </Row>
      <ListGroup className="borderless">
        <ListGroupItem>
          <Button variant="success" onClick={e => this.handleSave(e)} className="float-right">
            <span>Save</span>
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Fragment>
    )
  }
}

export default CreditForm;