import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExamplePointing extends Component {
constructor(props) {
      super(props);
      this.state = {
        activeItem: 'home'
      };
      this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {

    return (
      <div className="container">
        <Menu pointing>
          <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={this.state.activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={this.state.activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='' />
        </Segment>
      </div>
    )
  }
}