
import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import Clasess from './Logo.css';

const logo =(props) =>(

    <div className={Clasess.Logo} style={{height:props.height}}>
        <img src={BurgerLogo} alt='MyBurger'/>
    </div>

);

export default logo;