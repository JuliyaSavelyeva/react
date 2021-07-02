import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  state = {
    isOnline: false,
  }
  
  handlerReconnect = () => {
    this.setState({
      isOnline: true,
    })
  }

  render() {
    return (
      <div className="status">
        {
        (this.state.isOnline)
        ? <Online />
        : <Offline onReconnect={this.handlerReconnect}/>
        }
      </div>
    );
  }
}

export default Status;

