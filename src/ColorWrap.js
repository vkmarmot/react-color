import React from 'react'
import PropTypes from 'prop-types'
import withColorPicker from './withColorPicker'

export const childContextTypes = {
  color: PropTypes.shape({
    hsl: PropTypes.shape({
      h: PropTypes.number,
      s: PropTypes.number,
      l: PropTypes.number,
      a: PropTypes.number,
    }),
    rgb: PropTypes.shape({
      r: PropTypes.number,
      g: PropTypes.number,
      b: PropTypes.number,
      a: PropTypes.number,
    }),
    hsv: PropTypes.shape({
      h: PropTypes.number,
      s: PropTypes.number,
      v: PropTypes.number,
      a: PropTypes.number,
    }),
    hex: PropTypes.string,
  }),
  onChange: PropTypes.func,
}

export const ColorWrap = (Picker) => {

  class ReactColor extends React.Component {
    state = {
      color: {
        hex: '#333',
      },
    }

    getChildContext() {
      return {
        ...this.state,
        onChange: this.handleChange,
      }
    }

    handleChange = ({ kind, name, value }) => {
      const { color } = this.state
      this.setState({ color: { ...color, [name]: value } })
    }

    render() {
      const WrappedPicker = withColorPicker(Picker)
      return <WrappedPicker />
    }
  }

  ReactColor.childContextTypes = childContextTypes

  return ReactColor
}

export default ColorWrap
