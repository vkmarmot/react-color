import React from 'react'
import PropTypes from 'prop-types'
import withColorPicker from './withColorPicker'

export const childContextTypes = {
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
  oldHue: PropTypes.number,
  source: PropTypes.string,
  onChange: PropTypes.func,
}

export const ColorWrap = (Picker) => {

  class ReactColor extends React.Component {
    getChildContext() {
      return {
        color: {
          hex: '#333333',
        },
        onChange: () => {},
        onChangeComplete: () => {},
      }
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
