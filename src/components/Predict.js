import React from 'react'

import { Image, Grid, Segment, Button, Input, Container, Header, Icon} from 'semantic-ui-react'
import { Step, Label } from 'semantic-ui-react'

import TeamLabel from  './TeamLabel'
import './../css/predict.css'


const Predict = () => (
  <Container style={{backgroundColor: '#d60e10ff', paddingTop:'20px'}}>
    <Grid columns={1} textAlign="center"><h2 style={{color:'white', paddingTop:'20px'}}>RUSSIA WORLD CUP 2018</h2></Grid>
    <Grid columns={1} textAlign="center"><h3 style={{color:'white'}}>WHICH TEAM WILL BE THE CHAMPION ?</h3></Grid>
    <Grid columns={3}>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment style={{backgroundColor:'#d60e10'}}>
            <TeamLabel name='Russia' image='imgs/predict/russia2018/russia.png'/>
          </Segment >        
          <Segment style={{backgroundColor:'#d60e10'}}>
            <TeamLabel name='Spain' image='imgs/predict/russia2018/spain.png'/>
          </Segment >
          <Segment style={{backgroundColor:'#d60e10'}}>
            <TeamLabel name='Belgium' image='imgs/predict/russia2018/belgium.png'/>
          </Segment>
          <Segment style={{backgroundColor:'#d60e10'}}> 
            <TeamLabel name='Brazil' image='imgs/predict/russia2018/brazil.png'/>
          </Segment>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Segment style={{backgroundColor:'#d60e10'}}>
            <Image src='imgs/predict/russia2018.png' />
            <Header as='h2' style={{color:'white'}}>Prize 5.75 ETH <Icon name='ethereum' /></Header>
          </Segment>
          <Segment style={{backgroundColor:'#d60e10'}} raised>
            <Header as='h4' style={{color:'white'}}>Team Selected</Header>
            <Header as='h1' style={{color:'white'}}>
                <Image src='imgs/predict/russia2018/brazil.png' />
                Brazil
            </Header>
            
            <Input iconPosition='left' placeholder='enter USD value' style={{width:'174px'}}></Input>
            <Button as='div' labelPosition='left' primary style={{width:'174px'}}>
              <Label as='a' basic pointing='right'>
                ETH 0,20
              </Label>
              <Button>
               Confirm
            </Button>
    </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment style={{backgroundColor:'#d60e10'}}>
            <TeamLabel name='France' image='imgs/predict/russia2018/france.png'/>
          </Segment>
          <Segment style={{backgroundColor:'#d60e10'}}>
            <TeamLabel name='Portugal' image='imgs/predict/russia2018/portugal.png'/>
          </Segment>
          <Segment style={{backgroundColor:'#d60e10'}}>
            <TeamLabel name='Croatia' image='imgs/predict/russia2018/croatia.png'/>
          </Segment>
          <Segment style={{backgroundColor:'#d60e10'}}>
            <TeamLabel name='Mexico' image='imgs/predict/russia2018/mexico.png'/>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid columns={1}>
    <Grid.Row centered>
      <Segment>
        <Header as='h2'>How it Works ?</Header>
          <Step.Group>
            <Step>
              <Step.Content>
                <Step.Title>Select your team</Step.Title>
                <Step.Description>Choose your shipping options</Step.Description>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Step.Title>Inform ETH amount</Step.Title>
                <Step.Description>Enter the prediction amount</Step.Description>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Step.Title>Confirm transaction in MetaMask</Step.Title>
                <Step.Description>IF you need to install Metamask, click here</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
      </Segment>    
    </Grid.Row>
    </Grid>
    

  </Container>
)

export default Predict
