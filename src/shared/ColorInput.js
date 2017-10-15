import React from 'react'
import withColorPicker from '../withColorPicker'

export class ColorInput extends React.Component {
  state = {
    value: '',
  }

  // shouldComponentUpdate(){
  //   return this.input !== document.activeElement
  // }

  render() {
    const { style, color, kind, name, onChange } = this.props
    const handleBlur = () => {
      console.log('BLUR')
      this.setState({ value: '' })
    }
    const handleChange = (e) => {
      this.setState({ value: e.target.value })
      onChange({ kind, name, value: e.target.value })
    }
    return (
      <input
        style={ style }
        key={ `${ kind }-${ name }` }
        ref={ (input) => (this.input = input) }
        onBlur={ handleBlur }
        onChange={ handleChange }
        value={ this.state.value || color[name] }
      />
    )
  }
}

export default withColorPicker(ColorInput)
