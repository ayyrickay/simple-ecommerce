// Understands how to render and interact with a list of cards
import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../../actions/Cart/CartActions'
import Card from '../Card/Card.js'
import styles from './CardGrid.css'
import PropTypes from 'prop-types'

const CardGrid = ({ items, addToCart }) =>
  <ul className={styles.cardGrid}>
    {items.itemList.map(card =>
      <Card
        key={card.id}
        addToCart={addToCart}
        {...card} />
    )}
  </ul>

CardGrid.propTypes = {
  items: PropTypes.shape({
    itemList: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
}

const mapStateToProps = ({ items }) => ({
  items
})

const mapDispatchtoProps = dispatch => ({
  addToCart (item) {
    return () => {
      dispatch(addItemToCart(item))
    }
  }
})

export default connect(mapStateToProps, mapDispatchtoProps)(CardGrid)
