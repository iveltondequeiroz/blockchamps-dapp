import React, { Component } from 'react'  
import { Container, Image, Grid } from 'semantic-ui-react'

import SelectLanguage from './SelectLanguage'
import TiltPhaseSix from './TiltPhaseSix'

import enLanguage from '../json/en-howto.json'
import brLanguage from '../json/br-howto.json'
import esLanguage from '../json/es-howto.json'

import './../css/landing.css'

class Howto extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lang: 'en',
      languageData: [{howto:{}}]
    }
    this.setLanguage = this.setLanguage.bind(this)
  }

  componentDidMount() {
    this.setLanguage(this.props.selLang)
  }


  setLanguage(lang){
    //console.log("getLanguage", lang)
    let newLanguage = null;
    switch(lang){
      case 'br': newLanguage = brLanguage; break;
      case 'es': newLanguage = esLanguage; break;
      default: newLanguage = enLanguage; break;
    }
    this.setState({languageData: newLanguage})
    this.props.changeLang(lang)
  }  

  render() {
    const howto = this.state.languageData[0].howto
    return ( 
      <Container>
        <Grid stackable>
            <Grid.Row>
              <Grid columns={16} textAlign="center" style={{margin:'20px'}}>
                <h1 style={{color:'white'}}>{howto.title}</h1>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16} textAlign="center" style={{margin:'20px', color:'white'}}>
                <SelectLanguage selLang={this.props.selLang} setLanguage={this.setLanguage}/>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h4 style={{color:'white'}}>{howto.obs}</h4>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step1}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16} >
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht1.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>



            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step1b}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht2.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step1c}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16} >
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht1b.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step2}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht3.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step3}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht4.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>


            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step5}</h3>
                <h3 style={{color:'white'}}>{howto.step5b}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht6.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step6}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht7.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step7}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht8.png' style={{marginBottom:'30px'}} />
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step8}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht9.png' style={{marginBottom:'30px'}}/>
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16}>
                <h3 style={{color:'white'}}>{howto.step9}</h3>
              </Grid>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <TiltPhaseSix>
                  <Image size='huge' src='/imgs/howto/ht9c.png' style={{marginBottom:'30px'}}/>
                </TiltPhaseSix>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid columns={16} textAlign="center">
                <h2 style={{color:'white'}}>{howto.step10}</h2>
                <h2 style={{color:'white', marginBottom:'30px'}}>{howto.step11}</h2>
                <Image src='/imgs/howto/goal.png' style={{marginBottom:'30px'}}/>
              </Grid>
            </Grid.Row>

          </Grid>
      </Container>    
    )           
  }
}

export default Howto

