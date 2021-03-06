import React,{Component} from 'react';
import Clasess from './modal.css';
import Aux from '../../../Hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class  Modal extends Component{

    shouldComponentUpdate(nextprops,nextState)
    {
        return nextprops.show !== this.props.show;
    }

    componentWillUpdate()
    {
        console.log('[Modal] will update');
    }

    render()
    {
        return (
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={Clasess.Modal}
                    style={{
                        transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity:this.props.show ? '1' : '0' 
                    }}>
                    {this.props.children}
                </div>
    
        </Aux>

        );
    }
}

export default Modal;