// Understands how to render a review of a purchased item
import React from 'react'
import styles from './Cart.css'
import PropTypes from 'prop-types'

export const CartItem = (props) =>
  <li className={styles.cartItem}>
    <div className={styles.photo}>
      <img src={props.url} alt='a photo of the item' className={styles.cardPhoto} />
    </div>
    <div className={styles.cardText}>
      <p>{props.itemName}</p>
    </div>

    <div className={styles.remove} onClick={() => props.removeItem(props)}></div>
  </li>

export default CartItem

CartItem.propTypes = {
  url: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
}
