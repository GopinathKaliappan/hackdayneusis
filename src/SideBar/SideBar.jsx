import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { bars } from '@fortawesome/free-solid-svg-icons';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
import MainContainer from '../App/MainContainer/MainContainer'; 
import Title from './title';




const menus = {
  items: ['itemOne', 'itemTwo', 'itemThree', 'itemFour' ],
  itemOne: { 
    name: 'Home', 
    icon: 'google'
  },
  itemTwo: { 
    name: 'Dashboard', 
    icon: 'google'
  },
  itemThree: { 
    name: 'Settings', 
    icon: 'yahoo'
  }      
}
export default class extends Component {

  constructor() {
    super();
    this.state = {
      selected: 'itemOne',
      isOpened: false
    }
  }

  render() {
    return (
      <div>
          <div onClick={()=> { this.setState({isOpened: !this.state.isOpened})}} >

            <FontAwesomeIcon 
                icon={faBars}   
                className={'common-icon'}
            />
          </div>
      <NavPane 
          openLength={500} 
          push 
          icon={this.renderIcon('itemOne')}
          color={this.props.color} 
          theme={this.props.theme}
          defaultIsPaneExpanded={false}
          canPaneToggle={this.state.isOpened}
      >
        { this.renderItem('itemOne', 'Content 1') }
        { this.renderItem('itemTwo', 'Content 2') }
        { this.renderItem('itemThree', 'Content 3') }
      </NavPane>
      </div>
    );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={<Title title={menus[title].name}/> }
        icon={this.renderIcon(title)}
        theme="light"
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <div>dsaas dsadsadsa </div>
        <Text >{content}</Text>

      </NavPaneItem>
    );
  }

  renderIcon(name) {
    const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';

    switch(name) {
    case 'itemOne':
      return (
        <div>
        <FontAwesomeIcon icon={['fab', menus[name].icon]} />           
        <span className={'ml-10'}>{ !this.state.isOpened ? menus[name].name : '' }</span>
            
        </div>
      );
    case 'itemTwo':
      return (
       <div>   
         <FontAwesomeIcon icon={['fab', menus[name].icon]} />           

            <span className={'ml-10'}>{ !this.state.isOpened ? menus[name].name : '' }</span>
        </div>
      );
    case 'itemThree':
      return (
        <div>
             <FontAwesomeIcon icon={['fab', menus[name].icon]} />           
            <span className={'ml-10'}>{ !this.state.isOpened ? menus[name].name : '' }</span>

        </div>
      );
    }
  }
}