import {
  CUSTOMER_DETAILS_FETCH_REQUEST,
  CUSTOMER_DETAILS_FETCH_SUCCESS,
  CUSTOMER_DETAILS_FETCH_FAILURE,
  CUSTOMER_STOP_ERROR_FALSE
} from './types'

export const customerDetailsRequest = (customer) => {
  return {
    type: CUSTOMER_DETAILS_FETCH_REQUEST,
    customer
  }
}

export const customerDetailsSuccess = (customer) => {
  return {
    type: CUSTOMER_DETAILS_FETCH_SUCCESS,
    customer
  }
}

export const customerDetailsFailure = (error) => {
  return {
    type: CUSTOMER_DETAILS_FETCH_FAILURE,
    error
  }
}

export const showErrorFalse = () => {
  return {
    type: CUSTOMER_STOP_ERROR_FALSE
  }
}
