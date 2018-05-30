import React from 'react';

let STYLE = {
    marginLeft: '-6px'
};
let DEFAULT_CLASS_NAME = "flexbox-fix chrome-fields display-flex";

export const ChromeFieldsWrap = ({ style = {}, className = '', children }) => (
    <div style={ { ...STYLE, ...style } } className={DEFAULT_CLASS_NAME + (className ? ` ${className}` : '')}>
        { children }
    </div>
);
