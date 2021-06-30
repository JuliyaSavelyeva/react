import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textContent: 'Off',
    }
  }

  toggler = () => {
    if(this.state.textContent === 'Off') {
      console.log(this.state.textContent)
      this.setState({
        textContent: 'On',
      })
    }
    if(this.state.textContent === 'On') {
      console.log(this.state.textContent)
      this.setState({
        textContent: 'Off',
      })
    }
  }

  render() {
    return (
      <button 
      className="toggler" 
      onClick={this.toggler}>
      {this.state.textContent}
    </button>
    );
  }
}

export default Toggler;
