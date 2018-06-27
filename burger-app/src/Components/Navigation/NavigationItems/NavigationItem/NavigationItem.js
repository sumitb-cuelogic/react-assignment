
import React from 'react';
import Clasess from './NavigationItem.css';


const navigationItem =(props) => (

        <li className={Clasess.NavigationItem}>
            <a 
                className={props.active ? Clasess.active : null}
                href={props.link}>
                {props.children}</a>
        </li>
);

export default navigationItem;