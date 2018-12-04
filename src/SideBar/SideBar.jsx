import React, { Component } from 'react';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
import MainContainer from '../App/MainContainer/MainContainer'; 
import Title from './title';


export default class extends Component {

  constructor() {
    super();
    this.state = {
      selected: 'Item 1',
      isOpened: false
    }
  }

  render() {
    return (
      <NavPane 
          openLength={500} 
          push 
          color={this.props.color} 
          theme={this.props.theme}
          defaultIsPaneExpanded={false}
          canPaneToggle={this.state.isOpened}
      >
        { this.renderItem('Item 1', 'Content 1') }
        { this.renderItem('Item 2', 'Content 2') }
        { this.renderItem('Item 3', 'Content 3') }
      </NavPane>
    );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={<Title title={title}/> }
        icon={this.renderIcon(title)}
        theme="light"
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <div onClick={()=> { this.setState({isOpened: !this.state.isOpened})}}>dsaas dsadsadsa </div>
        <Text >{content}</Text>
      </NavPaneItem>
    );
  }

  renderIcon(name) {
    const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
    switch(name) {
    case 'Item 1':
      return (
        <div>
              {name}
              { !this.state.isOpened ? name : '' }
            
        </div>
      );
    case 'Item 2':
      return (
       <div>   
              {name}
              { !this.state.isOpened ? name : '' }
        </div>
      );
    case 'Item 3':
      return (
        <div>
              {name}
          { !this.state.isOpened ? name : '' }
        </div>
      );
    }
  }
}