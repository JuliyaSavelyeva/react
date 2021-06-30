import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const offsetNew = offset + 1
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offsetNew + utcOffset));
}

const formatDate = date => moment(date).format('h:mm:ss A');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.offset,
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
          {formatDate(this.state.time)}
        </div>
      </div>
    );
  }
}

export default Clock;