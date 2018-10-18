import React, { Component } from 'react'
import { Button, Input, Label, Icon } from 'semantic-ui-react'


class InputGoals extends Component {


  constructor() {
    super();
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      value: 1
    }
  }

  get value() {
    return this.state.value;
  }

  increment() {
    let val = Number(this.state.value)+1
    this.setState({ value: val })
  }

  decrement() {
    if (this.state.value < 2) return;
    this.setState({ value: this.state.value - 1 })
  }

  handleInputChange(e){
    let numbers = /^[0-9]+$/;
    let val = e.target.value
    console.log("Number(val)", Number(val))
    if(val.match(numbers)){
      if(Number(val) === 0) {
        e.target.value = '1'
      }  
      this.setState({
        value: e.target.value 
      });
    }
  }

  render(){
    const { goalprice, etherPrice, team, teamScoreGoals, receiveTitle } = this.props

    return(
      <span>
        <Button icon='minus' onClick={this.decrement} color='blue' size='small'/>
        <Input icon="soccer" value={this.state.value} onChange={this.handleInputChange.bind(this)}
         style={{width:'75px'}} size='small'>
        </Input> 
        <Button icon='plus' onClick={this.increment} color='blue' size='small'/>
        <Label tag color='blue' size='medium'>
          {(this.value * Number(goalprice)).toFixed(4)} ETH = {((goalprice * this.value) * etherPrice).toFixed(2)} USD 
          
        </Label>
        <div style={{paddingTop:'10px'}}>       
          <Button style={{width:'100%'}} color='green' 
                  onClick={(e) => teamScoreGoals(team, this.state.value)}>

            {team.isScoring && <Icon name='soccer' loading />}
            {team.buttonLabel}
          </Button>
        </div>
        <span
         className='centerScorer'>
          {(this.value >=2  && team.tx ==="0x0") &&  
            <Label size='medium'>{receiveTitle} {this.value * 2} Boleiros (BLR)</Label>
        }
        </span>                
      </span>    
    )
  }
}

export default InputGoals