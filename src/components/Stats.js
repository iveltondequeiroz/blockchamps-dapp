import React, { Component } from 'react'
import { Segment, Header, Statistic, Icon } from 'semantic-ui-react'


class Stats extends Component {
  render() {
    const { stat, estilo, info, iconName } = this.props
    const branco = {color:'white'}
     
    return (
      <div style={{padding:'5px'}}>
        <Segment circular  style={estilo}>
          <Header as='h2'>
            <Statistic.Value style={branco}>
              <Icon name={iconName} inverted />{stat}
            </Statistic.Value>
            <Header.Subheader style={branco}>{info}</Header.Subheader>
          </Header>
        </Segment>
      </div>  
    )
  }
}

export default Stats
