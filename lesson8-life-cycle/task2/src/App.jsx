import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button className="btn" onClick={this.toggle}>
          Toggle
        </button>
        {this.state.visible && (
          <>
            <Clock location="New York" offset={-5} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="London" offset={0} />
          </>
        )}
      </>
    );
  }
}

export default App;
