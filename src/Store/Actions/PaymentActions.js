import { paymentConstants } from "Store/Constants/PaymentConstants"
import { paymentService } from "Store/Services/PaymentServices"

const index = () => {
  const { INDEX_REQUEST, INDEX_SUCCESS, INDEX_FAILURE } = paymentConstants
  const request = () => ({ type: INDEX_REQUEST })
  const success = items => ({ type: INDEX_SUCCESS, items })
  const failure = error => ({ type: INDEX_FAILURE, error })

  return dispatch => {
    dispatch(request())
    paymentService
      .index()
      .then(
        items => dispatch(success(items)),
        error => dispatch(failure(error.toString()))
      )
  }
}


export const paymentActions = {
  index
}
