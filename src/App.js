import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sellang: 'en'
    }

    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage(newLang){
    this.setState({sellang: newLang})
  }

  render() {
    return ( 
      <div>
        <Header selLang={this.state.sellang} />
        <Main style={{marginBottom: '5px'}} selLang={this.state.sellang} changeLang={this.changeLanguage} />
      </div>  
    )
  }
}

export default App
