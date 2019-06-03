import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchResult from "./SearchResults.jsx";
import "./main.css";
import axios from 'axios';
import nikeSwoosh from './swoosh.png';
import searchIcon from './searchIcon.png';
import usFlag from './flag.png';
import cart from './cart.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [],
      cart: []
    }

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      "onCartClick",
      event => {
        axios.get(`http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/nameIMG/${event.detail.sku}`)
          .then(response => {
            response.data.color = event.detail.color;
            response.data.size = event.detail.size;
            const joined = this.state.cart.concat(response.data);
            this.setState({ cart: joined });
          })
          .catch(err => console.log('err in client', err));
      },
      false
    );
  }

  handleEnter(event) {
    if(event.target.className === 'storeLink0') {
      document.querySelector('.release-dropdown').setAttribute('style', 'display: flex; position: sticky;');
    }
  }

  handleMainLeave(){
    document.querySelector('.release-dropdown').setAttribute('style', 'display: none;');
  }

  handleStay() {
    document.querySelector('.storeLink0').setAttribute('style', 'padding-top: 24px; padding-bottom: 24px; border-top: 1.5px solid white; border-bottom: 1.5px solid black;');
    document.querySelector('.release-dropdown').setAttribute('style', 'display: flex; position: sticky;');
  }

  handleLeave() {
    document.querySelector('.storeLink0').setAttribute('style', 'padding-top: 24px; padding-bottom: 24px; boarder: none;');
    document.querySelector('.release-dropdown').setAttribute('style', 'display: none;');
  }

  // 

  handleInput(event) {
    if (event.target.value.length > 2){
      axios.get(`http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/search/${event.target.value}`)
      .then(response => {
        this.setState({ searchResults: response.data });
        console.log(this.state.searchResults[0].productName)
      })
      .then(document.querySelector('#searchDrop').setAttribute('style', 'display: block;'))
      .catch(err => console.log('err in client', err));
    } else {
      document.querySelector('#searchDrop').setAttribute('style', 'display: none;');
    }
    //http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com
    
  }

  handleFocus(e) {
    console.log("leave")
    if (e.target.value.length > 2){
      document.querySelector('#searchDrop').setAttribute('style', 'display: block;');
    }
  }

  // handleFocus1() {
  //   console.log("leave")
  //   document.querySelector('#searchDrop').setAttribute('style', 'display: none;');
  // }

  handleCart() {
    const style = window.getComputedStyle(document.getElementsByClassName('cartContain')[0]);
    if (style.display == "flex") {
      document.querySelector('.cartContain').setAttribute('style', 'display: none;');
    } else {
      document.querySelector('.cartContain').setAttribute('style', 'display: flex;');
    }
  }

  handleItemClick(e) {
    alert(e);
    if(typeof e == "string") {
      alert(e);
    } else {
      const productClickEvent = new CustomEvent('productClickEvent', { detail: { sku: e.target.id } })
      alert(e.target.id)
      window.dispatchEvent(productClickEvent);
    }
  }

  handleSearchSelect(sku) {
    alert(sku);
  }

  //in future if adding axios requests you have to use your amazon aws url!!!

  //adding two class names to element breaks query selector!!!!!!!!!!!!!

  render () {
    window.onload = function(){
      document.onclick = function(e){
        console.log(e.target.id)
        // const cartStyle = window.getComputedStyle(document.getElementsByClassName('cartContain')[0])
         console.log(e.target.className);
        if (e.target.className !== "cartContain" && e.target.className && "itemContain" && e.target.className !== "cartImg" && e.target.className !== "cartItems" && e.target.className !== "cart cursorChange") {
          document.querySelector('.cartContain').setAttribute('style', 'display: none;');
        }
        if (e.target.className !== "searchRes" && e.target.className && "searchPreview" && e.target.className !== "searchPrvTitle" && e.target.className !== "rowContain" && e.target.className !== "searchRow" && e.target.className !== "resDisplay" && e.target.className !== "resRow" && e.target.className !== "searchItem" && e.target.className !== "searchImg" && e.target.className !== "shoeStats" && e.target.className !== "shoeStat" && e.target.className !== "shoeStat1" && e.target.className !== "firstText" && e.target.className !== "secondText") {
          document.querySelector('#searchDrop').setAttribute('style', 'display: none;');
        }
      };
   };
    return (
      <div id="mainContain">
        <div className="firstBar">
          <div className={["brand", "cursorChange"].join(' ')}>NikePlus</div>
          <div className={["brand", "cursorChange"].join(' ')}>Jordan</div>
          <div className={["brand", "cursorChange"].join(' ')}>Hurley</div>
          <div className={["brand1", "cursorChange"].join(' ')}>Converse</div>
          <div className={["userLink", "cursorChange"].join(' ')}>Join/Log In To NikePlus Account</div>
          <div className={["userLink", "cursorChange"].join(' ')}>Help</div>
          <img className={["cart", "cursorChange"].join(' ')} src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/186266c7bbf10d0a2a25bb3e1fd444f5.png"} onClick={this.handleCart}></img>
          <div className="cartContain">
            <div>Your Cart</div>
            {this.state.cart.length == 0 &&
              <div>Is Empty!?</div>
            }
            {this.state.cart.length > 0 &&
              <div>Has {this.state.cart.length} Items</div>
            }
            {this.state.cart.length > 0 &&
              this.state.cart.map((listItem) => 
                <div className="itemContain" id={listItem.sku} onClick={this.handleItemClick}>
                  <img className="cartImg" id={listItem.sku} onClick={this.handleItemClick} src={listItem.images[0]}></img>
                  <div className="cartItems" id={listItem.sku}>
                    <div id={listItem.sku} onClick={this.handleItemClick}>{listItem.productName}</div>
                    <div id={listItem.sku} onClick={this.handleItemClick}>{listItem.color}</div>
                    <div id={listItem.sku} onClick={this.handleItemClick}>{listItem.size} M</div>
                    <div id={listItem.sku} onClick={this.handleItemClick}>${listItem.price}</div>
                  </div>
                </div>
              )
            }
          </div>
          <img className={["flag", "cursorChange"].join(' ')} src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/ee737f621fec479e4d11b83d1187465b.png"}></img>
        </div>
        <div className="secondBar">
          <img className="swoosh" onClick={this.handleClick} src={"http://ec2-18-221-123-158.us-east-2.compute.amazonaws.com/061ab828bf837d51f854cd9c1a6558da.png"}></img>
          <div className="storeLink0" onMouseEnter={this.handleEnter} onMouseLeave={this.handleMainLeave}>NEW RELEASES</div>
          <div className="storeLink1">MEN</div>
          <div className="storeLink2">WOMEN</div>
          <div className="storeLink3">KIDS</div>
          <div className="storeLink4">CUSTOMIZE</div>
          <div className="searchDiv">
            <form id="search">
              <input className="searchInput" type="text" size="45" placeholder="Search" onChange={this.handleInput} onBlur={this.handleFocus1} onFocus={this.handleFocus}></input>
            </form>
          </div>
          <div className="filler"></div>
        </div>
        <div id="searchDrop">
          <div className="searchPreview">
            <div className="searchPrvTitle">TOP SUGGESTIONS
              {this.state.searchResults.length > 0 &&
                <div className="rowContain">
                  <div className="searchRow">
                      <SearchResult searchResult={this.state.searchResults[0]}/>
                      <SearchResult searchResult={this.state.searchResults[1]}/>
                    </div>
                    <div className="searchRow">
                      <SearchResult searchResult={this.state.searchResults[2]}/>
                      <SearchResult searchResult={this.state.searchResults[3]}/>
                    </div>
                    <div className="searchRow">
                      <SearchResult searchResult={this.state.searchResults[4]}/>
                      <SearchResult searchResult={this.state.searchResults[5]}/>
                    </div>
                </div>
              }
            </div>
            {/* <div className="searchRes">
                {this.state.searchResults.length > 0 &&
                  <div className="resDisplay">
                    <div className="resRow">
                      <div className="firstText">{document.querySelector('.searchInput').value}</div>
                      <div className="secondText">{this.state.searchResults[0].productName.substr(document.querySelector('.searchInput').value.length+1)}</div>
                    </div>
                    <div className="resRow">
                      <div className="firstText">{document.querySelector('.searchInput').value}</div>
                      <div className="secondText">{this.state.searchResults[1].productName.substr(document.querySelector('.searchInput').value.length+1)}</div>
                    </div>
                    <div className="resRow">
                      <div className="firstText">{document.querySelector('.searchInput').value}</div>
                      <div className="secondText">{this.state.searchResults[2].productName.substr(document.querySelector('.searchInput').value.length+1)}</div>
                    </div>
                    <div className="resRow">
                      <div className="firstText">{document.querySelector('.searchInput').value}</div>
                      <div className="secondText">{this.state.searchResults[3].productName.substr(document.querySelector('.searchInput').value.length+1)}</div>
                    </div>
                  </div>
                }
            </div> */}
          </div>
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
