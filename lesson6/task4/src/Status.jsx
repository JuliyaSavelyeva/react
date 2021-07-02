import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {
  state = {
    isOnline: false,
  };

  handlerReconnect = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline onReconnect={this.handlerReconnect} />}
      </div>
    );
  }
}

export default Status;
