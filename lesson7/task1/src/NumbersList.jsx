import React from 'react';

const NumberList = ({ numbers }) => (
  <ul>
    Login
    {numbers.map(num => (
      <li key={num}>{num}</li>
    ))}
  </ul>
);

export default NumberList;
