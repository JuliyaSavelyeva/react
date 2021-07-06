import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: true,
  };

  componentDidMount() {
    window.addEventListener('online', this.onOnlineSatus);
    window.addEventListener('offline', this.onOfflineSatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnlineSatus);
    window.removeEventListener('offline', this.onOfflineSatus);
  }

  onOnlineSatus = () => {
    this.setState({
      status: true,
    });
  };

  onOfflineSatus = () => {
    this.setState({
      status: false,
    });
  };

  render() {
    return this.state.status ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
