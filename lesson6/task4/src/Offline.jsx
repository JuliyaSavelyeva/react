import React from 'react';

const Offline = ({onReconnect}) => {
  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={onReconnect}>Reconnect</button>
    </>
  );
  
}

export default Offline;