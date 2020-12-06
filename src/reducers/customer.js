import {
  CUSTOMER_DETAILS_FETCH_REQUEST,
  CUSTOMER_DETAILS_FETCH_SUCCESS,
  CUSTOMER_DETAILS_FETCH_FAILURE,
  CUSTOMER_STOP_ERROR_FALSE
} from '../actions/customer/types'
const defaultState = {
  response: null,
  isLoading: false,
  isError: false,
  error: ''
}
const customer = (state = JSON.parse(JSON.stringify(defaultState)), action) => {
  switch (action.type) {
    case CUSTOMER_DETAILS_FETCH_REQUEST:
      return {
        ...state,
        isRequested: 'OK',
        isLoading: true
      }
    case CUSTOMER_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        response: action.customer,
        isRequested: 'Done',
        error: ''
      }
    case CUSTOMER_DETAILS_FETCH_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isError: true,
        isRequested: 'FAIL',
        error: 'Something went wrong'
      }
    case CUSTOMER_STOP_ERROR_FALSE:
      return {
        ...state,
        isError: false
      }

    default:
      return state
  }
}
export default customer
