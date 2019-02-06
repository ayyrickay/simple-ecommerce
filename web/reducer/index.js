// understands how to set state tree for overall app
import { combineReducers } from 'redux'
import items from './Item'
import cart from './Cart'

export default combineReducers({
  items,
  cart
})
