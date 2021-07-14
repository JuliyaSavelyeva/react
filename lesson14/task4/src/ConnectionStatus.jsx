import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const onOnlineSatus = () => {
      setStatus(true);
    };

    const onOfflineSatus = () => {
      setStatus(false);
    };

    window.addEventListener('online', onOnlineSatus);
    window.addEventListener('offline', onOfflineSatus);

    return () => {
      window.removeEventListener('online', onOnlineSatus);
      window.removeEventListener('offline', onOfflineSatus);
    };
  }, [status]);

  return status ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
