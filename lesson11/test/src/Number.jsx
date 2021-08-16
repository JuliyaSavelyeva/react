import React from 'react';

class App extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(prevState => {
      this.setState(state => ({ counter: state.counter + this.props.step }));
      return {
        counter: prevState.counter + this.props.step,
      };
    });
  };

  render() {
    function myLanguages(results) {
      return Object.entries(results)
        .filter(el => el[1] >= 60)
        .sort((a, b) => b[1] - a[1])
        .map(el => el[0]);
    }

    console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
    console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }));
    console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 }));

    return (
      <div className="app">
        <div className="number" onClick={this.handleClick}>
          <span className="number__value">{this.state.counter}</span>
        </div>
      </div>
    );
  }
}

export default App;
