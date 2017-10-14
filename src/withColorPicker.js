// @flow
import React from 'react'

import { childContextTypes } from './ColorWrap'

const withColorPicker = (
  Component: React.Component,
  contextTypes = childContextTypes
) => {
  const SpliceContext = (props, context) =>
    <Component { ...context } { ...props } />
  SpliceContext.contextTypes = contextTypes
  return SpliceContext
}

export default withColorPicker
