import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: props.isOnline,
    };
  }

  handlerReconnect = () => {
    this.setState({
      isOnline: !this.state.isOnline,
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
