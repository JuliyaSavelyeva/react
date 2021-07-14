import React, { useEffect, useState } from 'react';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [date, setDate] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getTimeWithOffset(offset));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
