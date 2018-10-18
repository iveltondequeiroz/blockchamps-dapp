import React, { Component } from 'react'
import { Table, Label, Menu, Icon, Flag, Button, Input } from 'semantic-ui-react'


class TeamsTable extends Component {
  render() {
    return (
      <div>    
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Goals</Table.HeaderCell>
              <Table.HeaderCell>Club</Table.HeaderCell>
              <Table.HeaderCell>Country</Table.HeaderCell>
              <Table.HeaderCell>Score Goals</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>#1</Label>
              </Table.Cell>
              <Table.Cell>102</Table.Cell>
              <Table.Cell>Flamengo</Table.Cell>
              <Table.Cell><Flag name='br'/>Brazil</Table.Cell>
              <Table.Cell>
                <span>
                  <Button icon='minus' color='blue' size='small'/>
                  <Input icon="soccer" style={{width:'75px'}} size='small'></Input> 
                  <Button icon='plus' color='blue' size='small'/>
                  <Label tag color='blue' size='medium'>
                    USD 100 = &nbsp;
                    <Icon fitted name='soccer'/>12 ETH
                  </Label>
                  <Button color='green' >Score Goals</Button>
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>#2</Table.Cell>
              <Table.Cell>99</Table.Cell>
              <Table.Cell>Barcelona</Table.Cell>
              <Table.Cell><Flag name='es'/>Spain</Table.Cell>
              <Table.Cell>Score</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>#3</Table.Cell>
              <Table.Cell>98</Table.Cell>
              <Table.Cell>Real Madrid</Table.Cell>
              <Table.Cell><Flag name='es'/>Spain  </Table.Cell>
              <Table.Cell>Score</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>    
      </div>
    )
  }
}

export default TeamsTable
