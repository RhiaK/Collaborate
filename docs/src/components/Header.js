import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
var fontStyle = {
  fontFamily: 'Alegreya Sans SC'
};

class Header extends Component{
  render(){
    return (
      <header className="App-header" style={fontStyle}>
        <h1 className="App-title">Collaborate</h1>
      </header>
    )
  }
}

export default Header
