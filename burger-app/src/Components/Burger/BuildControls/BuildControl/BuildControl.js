
import React from 'react';
import Clasess from './BuildControl.css';

const buildControl= (props) => (

        <div className={Clasess.BuildControl}>
            <div className={Clasess.Label} > {props.label}</div>
            <button className={Clasess.Less}onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className={Clasess.More} onClick={props.added} >More</button> 
        </div>
);

export default buildControl;