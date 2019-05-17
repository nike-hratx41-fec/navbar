import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
        <div>its rendering</div>
      </div>
    )
  }
}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
