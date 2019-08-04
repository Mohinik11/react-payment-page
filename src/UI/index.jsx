import React from "react"
import { Form } from "react-bootstrap";

const FormComponent = props => {
  return(
  <Form>
    {props.children}
  </Form>
  )
}

export default FormComponent;