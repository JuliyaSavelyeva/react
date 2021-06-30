import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textContent: 'Off',
    }
  }
  toggler(e) {
    if(e.target.textContent === 'Off') {
      this.setState({
        textContent: 'On',
      })
    }
    if(e.target.textContent === 'On') {
      this.setState({
        textContent: 'Off',
      })
    }
  }
  
  render() {
    return (
      <button 
      className="toggler" 
      onClick={e => this.toggler(e)}>
        {this.state.textContent}
    </button>
    );
  }
}

export default Toggler;
