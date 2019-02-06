/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
/*eslint-enable no-unused-vars*/
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
const modalRoot = document.getElementById('modal-root')

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return createPortal(
      this.props.children,
      this.el,
    )
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired
}
