import React, { Component } from 'react'

import { Grid, Container, Image  } from 'semantic-ui-react'
import TiltPhaseSix from './TiltPhaseSix'

import './../css/predict.css'

class Prediction extends Component {
  render(){
    const { selLang } = this.props
    let comingSoon = ''
    let pred = ''
    let q3 = '' 

    switch(selLang) {
      case 'br':
        comingSoon='BREVEMENTE...'
        pred = 'PREDIÇÕES / BATALHAS DE JOGOS'
        q3 = 'Trimestre 3 de 2018'
        break
      case 'es':
        comingSoon='PRÓXIMAMENTE...'
        pred = 'PREDICCIONES / BATALLAS DEL PARTIDO'
        q3 = 'Trimestre 3 de 2018'
        break
      default:
        comingSoon='COMING SOON ...'
        pred = 'PREDICTIONS / MATCH BATTLES'
        q3 = 'by Q3 2018'
    }

    return(
      <Container>
        <Grid columns={1} textAlign="center"><h3 style={{color:'white', padding:'30px'}}>
          {comingSoon}
        </h3></Grid>
        <Grid columns={1} textAlign="center"><h2 style={{color:'white', padding:'40px'}}>
          {pred}
        </h2></Grid>
        <Grid columns={1} textAlign="center" style={{marginTop:'10px'}}>  
          <TiltPhaseSix>
            <Image size='huge' src='imgs/predict/russia2018/russiapredict.png'/>
          </TiltPhaseSix>
        </Grid>
        <Grid columns={1} textAlign="center"><h3 style={{color:'white', padding:'50px'}}>
          {q3}
        </h3></Grid>
      </Container>
    )
  }
}

export default Prediction

