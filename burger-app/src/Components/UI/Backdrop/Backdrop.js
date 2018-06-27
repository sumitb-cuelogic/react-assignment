
import React from 'react';
import Clasess from './Backdrop.css';

const backdrop = (props) =>(

    props.show ? <div className={Clasess.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;