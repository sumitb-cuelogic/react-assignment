
import React from 'react';

const validation = (props) =>
{

    let validationText ='Text long enough !';

    if(props.textLenght<=0)
    {
        return null;
    }
    if(props.textLenght < 5)
    {
        validationText='Text is short !';
    }
    return (
            <div>
                <p>{validationText}</p> 
            </div>
        );
}

export default validation;