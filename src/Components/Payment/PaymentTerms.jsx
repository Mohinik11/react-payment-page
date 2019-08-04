import React from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import CheckBox from "UI/CheckBox"

const PaymentTerms = () => (
  <ListGroup className="borderless">
    <ListGroupItem>
      <CheckBox 
        label="I have a voucher" 
        name="voucher"
        required={false} 
      />
    </ListGroupItem>
    <ListGroupItem>
      <CheckBox 
        label="I need invoice" 
        name="invoice" 
        required={false}
      />
    </ListGroupItem>
  </ListGroup>
)

export default PaymentTerms