import React from 'react';
import moment from "moment";


const Greeting = props => {
  const formatDate = date => moment(date).format();
  const timeString = formatDate(props.birthDate);
  const data = `${timeString.substr(0, 4)}${timeString.substr(5, 2)}${timeString.substr(8, 2)}`;
  const time = moment(data, "YYYYMMDD").fromNow();

  const getTime = time => {
    if (time.includes('years')) {
       return Number.parseInt(time);
    }
    if (time.includes('year')) {
      return 1;
   }
   return 0;
 }
  return (
    <div className="greeting">
    My name is {props.firstName} {props.lastName}. I'm {getTime(time)} years old
    </div>
  );
}

export default Greeting;