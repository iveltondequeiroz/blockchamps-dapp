import React, { Component } from 'react'

import { Grid, Container, Image  } from 'semantic-ui-react'
import TiltPhaseSix from './TiltPhaseSix'

import './../css/predict.css'

class Collect extends Component {
  render(){
    const { selLang } = this.props
    //console.log("Prediction selLang", selLang)
    let comingSoon = ''
    let collect = ''
    let q3 = '' 

    switch(selLang) {
      case 'br':
        comingSoon='BREVEMENTE...'
        collect = 'COLECIONÁVEIS DE REALIDADE AUMENTADA'
        q3 = 'Trimestre 3 de 2018'
        break
      case 'es':
        comingSoon='PRÓXIMAMENTE...'
        collect = 'COLECCIONABLES DE REALIDAD AUMENTADA'
        q3 = 'Trimestre 3 de 2018'
        break
      default:
        comingSoon='COMING SOON ...'
        collect = 'AUGMENTED REALITY COLLECTIBLES'
        q3 = 'by Q3 2018'
    }

    return(
      <Container>
        <Grid columns={1} textAlign="center"><h3 style={{color:'white', padding:'30px'}}>
          {comingSoon}
        </h3></Grid>
        <Grid columns={1} textAlign="center"><h2 style={{color:'white', padding:'30px'}}>
          {collect}
        </h2></Grid>
        <Grid columns={1} textAlign="center" style={{marginTop:'10px', marginBottom:'10px'}}>  
          <TiltPhaseSix>
            <Image size='huge' src='imgs/collectible.png'/>
          </TiltPhaseSix>
        </Grid>
        <Grid columns={1} textAlign="center"><h3 style={{color:'white', padding:'50px'}}>
          {q3}
        </h3></Grid>
      </Container>
    )
  }
}

export default Collect

