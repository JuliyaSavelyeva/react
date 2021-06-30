import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textContent: 'Off',
    }
  }

  toggler = () => {
    this.state.textContent === 'Off'
    ? this.setState({
          textContent: 'On',
      })
    : this.setState({
      textContent: 'Off',
  })
    
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