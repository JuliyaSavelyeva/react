import React from 'react';

// eslint-disable-next-line react/prop-types
const Offline = ({ onReconnect }) => (
  <>
    <span className="status__text">Offline</span>
    <button className="status__btn" onClick={onReconnect}>
      Reconnect
    </button>
  </>
);

export default Offline;
