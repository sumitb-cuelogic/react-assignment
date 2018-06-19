import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation.js'
import Char from './Char/Char';

class App extends Component {
  
  state={

    inputText:''
  };

  inputChangeHandler = (event) =>
  {
        this.setState({
          inputText:event.target.value
        });
       
  }
  
  deleteCharHandler = (index) =>
  {
        const text=this.state.inputText.split('');
        text.splice(index,1);

        const updateText=text.join('');
       this.setState({inputText:updateText});
  }

  render() {
        const charList=this.state.inputText.split('').map((ch,index) =>{
          return <Char  
                  character={ch} 
                  key={index}
                  clicked={()=>this.deleteCharHandler(index)}
                  />
        });

    return (
      <div className="App">
        
        <input type='text' 
                onChange={this.inputChangeHandler}
                value={this.state.inputText} />
        <p>{this.state.inputText}</p>
        <Validation textLenght={this.state.inputText.length}/>
        
        {charList}
      </div>
    );
  }
}

export default App;
