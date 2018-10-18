import React, { Component } from 'react'

import Champs from './Champs'
import Landing from './Landing'
import Prediction from './Prediction'
import Collect from './Collect'
import Howto from './Howto'

import { Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route 
            exact path='/'
            render={(props) => <Landing {...props} changeLang={this.props.changeLang} selLang={this.props.selLang} />} 
          />
          <Route 
            exact path='/champs' 
            render={(props) => <Champs {...props} selLang={this.props.selLang} />} 
          />
          <Route 
            exact path='/howto' 
            render={(props) => <Howto {...props} changeLang={this.props.changeLang} selLang={this.props.selLang} />} 
          />
          
          <Route 
            exact path='/predict'
            render={(props) => <Prediction {...props} selLang={this.props.selLang} />} 
          />      

          <Route 
            exact path='/collect'
            render={(props) => <Collect {...props} selLang={this.props.selLang} />} 
          />      
        </Switch>
      </main> 
    )
  }  
}  


export default Main

