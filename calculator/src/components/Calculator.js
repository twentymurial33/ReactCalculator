import React, { Component } from 'react';



export default class Calculator extends Component {
    state={
    displayValue:"0",
    waitingForOperand:false,
    operator:null
  }

  clearDisplay(){
    this.setState({
      displayValue:"0"
    })
  }

  inputDigit(digit){
    const {displayValue}=this.state
  this.setState({
    displayValue: displayValue ==="0" ? String(digit):displayValue + digit
  })
  }

  inputDot(){
    const {displayValue}=this.state
    if (displayValue.indexOf(".")===-1){
      this.setState({
        displayValue:displayValue+"."
      })
    }
      
  }
  
  clearDisplay(){
       const {displayValue}=this.state
  }

  percentSign(){
    const {displayValue}=this.state
    const value=parseFloat(displayValue)

    this.setState({
        displayValue:String(value/100)
    })
    
  }

  performOperation(operator){
    this.setState({
      waitingForOperand:true,
      operator:operator
    })
  }

  render(){
    const {displayValue}=this.state
    
    return(
      <div className="calculator">
        <div className="calculator-display">{displayValue}</div>
          <div className="calculator-keypad">
            <div className="input-keys">
                <div className="function-keys">
                    <button className="calculator-key  key-sign"onClick={()=>this.toggleOver()}>+_</button>
                    <button className="calculator-key  key-percent"onClick={()=>this.percentSign()}>%</button>
                    <button className="calculator-key  key-clear"onClick={()=>this.clearDisplay()}>AC</button>
                </div>
                  <div className="digi-keys">
                    <button className="calculator-key key-0"onClick ={()=>this.inputDigit(0)}>0</button>
                    <button className="calculator-key key-1"onClick ={()=>this.inputDigit(1)}>1</button>
                    <button className="calculator-key key-2"onClick ={()=>this.inputDigit(2)}>2</button>
                    <button className="calculator-key key-3"onClick ={()=>this.inputDigit(3)}>3</button>
                    <button className="calculator-key key-4"onClick ={()=>this.inputDigit(4)}>4</button>
                    <button className="calculator-key key-5"onClick ={()=>this.inputDigit(5)}>5</button>
                    <button className="calculator-key key-6"onClick ={()=>this.inputDigit(6)}>6</button>
                    <button className="calculator-key key-7"onClick ={()=>this.inputDigit(7)}>7</button>
                    <button className="calculator-key key-8"onClick ={()=>this.inputDigit(8)}>8</button>
                    <button className="calculator-key key-9"onClick ={()=>this.inputDigit(9)}>9</button>
                    <button className="calculator-key key-10"onClick ={()=>this.inputDigit(10)}>10</button>
                  </div>
             </div>
           </div>
        </div>
    );
  }

}