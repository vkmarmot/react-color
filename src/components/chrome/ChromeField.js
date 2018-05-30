import React from 'react';

let STYLE = {
    paddingLeft: '6px'
};
export const ChromeField = ({ style = {}, children }) => (
    <div style={ { ...STYLE, ...style } } className="display-flex">
        { children }
    </div>
);
