import React from 'react';
import moment from "moment";


const Greeting = props => {
  const formatDate = date => moment(date).format("YYYYMMDD");
  const date = formatDate(props.birthDate);
  const time = moment(date, "YYYYMMDD").fromNow();

  const getTime = time => {
    console.log(date);
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