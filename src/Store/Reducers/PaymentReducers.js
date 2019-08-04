import { paymentConstants } from "Store/Constants/PaymentConstants"

const initialState = {
  items: [],
  writing: false,
  reading: false,
  draft: null
}


const reducer = (state = initialState, action) => {
  const {
    INDEX_REQUEST,
    INDEX_SUCCESS,
    INDEX_FAILURE,
  } = paymentConstants

  switch (action.type) {
    case INDEX_REQUEST:
      return {
        ...state,
        reading: true,
        items: []
      }
    case INDEX_SUCCESS:
      return {
        ...state,
        reading: false,
        items: action.items
            }
    case INDEX_FAILURE:
      return {
        ...state,
        reading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default reducer;
