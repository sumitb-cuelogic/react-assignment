
import React from 'react';
import Clasess from './Button.css';

const button = (props) => (

    <button
        className={[Clasess.Button, Clasess[props.btnType]].join(' ')} 
        onClick={props.clicked}>
        {props.children}
    </button>
)

export default button;