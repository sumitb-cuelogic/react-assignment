
import React, {Component} from 'react';
import Clasess from './BurgerIngredients.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component
{

    render()
    {
        let ingredient= null ;
         switch(this.props.type)
                {
                        case ('bread-bottom') :
                            ingredient=<div className={Clasess.BreadBottom}></div>;
                            break;
            
                        case ('bread-top') :
                            ingredient=(
                                <div className={Clasess.BreadTop}> 
                                    <div className={Clasess.Seeds1}></div>
                                    <div className={Clasess.Seeds2}></div>
                                </div>
                            );
                            break;
            
                        case ('meat') :
                            ingredient =<div className={Clasess.Meat}> </div>
                            break;
            
                        case ('cheese') :
                            ingredient =<div className={Clasess.Cheese}> </div>
                            break;
            
                        case ('bacon') :
                            ingredient =<div className={Clasess.Bacon}> </div>
                            break;
            
                        case ('salad') :
                            ingredient =<div className={Clasess.Salad}> </div>
                            break;
                        default :
                            ingredient =null ;
            
                }
               return (ingredient); 
    }  

}

 BurgerIngredients.propTypes={
     type : PropTypes.string.isRequired
 }

export default BurgerIngredients;