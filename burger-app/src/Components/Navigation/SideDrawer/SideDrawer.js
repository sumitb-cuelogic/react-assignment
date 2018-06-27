
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Clasess from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../Hoc/Aux';

const sideDrawer =(props) =>{

    let attachedClasess=[Clasess.SideDrawer,Clasess.Close];

    if(props.open)
    {
        attachedClasess=[Clasess.SideDrawer,Clasess.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
                <div className={attachedClasess.join(' ')}>
                    <div className={Clasess.Logo}>
                        <Logo/>
                    </div>
                    <nav>
                        <NavigationItems/>    
                    </nav>
                </div>
        </Aux>
    );
}

export default sideDrawer;