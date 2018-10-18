import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class SocialBar extends Component {

  render(){
    let contactus = this.props.selLang==='en'?"REACH US":"CONTATOS"
    return(
      <div className='centre' style={{marginTop:'50px', marginBottom:'30px'}}>
        <Grid columns={16} textAlign="center">
          <h4 style={{color:'white'}}>{contactus}</h4>
        </Grid>  
        <Grid  columns={16} textAlign="center" style={{marginTop:'20px'}}>
           <a href='https://twitter.com/blockchamps' target='_blank'><Image src='/imgs/social/twitter.png' /></a>
           <a href='https://www.facebook.com/blockchamps.dapp.3' target='_blank'><Image src='/imgs/social/facebook.png' /></a>
           <a href='https://www.youtube.com/channel/UCobueIQ0xU8S4hIt0NdfZtA' target='_blank'><Image src='/imgs/social/youtube.png' /></a>
           <a href='mailto:blockchampions@protonmail.ch?subject=Feedback'><Image src='/imgs/social/email.png' /></a>
        </Grid>
      </div>
    )
  }
}
export default SocialBar

