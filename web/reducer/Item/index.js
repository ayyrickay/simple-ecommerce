// understands how to update state tree for cards
import * as actions from '../../constants/ActionTypes'
const generatedItems = [
  {itemName: 'Intriguing Chachki'},
  {itemName: 'Important Stuff'},
  {itemName: 'Odd Miscellanea'},
  {itemName: 'Interesting Relic'},
  {itemName: 'Unlikely Find'},
  {itemName: 'Seussian Thing'}].map((item, idx) => ({
  ...item,
  id: idx,
  price: Math.floor(Math.random()*100) + 1,
  url: 'http://placeimg.com/640/480/tech'
}))
const initialState = {
  itemList: generatedItems,
  purchase: null,
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.PURCHASE_ITEMS:
      return Object.assign({}, state, {...action})
    case actions.PURCHASE_ITEM_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        purchase: action.statusInfo
      })
    case actions.PURCHASE_ITEM_FAILURE:
      return Object.assign({}, state, action.error)
    default:
      return state
  }
}
