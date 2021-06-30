import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  // const offsetSummer = offset + 1;
  console.log(offset);
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTimeWithOffset(props.offset + 1),
    };

    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(props.offset + 1),
      });
      }, 1000);
      console
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

// const formatDate = date => moment(date).format('h:mm:ss A');

var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
console.log(date.toLocaleTimeString());
