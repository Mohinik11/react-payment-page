import React from "react"
import { Control, Label } from "react-bootstrap/Form";
import PropTypes from "prop-types"

const FormControl = props => (
  <div>
    {props.displayLabel && <Label>{props.label}: </Label>}
    <Control
      required={props.required}
      type={props.type}
      placeholder={props.label}
      maxLength={props.maxLength}
    />
  </div>
)

FormControl.propTypes = {
  type: PropTypes.string,
  required: PropTypes.string,
  placeholder: PropTypes.func,
  required: PropTypes.bool,
  displayLabel: PropTypes.bool
}

FormControl.defaultProps = {
  type: "text",
  lable: "Default Label",
  name: "DefaultName",
  required: true,
  displayLabel: true
}

export default FormControl;