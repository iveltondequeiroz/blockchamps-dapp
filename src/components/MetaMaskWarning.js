import React, { Component } from 'react'
import { Image, Grid, Card, Segment, Item } from 'semantic-ui-react'

class MetaMaskWarning extends Component {

  render() { 
    const { selLang } = this.props
    console.log('selLang>', selLang)
    return (
      <div className="container" style={{paddingTop:'40px'}}>

      <Grid columns='equal'>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Segment>
          { selLang==='en' &&
            <Card fluid>
            <Image src='imgs/logos/metamask.png' size='mini' />
            <Card.Content>
              <Card.Header>MetaMask</Card.Header>
              <Card.Description> 
                To use Ethereum in this DApp, you will need MetaMask plugin.
                It makes transactions more secure.You can install Chrome/Firefox/Opera extensions going to Metamask page below 
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Item.Group relaxed>
                <Item>
                  <Item.Content verticalAlign='middle'>
                    <Item.Header as='a'>
                      <a href='https://metamask.io/' target='_blank'>
                        Metamask Official Page
                      </a>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card.Content>
          </Card>
          }
          { selLang==='br' &&
            <Card fluid>
            <Image src='imgs/logos/metamask.png' size='mini' />
            <Card.Content>
              <Card.Header>MetaMask</Card.Header>
              <Card.Description> 
                BlockChamps DApp utiliza Ethereum. Você precisará do plugin MetaMask.
                O Metamask realiza transações com mais segurança. Você pode instalar a extensão para Chrome/Firefox/Opera indo para a pagina oficial do  Metamask abaixo 
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Item.Group relaxed>
                <Item>
                  <Item.Content verticalAlign='middle'>
                    <Item.Header as='a'>
                      <a href='https://metamask.io/' target='_blank'>
                        Metamask Pagina Oficial
                      </a>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card.Content>
          </Card>
          }
          
          </Segment>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default MetaMaskWarning

