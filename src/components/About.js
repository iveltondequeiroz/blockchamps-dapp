import React, { Component } from 'react'
import { Grid, Container, Image } from 'semantic-ui-react'

import axios from 'axios'
import TiltPhaseSix from './TiltPhaseSix'

//import GphApiClient from 'giphy-js-sdk-core'
//
//let client = GphApiClient("zWNOx02zC9m3hLccyb3o1vnKU2CqZ9xW")



class About extends Component {
  
  componentWillMount(){
    //this.searchGiphy()
  }

  searchGiphy(){

    let that = this

    var authOptions = {
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q=soccer&api_key=zWNOx02zC9m3hLccyb3o1vnKU2CqZ9xW&limit=2',
      headers: {
        'Content-Type': 'text/html'
      },
      json: true
    };

    axios(authOptions)
    .then(function (response) {
      console.log(response.data.data[0].url);
      that.setState({giphy: response.data.data[0].url})
    })
    .catch(function (error) {
      console.log(error);
    });   


  }  

  render(){
    return(
      <Container>

        <Grid columns={1} textAlign="center" style={{paddingTop:'80px'}}>
          <TiltPhaseSix>
            <Image size='big' src='/imgs/collectible.png'/>
          </TiltPhaseSix>
        </Grid>

        <Grid columns={1} textAlign="center" style={{paddingTop:'80px'}}>
          <TiltPhaseSix>
            <Image size='big' src='/imgs/roadmap.png'/>
          </TiltPhaseSix>
        </Grid>
   
      </Container>
    )
  }

}
export default About

