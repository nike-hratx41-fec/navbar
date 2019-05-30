import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import nikeSwoosh from './swoosh.png';
import searchIcon from './searchIcon.png';
import usFlag from './flag.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    }
  }

  render () {
    return (
      <div>
        <div className="firstBar">
          <div className="brand">NikePlus</div>
          <div className="brand">Jordan</div>
          <div className="brand">Hurley</div>
          <div className="brand1">Converse</div>
          <div className="userLink">Join/Log In To NikePlus</div>
          <div className="userLink">Help</div>
          <div className="userLink">Crt</div>
          <img className="flag" src={`${usFlag}`}></img>
        </div>
        <div className="secondBar">
          <img className="swoosh" src={`${nikeSwoosh}`}></img>
          <div className="storeLink0">NEW RELEASES</div>
          <div className="storeLink1">MEN</div>
          <div className="storeLink2">WOMEN</div>
          <div className="storeLink3">KIDS</div>
          <div className="storeLink4">CUSTOMIZE</div>
          <div className="searchDiv">
            <form method="get" action="/search" id="search">
              <input name="q" type="text" size="45" placeholder="Search"></input>
            </form>
          </div>
          <div className="filler"></div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
