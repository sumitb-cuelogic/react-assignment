import React from 'react';
import Clasess from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) =>(

    <header className={Clasess.Toolbar}>
       <DrawerToggle  clicked={props.drawerToggleClicked}/>
        <div className={Clasess.Logo}>
            <Logo />
        </div>
        <nav className={Clasess.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;