import React from 'react'
import reactCSS from 'reactcss'
import { getContrastingColor } from '../helpers/color'
import { boxShadow, rgba, borderRadius, padding, border, flexCenter } from '../helpers/styles'

import { EditableInput } from '../components/common'
import { TransparencyGrid, ColorInput } from '../shared'
import ColorWrap from '../ColorWrap'

export const BlockPicker = ({
  displayTriangle = true,
  className = '',
  style = {},
  ...internal
}) => {
  const { color } = internal
  const { width = 170, fontSize = 18, ...remainingStyles } = style

  const styles = reactCSS({
    default: {
      card: {
        width: width,
        backgroundColor: '#fff',
        ...boxShadow({ y: 1, color: rgba({ a: 0.1 }) }),
        borderRadius: 6,
        position: 'relative',
        ...remainingStyles,
      },
      grid: {
        height: Math.floor(width * 0.65),
        backgroundColor: color.hex,
        ...borderRadius({ tl: 6, tr: 6 }),
        ...flexCenter,
      },
      label: {
        fontSize: fontSize || Math.floor(width * 0.1),
        color: getContrastingColor(color.hex),
      },
      body: {
        padding: 10,
      },
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: `transparent transparent ${ color.hex } transparent`,
        position: 'absolute',
        top: -10,
        left: '50%',
        marginLeft: -10,
      },
      input: {
        fontSize: 12,
        color: '#666',
        ...border({ color: '#ddd' }),
        height: 20,
        borderRadius: 4,
        ...padding({ x: 7 }),
      },
    },
  })

  return (
    <div style={ styles.card } className={ `block-picker ${ className }` }>
      { displayTriangle && <div style={ styles.triangle } /> }

      <TransparencyGrid style={ styles.grid }>
        <div style={ styles.label }>
          { color.hex }
        </div>
      </TransparencyGrid>

      <div style={ styles.body }>
        {/* <BlockSwatches colors={ colors } onClick={ handleChange } onSwatchHover={ onSwatchHover } />
        */}

        <ColorInput
          name="hex"
          style={ styles.input }
        />

        <EditableInput
          style={{ input: styles.input }}
          value={ color.hex }
          // onChange={ handleChange }
        />
      </div>
    </div>
  )
}

export default ColorWrap(BlockPicker)
