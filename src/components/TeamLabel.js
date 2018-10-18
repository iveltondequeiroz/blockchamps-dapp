import React from 'react'

import { Image, Label, Checkbox } from 'semantic-ui-react'

const TeamLabel = (props) => (
  <Label as='a' image size='massive' style={{backgroundColor:'#d60e10', color:'white'}}>
    <span style={{marginLeft:'20px'}}>
      <Checkbox toggle style={{marginRight:'30px'}}/>
      <Image src={props.image} />
      {props.name}
    </span>
  </Label>
)

export default TeamLabel