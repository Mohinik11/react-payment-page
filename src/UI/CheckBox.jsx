import React from "react"
import { Check } from "react-bootstrap/Form";
import PropTypes from "prop-types"

const CheckBox = props => (
  <Check 
    type={props.type}
    label={props.label}
    name={props.name}
    onClick={props.onClick}
    required={props.required}
  />
)

CheckBox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  required: PropTypes.bool
}

CheckBox.defaultProps = {
  type: "checkbox",
  label: "Default Label",
  name: "DefaultName",
  onClick: f=>f,
  required: true
}

export default CheckBox;