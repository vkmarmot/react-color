import React from 'react'

export const Checkerboard = ({ style, size, highlight, shadow }) => (
  <svg style={{ width: '100%', height: '100%', ...style }}>
    <pattern
      id="pattern"
      width={ size * 2 }
      height={ size * 2 }
      patternUnits="userSpaceOnUse"
    >
      <rect fill={ shadow } x={ 0 } width={ size } height={ size } y={ 0 } />
      <rect fill={ highlight } x={ size } width={ size } height={ size } y={ 0 } />
      <rect fill={ shadow } x={ size } width={ size } height={ size } y={ size } />
      <rect fill={ highlight } x={ 0 } width={ size } height={ size } y={ size } />
    </pattern>
    <rect fill="url(#pattern)" x="0" y="0" width="100%" height="100%" />
  </svg>
)

export const TransparencyGrid = ({
  size = 8,
  highlight = 'transparent',
  shadow = 'rgba(0,0,0,0.08)',
  children,
  style,
}) => (
  <div style={{ position: 'relative' }}>
    <Checkerboard
      size={ size }
      highlight={ highlight }
      shadow={ shadow }
      style={{
        position: 'absolute',
        borderRadius: style.borderRadius,
        borderTopLeftRadius: style.borderTopLeftRadius,
        borderTopRightRadius: style.borderTopRightRadius,
        borderBottomLeftRadius: style.borderBottomLeftRadius,
        borderBottomRightRadius: style.borderBottomRightRadius,
      }}
    />
    <div style={{ position: 'relative', ...style }} >{ children }</div>
  </div>
)

export default TransparencyGrid
