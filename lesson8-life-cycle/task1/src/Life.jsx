import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log(this.props);
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, NextState) {
    console.log(this.props);
    console.log(nextProps, NextState);
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return nextProps.number % 2;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    console.log(prevProps, prevState);
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log(this.props);
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;
