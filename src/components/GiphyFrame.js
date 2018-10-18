import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'


class GiphyFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgurl: 'imgs/giphy.webp'
    }  
  }

  render() {
    return (
      <div> 
        <Image src={this.state.imgurl} />
      </div>
    )
  }
}

export default GiphyFrame
