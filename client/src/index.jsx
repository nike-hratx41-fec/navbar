import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import nikeSwoosh from './swoosh.png';
import searchIcon from './searchIcon.png';
import usFlag from './flag.png';
import cart from './cart.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
    }
  }

  componentDidMount() {
    window.addEventListener(
      "onCartClick",
      event => {
        alert(event.detail);
      },
      false
    );
  }

  handleEnter(event) {
    if(event.target.className === 'storeLink0') {
      document.querySelector('.release-dropdown').setAttribute('style', 'display: flex;');
    }
  }

  handleMainLeave(){
    document.querySelector('.release-dropdown').setAttribute('style', 'display: none;');
  }

  handleStay() {
    document.querySelector('.storeLink0').setAttribute('style', 'padding-top: 24px; padding-bottom: 24px; border-top: 1.5px solid white; border-bottom: 1.5px solid black;');
    document.querySelector('.release-dropdown').setAttribute('style', 'display: flex;');
  }

  handleLeave() {
    document.querySelector('.storeLink0').setAttribute('style', 'padding-top: 24px; padding-bottom: 24px; boarder: none;');
    document.querySelector('.release-dropdown').setAttribute('style', 'display: none;');
  }

  //in future if adding axios requests you have to use your amazon aws url!!!

  //adding two class names to element breaks query selector!!!!!!!!!!!!!

  render () {
    return (
      <div id="mainContain">
        <div className="firstBar">
          <div className={["brand", "cursorChange"].join(' ')}>NikePlus</div>
          <div className={["brand", "cursorChange"].join(' ')}>Jordan</div>
          <div className={["brand", "cursorChange"].join(' ')}>Hurley</div>
          <div className={["brand1", "cursorChange"].join(' ')}>Converse</div>
          <div className={["userLink", "cursorChange"].join(' ')}>Join/Log In To NikePlus Account</div>
          <div className={["userLink", "cursorChange"].join(' ')}>Help</div>
          <img className={["cart", "cursorChange"].join(' ')} src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/186266c7bbf10d0a2a25bb3e1fd444f5.png"}></img>
          <img className={["flag", "cursorChange"].join(' ')} src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/ee737f621fec479e4d11b83d1187465b.png"}></img>
        </div>
        <div className="secondBar">
          <img className="swoosh" src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/061ab828bf837d51f854cd9c1a6558da.png"}></img>
          <div className="storeLink0" onMouseEnter={this.handleEnter} onMouseLeave={this.handleMainLeave}>NEW RELEASES</div>
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
        <div className="release-dropdown" onMouseEnter={this.handleStay} onMouseLeave={this.handleLeave}>
          <div className="release-holder">
            <div className="dropContainMain0">
              <div className="cursorChange">SNKRS LAUNCH CALENDAR</div>
              <div className="cursorChange">JUST IN</div>
              <div className="cursorChange">NEW TO SALE</div>
              <div className="cursorChange">SHOP ALL NEW ARRIVALS</div>
            </div>
            <div className="dropContainMain1">
              <div className="cursorChange">NEW FOR MEN</div>
              <ul className="dropList">
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Equipment</li>
                <li>Shop All New</li>
              </ul>
            </div>
            <div className="dropContainMain2">
              <div className="cursorChange">NEW FOR WOMEN</div>
              <ul className="dropList">
                <li>Shoes</li>
                <li>Clothing</li>
                <li>Equipment</li>
                <li>Shop All New</li>
              </ul>
            </div>
            <div className="dropContainMain3">
              <div className="cursorChange">NEW FOR KIDS</div>
              <ul className="dropList">
                <li>Boys Shoes</li>
                <li>Boys Clothing</li>
                <li>Girls Shoes</li>
                <li>Girls Clothing</li>
                <li>Shop All New</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      //{["dropList", "cursorChange"].join(' ')} for multiple class names
    )
  }
}

window.Navbar = Navbar;
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
