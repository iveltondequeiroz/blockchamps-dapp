import React, { Component } from 'react'
import { Segment, Header, Image, Flag, Icon, Statistic } from 'semantic-ui-react'

import '../css/champ.css'

class Champ extends Component {
  render() {
    const { region, country, countryName, logo, club, goals, flag, leaderTitle, championshipTitle, goalsTitle } = this.props
    
    return (
      <div> 
        <div className="imgframe" style={{backgroundImage: "url(/imgs/maps/"+region+"/"+ (country ==='none' ? region : country) +".png)"}} >
          <Image className="imgbottom"  centered src={logo}/>
          <Image className="imgtop" centered src='/imgs/champsfaixa.png'/>
        </div>
        
        <Segment.Group horizontal style={{height:'150px'}}>
          <Segment size='small'>
            <Header as='h4'>{leaderTitle}</Header>
            
            <Statistic>
              <Statistic.Value>
                <Icon name='trophy' />
                #1   
              </Statistic.Value>
              <Statistic.Label>{championshipTitle}</Statistic.Label>
            </Statistic>
          </Segment>
          <Segment size='small'>
            <Header as='h4'>{club}</Header>
            <Statistic>
              <Statistic.Value>
                <Icon name='soccer' />{goals}
              </Statistic.Value>
              <Statistic.Label>{goalsTitle}</Statistic.Label>
            </Statistic>
            <span><Flag name={flag}/>{countryName}</span>
            
          </Segment>
          
        </Segment.Group>
      </div>
    )
  }
}

export default Champ
