import React, { Component } from 'react'
import { Grid, Image, Label, Segment } from 'semantic-ui-react'

import './../css/landing.css'


class Boleiros extends Component {

  render(){
    let teamlabel = this.props.selLang==='en'?"BOLEIRO TEAM":"TIME BOLEIRO"
    const labelStyle = {color:'white', backgroundColor:'green'}
    const labelStyle2 = {color:'lightblue', backgroundColor:'green'}
    return(
      <div className='centre' style={{width:'800px', marginTop:'50px', marginBottom:'30px'}}>
        <Grid>
            <Grid.Column width={16} textAlign='center'>
                <h2 style={{color:'white'}}>{teamlabel}</h2>
              <Segment.Group basic horizontal style={{backgroundColor:'green', border: 'none' }} >
                <Segment basic style={{border: 'none'}} textAlign='center'>
                  <Image size='tiny' src='/imgs/boleiros/caioc.jpg' avatar />
                  <Label style={labelStyle}>Caio Cesar</Label>
                  <Label style={labelStyle2}>CTO/DevOps</Label>
                </Segment>
                <Segment basic style={{border: 'none'}} textAlign='center'>
                  <Image size='tiny' src='/imgs/boleiros/circe.jpg' avatar />
                  <Label style={labelStyle}>Circe Ventilari</Label>
                  <Label style={labelStyle2}>Art Director</Label>
                </Segment>
                <Segment basic style={{border: 'none'}} textAlign='center' >
                  <Image size='tiny' src='/imgs/boleiros/iveltonq.jpg' avatar />
                  <Label style={labelStyle}>Ivelton Queiroz</Label><br/>
                  <Label style={labelStyle2}>CEO/Dev Director</Label>
                </Segment>
                <Segment basic style={{border: 'none'}} textAlign='center'>
                  <Image size='tiny' src='/imgs/boleiros/fausto.jpg' avatar />
                  <Label style={labelStyle}>Fausto JR</Label><br/>
                  <Label style={labelStyle2}>Animation Director</Label>
                </Segment>
                <Segment basic style={{border: 'none'}} textAlign='center'>
                  <Image size='tiny' src='/imgs/boleiros/layla.jpg' avatar />
                  <Label style={labelStyle}>Layla Ventilari</Label>
                  <Label style={labelStyle2}>PR/Marketing</Label>
                </Segment>
              </Segment.Group>  
            </Grid.Column>  
        </Grid>
      </div>
    )
  }
}
export default Boleiros

