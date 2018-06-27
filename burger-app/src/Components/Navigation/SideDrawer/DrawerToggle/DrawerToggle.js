
import React from 'react';
import Clasess from './DrawerToggle.css';

const drawerToggle= (props) => (

    <div className={Clasess.DrawerToggle} onClick={props.clicked}>

            <div></div>
            <div></div>
            <div></div>
    </div>        
);

export default drawerToggle;