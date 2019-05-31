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
          <img className="flag" src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/ee737f621fec479e4d11b83d1187465b.png"}></img>
        </div>
        <div className="secondBar">
          <img className="swoosh" src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/061ab828bf837d51f854cd9c1a6558da.png"}></img>
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

window.Navbar = Navbar;
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
