import React, { Component } from "react"
import OrderItem from "Components/Order/OrderItem"
import TotalPrice from "Components/Payment/TotalPrice"
import { paymentActions } from "Store/Actions/PaymentActions"
import { connect } from "react-redux";
import { sum } from "lodash";
import Form from "Pages/Checkout/Form";

const sumValues = obj => sum(obj.map(a => a.price))

class Container extends Component {
  componentDidMount() {
    this.props.paymentIndex();
  }
  render() {
    const { paymentData, totalPrice } = this.props
    return (
      <div className="payment">
        <div className="row">
          <div className="col-sm-6 box">
            <Form {...this.props} />
          </div>
          <div className="col-sm-6 box">
            <h4>
              <strong>
                Your Order
              </strong>
            </h4>
            <OrderItem items={paymentData} />
            <TotalPrice price={totalPrice} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  paymentData: state.payment.items,
  totalPrice: sumValues(state.payment.items).toFixed(2)
});

const mapDispatchToProps = dispatch => ({
  paymentIndex: () => dispatch(paymentActions.index())
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
