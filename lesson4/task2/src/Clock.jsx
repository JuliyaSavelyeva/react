import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const offsetSummer = offset + 1
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offsetSummer + utcOffset));
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTimeWithOffset(props.offset),
    };

    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(props.offset),
      });
      }, 1000);
  }

  render() {
    return(
      <div className="clock">
        <div className="clock__location">
          {this.props.location}
        </div>
        <div className="clock__time">
          {this.state.time.toLocaleTimeString('en-US')}
        </div>
      </div>
    );
  }
}

export default Clock;