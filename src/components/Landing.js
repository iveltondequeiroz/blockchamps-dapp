import React, { Component } from 'react'  
import { Container, Image, Grid, Divider } from 'semantic-ui-react'
import { Header, Segment, List } from 'semantic-ui-react'

import ReactPlayer from 'react-player'

import SelectLanguage from './SelectLanguage'
import TiltPhaseSix from './TiltPhaseSix'
//import Boleiros from './Boleiros'
import SocialBar from './SocialBar'

import enLanguage from '../json/en-translation.json'
import brLanguage from '../json/br-translation.json'
import esLanguage from '../json/es-translation.json'

import './../css/landing.css'


class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lang: 'en',
      languageData: [{landing:{}}],
      bgAudio : new Audio("sounds/flabota.mp3"),
    }
    this.setLanguage = this.setLanguage.bind(this)
  }

  componentDidMount() {
    this.setLanguage(this.props.selLang)
  }

  setLanguage(lang){
    let newLanguage = null;
    switch(lang){
      case 'br': newLanguage = brLanguage; break;
      case 'es': newLanguage = esLanguage; break;
      default: newLanguage = enLanguage; break;
    }
    this.setState({languageData: newLanguage, lang})
    this.props.changeLang(lang)
  }  

  render() {
    const circle = { width: 145, height: 145, backgroundColor:'darkgreen' }
    const land = this.state.languageData[0].landing
    const valormsg = this.props.selLang==='en'?'1 GOAL = about 1 USD in Ether':'1 GOL = cerca de 1 USD em Ether' 
    return ( 
      <Container>
        <Grid columns={1} textAlign="center">
          <TiltPhaseSix>
            <Image src='/imgs/landing/logo.png' size='big'/>
          </TiltPhaseSix>  
        </Grid>
        <Grid columns={1} textAlign="center">
          <h3 style={{color:'white'}}>{land.title}</h3>
        </Grid>
        
        <Grid stackable>
            <Grid.Row>
            </Grid.Row>  
            <Grid.Row>
              <Grid.Column width={4} textAlign="center"></Grid.Column>
              <Grid.Column width={6}>  
                <ReactPlayer url='/videos/blockchampsintro.mp4' className="videoframe" 
                             volume={0.4} controls={true} width='480px' height='360px'/>               
              </Grid.Column>
              <Grid.Column width={6} textAlign="center"></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid columns={1} textAlign="center">
                <h3 style={{color:'white'}}>{land.passion}</h3>
              </Grid>
            </Grid.Row>
              

            <Grid.Row>
              <Grid.Column width={5} textAlign="center"></Grid.Column>
              <Grid.Column width={6} textAlign="center">
              <SelectLanguage selLang={this.props.selLang} setLanguage={this.setLanguage}/>  
              </Grid.Column>
              <Grid.Column width={5} textAlign="center"></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <TiltPhaseSix>
                  <Image src='/imgs/landing/land1.png'/>
                </TiltPhaseSix>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h2' style={{color:'white'}}>{land.section1Title}</Header>
                <Header as='h2' style={{color:'white'}}> 
                  {land.section1Text}
                </Header>
                  <div className="center">
                    <Segment circular  style={circle} >
                      <Header as='h4' style={{color:'lightblue'}}>
                        {valormsg}
                      </Header>
                    </Segment>
                  </div>  
              </Grid.Column>
            </Grid.Row>
              
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h2' style={{color:'lightblue'}}>{land.section2Title}</Header>
                <Header as='h2' style={{color:'white'}}> 
                  {land.section2Text}
                </Header>
                <Header as='h3' style={{color:'white'}}>
                  {land.section2Text2}
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src='/imgs/landing/artrophy.png'/>              
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column width={8}>
                <TiltPhaseSix>
                  <Image src='/imgs/landing/boleirotoken.png' />
                </TiltPhaseSix>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h2' style={{color:'lightblue'}}>
                  {land.section3Title}
                </Header>
                <Header as='h2' style={{color:'white'}}>
                  {land.section3Text}
                </Header>
                <Header as='h3' style={{color:'white'}}>
                  {land.section3Text2}
                </Header>  
              </Grid.Column>
            </Grid.Row>
            <Divider/>

            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h2' style={{color:'lightblue'}}>{land.section4Title}</Header>
                <Header as='h2' style={{color:'white'}}>
                  {land.section4Text}
                </Header>
                <Header as='h3' style={{color:'white'}}>
                  {land.section4Text2}
                </Header>  
              </Grid.Column>
                <Grid.Column width={8}>
                <Image src='/imgs/landing/russia2018.png' />
              </Grid.Column>
            </Grid.Row>
            
            
            <Grid.Row>
              <Grid.Column width={8}>
                <Image src='/imgs/landing/isles.png'/>  
              </Grid.Column>
              <Grid.Column width={8}>
              <Header as='h2' style={{color:'lightblue'}}>
                {land.section5Title}
              </Header>
                <Header as='h2' style={{color:'white'}}>
                {land.section5Text}
              </Header>  
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={4} textAlign="center"></Grid.Column>
              <Grid.Column width={8}>  
                <TiltPhaseSix>
                  <Image size='big' src='/imgs/roadmap.png'/>
                </TiltPhaseSix>
              </Grid.Column>
              <Grid.Column width={4} textAlign="center"></Grid.Column>
            </Grid.Row>
            </Grid>
            <Grid>  
            
            <SocialBar selLang={this.props.selLang} />
            
            { 
              (this.state.lang!=='xy') &&

              <Grid.Row style={{marginTop:'20px'}}>
              <Grid.Column width={16}>
              <Segment style={{backgroundColor:'darkgreen'}}>
                <Header as='h2' style={{color:'lightgreen'}}>
                  {land.donationsTitle}
                </Header>
                <Header as='h3' style={{color:'lightgreen'}}>
                  {land.donations}    
                </Header>
              
                <List>
                  <List.Item>
                    <Image avatar src='/imgs/landing/btc.png' />
                    <List.Content>
                      <List.Header style={{color:'lightblue'}}>1KLDtx1vMNqyv9N9fuxpuxuULLQhowMpUG</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src='/imgs/landing/eth.png' />
                    <List.Content>
                      <List.Header style={{color:'lightblue'}}>0xEC1c51000a09907DC8e80efb6835d38c8288fA55</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src='/imgs/landing/doge.png' />
                    <List.Content>
                      <List.Header style={{color:'lightblue'}}>DFd8dDsyo2chHChoNhUwVcGZGrz2GFkXTB</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
              </Grid.Column>
            </Grid.Row>
            }
          </Grid>
      </Container>    
    )           
  }
}

export default Landing
