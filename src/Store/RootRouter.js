import {combineReducers} from 'redux'
import PaymentReducers from "Store/Reducers/PaymentReducers"

const reducer = combineReducers({
  payment:PaymentReducers
})

export default reducer;