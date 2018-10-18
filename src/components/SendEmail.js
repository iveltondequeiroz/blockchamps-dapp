import React, { Component } from 'react'
import { Button, Form, Grid, Segment, TextArea, Message } from 'semantic-ui-react'

class SendEmail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      msg: '',
      isHidden: 'hidden'
    }
  }  

  handleEmail(e){
    this.setState({email: e.target.value})
  }

  handleText(e){
    this.setState({msg: e.target.value})
  }

  validate(){
    if(this.state.email==='' || this.state.msg==='') {
      this.setState({isHidden:''})
      return false;
    }
    this.props.sendEmail(this.state.email, this.state.msg)
  }

  handleDismiss = () => {
    this.setState({isHidden: 'hidden'})
  }

  render() {
    return (
      <div className='email-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment>
                <Form.Input value={this.state.email} onChange={this.handleEmail.bind(this)}   
                  type="email" name="email" fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <TextArea value={this.state.msg} onChange={this.handleText.bind(this)} placeholder='Tell us more' style={{ minHeight: 100 }} />
                <Message hidden={this.state.isHidden} color='red' attached
                  content={'Fill out the fields to send a message'}
                  onDismiss={this.handleDismiss}                  
                />
                <Button primary style={{margin:'5px'}} onClick={(e) => this.validate()}>Send</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>   
    )  
  }
}

export default SendEmail
