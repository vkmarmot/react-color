/* eslint-disable react/no-did-mount-set-state, no-param-reassign */

import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'

import { EditableInput } from '../common'
import { ChromeField } from './ChromeField'
import { ChromeFieldsWrap } from './ChromeFieldsWrap';
import UnfoldMoreHorizontalIcon from '@icons/material/UnfoldMoreHorizontalIcon'

export class ChromeFields extends React.Component {
  state = {
    view: '',
  }

  componentDidMount() {
    if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
      this.setState({ view: 'hex' })
    } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
      this.setState({ view: 'rgb' })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
      this.setState({ view: 'rgb' })
    }
  }

  toggleViews = () => {
    if (this.state.view === 'hex') {
      this.setState({ view: 'rgb' })
    } else if (this.state.view === 'rgb') {
      this.setState({ view: 'hsl' })
    } else if (this.state.view === 'hsl') {
      if (this.props.hsl.a === 1) {
        this.setState({ view: 'hex' })
      } else {
        this.setState({ view: 'rgb' })
      }
    }
  }

  handleChange = (data, e) => {
    if (data.hex) {
      color.isValidHex(data.hex) && this.props.onChange({
        hex: data.hex,
        source: 'hex',
      }, e)
    } else if (data.r || data.g || data.b) {
      this.props.onChange({
        r: data.r || this.props.rgb.r,
        g: data.g || this.props.rgb.g,
        b: data.b || this.props.rgb.b,
        source: 'rgb',
      }, e)
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0
      } else if (data.a > 1) {
        data.a = 1
      }

      this.props.onChange({
        h: this.props.hsl.h,
        s: this.props.hsl.s,
        l: this.props.hsl.l,
        a: Math.round(data.a * 100) / 100,
        source: 'rgb',
      }, e)
    } else if (data.h || data.s || data.l) {
      this.props.onChange({
        h: data.h || this.props.hsl.h,
        s: Number((data.s && data.s) || this.props.hsl.s),
        l: Number((data.l && data.l) || this.props.hsl.l),
        source: 'hsl',
      }, e)
    }
  }

  showHighlight = (e) => {
    e.target.style.background = '#eee'
  }

  hideHighlight = (e) => {
    e.target.style.background = 'transparent'
  }

  render() {
    const styles = reactCSS({
      'default': {
        wrap: {
          paddingTop: '16px',
        },
        alpha: {
          paddingLeft: '6px',
          width: '100%',
        },
        toggle: {
          width: '32px',
          textAlign: 'right',
          position: 'relative',
        },
        icon: {
          marginRight: '-4px',
          marginTop: '12px',
          cursor: 'pointer',
          position: 'relative',
        },
        iconHighlight: {
          position: 'absolute',
          width: '24px',
          height: '28px',
          background: '#eee',
          borderRadius: '4px',
          top: '10px',
          left: '12px',
          display: 'none',
        },
        input: {
          fontSize: '11px',
          color: '#333',
          width: '100%',
          borderRadius: '2px',
          border: 'none',
          boxShadow: 'inset 0 0 0 1px #dadada',
          height: '21px',
          textAlign: 'center',
        },
        label: {
          textTransform: 'uppercase',
          fontSize: '11px',
          lineHeight: '11px',
          color: '#969696',
          textAlign: 'center',
          display: 'block',
          marginTop: '12px',
        },
        svg: {
          fill: '#333',
          width: '24px',
          height: '24px',
          border: '1px transparent solid',
          borderRadius: '5px',
        },
      },
      'disableAlpha': {
        alpha: {
          display: 'none',
        },
      },
    }, this.props, this.state)

    let fields
    if (this.state.view === 'hex') {
      fields = (<ChromeFieldsWrap>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="hex" value={ this.props.hex }
            onChange={ this.handleChange }
          />
        </ChromeField>
      </ChromeFieldsWrap>)
    } else if (this.state.view === 'rgb') {
      fields = (<ChromeFieldsWrap>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="r"
            value={ this.props.rgb.r }
            onChange={ this.handleChange }
          />
        </ChromeField>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="g"
            value={ this.props.rgb.g }
            onChange={ this.handleChange }
          />
        </ChromeField>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="b"
            value={ this.props.rgb.b }
            onChange={ this.handleChange }
          />
        </ChromeField>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="a"
            value={ this.props.rgb.a }
            arrowOffset={ 0.01 }
            onChange={ this.handleChange }
          />
        </ChromeField>
      </ChromeFieldsWrap>)
    } else if (this.state.view === 'hsl') {
      fields = (<ChromeFieldsWrap>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="h"
            value={ Math.round(this.props.hsl.h) }
            onChange={ this.handleChange }
          />
        </ChromeField>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="s"
            value={ `${ Math.round(this.props.hsl.s * 100) }%` }
            onChange={ this.handleChange }
          />
        </ChromeField>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="l"
            value={ `${ Math.round(this.props.hsl.l * 100) }%` }
            onChange={ this.handleChange }
          />
        </ChromeField>
        <ChromeField>
          <EditableInput
            style={{ input: styles.input, label: styles.label }}
            label="a"
            value={ this.props.hsl.a }
            arrowOffset={ 0.01 }
            onChange={ this.handleChange }
          />
        </ChromeField>
      </ChromeFieldsWrap>)
    }

    return (
      <div style={ styles.wrap } className="flexbox-fix display-flex">
        { fields }
        <div style={ styles.toggle }>
          <div style={ styles.icon } onClick={ this.toggleViews } ref={ (icon) => this.icon = icon }>
            <UnfoldMoreHorizontalIcon
              style={ styles.svg }
              onMouseOver={ this.showHighlight }
              onMouseEnter={ this.showHighlight }
              onMouseOut={ this.hideHighlight }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ChromeFields
