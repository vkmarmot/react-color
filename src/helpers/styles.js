export const boxShadow = ({ x = 0, y = 0, blur = 0, spread = 0, color }) => ({
  boxShadow: `${ x }px ${ y }px ${ blur }px ${ spread }px ${ color }`,
})

export const rgba = ({ r = 0, g = 0, b = 0, a = 1 }) =>
  `rgba(${ r }, ${ g }, ${ b }, ${ a })`

export const borderRadius = ({ tl = 0, tr = 0, bl = 0, br = 0 }) => ({
  borderTopLeftRadius: tl,
  borderTopRightRadius: tr,
  borderBottomLeftRadius: bl,
  borderBottomRightRadius: br,
})

export const padding = ({ top, right, bottom, left, x, y }) => ({
  paddingTop: y || top,
  paddingRight: x || right,
  paddingBottom: y || bottom,
  paddingLeft: x || left,
})

export const border = ({ width = 1, style = 'solid', color = '#000' }) => ({
  borderWidth: width,
  borderStyle: style,
  borderColor: color,
})
