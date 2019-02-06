// Understands how to render a card with an image, a price, and CTA
import React from 'react'
import styles from './Card.css'
import PropTypes from 'prop-types'

const Card = (props) =>
  <li className={styles.card}>
    <div className={styles.photo}>
      <img src={props.url} alt='a photo of the item' className={styles.cardPhoto} />
    </div>
    <div className={styles.cardText}>
      <p>{props.itemName}</p>
      <p>{`$${props.price}`}</p>
    </div>
    <button className={styles.cardButton} onClick={props.addToCart(props)}> Add to Cart </button>
  </li>

Card.propTypes = {
  url: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default Card
