import React, { Component } from 'react'
import { Segment, Header, Image, Label, Flag } from 'semantic-ui-react'


class WorldRank extends Component {
 
  render() {
    const { eurChamp, asiaChamp, samChamp, namChamp, oceChamp, afrChamp,lang } = this.props
    const verde={backgroundColor:'green', color:'white'}    
    const verdecentro={backgroundColor:'green', color:'white', align:'auto'}    
    const eurImg='/imgs/eur/'+eurChamp.country+'/'+eurChamp.id+'.png'    
    const asiaImg='/imgs/asia/'+asiaChamp.country+'/'+asiaChamp.id+'.png'    
    const samImg='/imgs/sam/'+samChamp.country+'/'+samChamp.id+'.png'    
    const namImg='/imgs/nam/'+namChamp.country+'/'+namChamp.id+'.png'
    const oceImg='/imgs/aus/'+oceChamp.country+'/'+oceChamp.id+'.png'
    const afrImg='/imgs/afr/'+afrChamp.country+'/'+afrChamp.id+'.png'
    let eur='', asia='', sam='', nam='', oce='', afr='' 
    switch(lang){
      case 'br': eur='Europa'; asia='Asia'; sam='America do Sul'; nam='America do Norte'; oce='Oceania'; afr='Africa'; break; 
      case 'es': eur='Europa'; asia='Asia'; sam='Sudamerica'; nam='Norteamérica'; oce='Oceanía'; afr='África'; break;
      default: eur='Europe'; asia='Asia'; sam='South America'; nam='North America'; oce='Oceania'; afr='Africa'; break;
    }
          
    return (
      <div> 
        <Segment.Group horizontal style={{height:'120px', backgroundColor:'green'}}>
          <Segment size='small' textAlign="center">
            <Header as='h4' style={{color:'white'}}>{eur}</Header>
            <Label style={verdecentro} >
              <Image size='big' centered src={eurImg} style={verde} /> 
              {eurChamp.name}&nbsp;<Flag name={eurChamp.country}/>
            </Label>
          </Segment>
          <Segment size='small' textAlign="center">
            <Header as='h4' style={{color:'white'}}>{asia}</Header>
            <Label style={verde}>
              <Image size='big' centered src={asiaImg} style={verde} />
              {asiaChamp.name} &nbsp;<Flag name={asiaChamp.country}/>
            </Label>
          </Segment>
          <Segment size='small' textAlign="center">
            <Header as='h4' style={{color:'white'}}>{sam}</Header>
            <Label style={verde}>
              <Image size='big' centered src={samImg} style={verde}/> 
              {samChamp.name}&nbsp;<Flag name={samChamp.country} />
            </Label>
          </Segment>
          <Segment size='small' textAlign="center">
            <Header as='h4' style={{color:'white'}}>{nam} </Header>
            <Label style={verde}>
              <Image size='big' centered src={namImg} style={verde} /> 
              {namChamp.name}&nbsp;<Flag name={namChamp.country} />
            </Label>
          </Segment>
          <Segment size='small' textAlign="center">
            <Header as='h4' style={{color:'white'}}>{oce}</Header>
            <Label style={verde}>
              <Image size='big' centered src={oceImg} style={verde}/>
              {oceChamp.name} &nbsp;<Flag name={oceChamp.country}/></Label>   
          </Segment>
          <Segment size='small' textAlign="center">
            <Header as='h4' style={{color:'white'}}>{afr}</Header>
            <Label style={verde}>   
            <Image size='big' centered src={afrImg} style={verde}/>
              {afrChamp.name} &nbsp;<Flag name={afrChamp.country}/></Label>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

export default WorldRank
