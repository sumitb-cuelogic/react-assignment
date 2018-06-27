import React from 'react';
import Clasess from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
 
const navigationItems =() => (

    <ul className={Clasess.NavigationItems}>
        <NavigationItem link='/' active>Burger builder</NavigationItem>      
        <NavigationItem link='/'>Checkout</NavigationItem>        
    </ul>
 );

 export default navigationItems;