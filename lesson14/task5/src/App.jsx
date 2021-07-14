import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [visible, setVisible] = useState(true);

  const onToggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className="btn" onClick={onToggle}>
        Toggle
      </button>
      {visible && (
        <>
          <Clock location="New York" offset={-5} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="London" offset={0} />
        </>
      )}
    </>
  );
};

export default App;
