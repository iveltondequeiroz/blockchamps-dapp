import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'


const menuStyle = {
  color: '#ffffff',
  backgroundColor: '#0055d4',
  margin: '2px',
  height: '60px'

}

class Header extends Component {

  constructor() {
    super();
    this.state = {
      item1: 'CRYPTO-WORLD CHAMPIONSHIP',
      item2: 'COMING SOON',
      activeItem:'landing'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let lang = this.props.selLang
    //console.log("this.props.selLang", this.props.selLang)
    return ( 
      <div>   
        { (lang === 'en') && 
            <Menu stackable style={menuStyle} inverted fluid widths={5} >
              <Menu.Item as={Link} to='/howto' name='howto' >
                HOW TO PLAY
              </Menu.Item>

              <Menu.Item as={Link} to='/champs' name='champs' >
                CRYPTO-WORLD CHAMPIONSHIP
              </Menu.Item>

              <Menu.Item as={Link} to='/' name='landing'  >
                <Image src='/imgs/logo-sml.png' />
              </Menu.Item>

              <Menu.Item as={Link} to='/collect' name='collect' >
                AR COLLECTIBLES        
              </Menu.Item>

              <Menu.Item as={Link} to='/predict' name='prediction' >
                PREDICTIONS        
              </Menu.Item>
          </Menu>
        }

        { (lang ==='br') && 
          <Menu stackable style={menuStyle} inverted fluid widths={5} >

            <Menu.Item as={Link} to='/howto' name='howto' >
              COMO JOGAR
            </Menu.Item>

            <Menu.Item as={Link} to='/champs' name='champs' >
              CAMPEONATO CRYPTO-MUNDIAL
            </Menu.Item>

            <Menu.Item as={Link} to='/' name='landing' >
              <Image src='/imgs/logo-sml.png' />
            </Menu.Item>

            <Menu.Item as={Link} to='/collect' name='collect' >
              COLECIONÁVEIS R.A.        
            </Menu.Item>

            <Menu.Item as={Link} to='/predict' name='prediction' >
              PREDIÇÔES        
            </Menu.Item>

          </Menu>
        }

        { (lang ==='es') && 
          <Menu stackable style={menuStyle} inverted fluid widths={5} >

            <Menu.Item as={Link} to='/howto' name='howto' >
              CÓMO JUGAR
            </Menu.Item>

            <Menu.Item as={Link} to='/champs' name='champs' >
              CAMPEONATO CRYPTO MONDIAL
            </Menu.Item>

            <Menu.Item as={Link} to='/' name='landing' >
              <Image src='/imgs/logo-sml.png' />
            </Menu.Item>

            <Menu.Item as={Link} to='/collect' name='collect' >
              COLECCIONABLES A.R.        
            </Menu.Item>

            <Menu.Item as={Link} to='/predict' name='prediction' >
              PREDICCIONES       
            </Menu.Item>

          </Menu>
        }
      </div>          
    )
  }
}
export default Header

// onClick={this.handleItemClick}
// onClick={this.handleItemClick}