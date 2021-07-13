import React, { useState } from 'react';
import Dimensions from './Dimensions.jsx';

const Demo = () => {
  const [isVisible, setIsvisible] = useState(true);
  return (
    <div>
      <div>
        <button className="btn" onClick={() => setIsvisible(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setIsvisible(false)}>
          Hide
        </button>
      </div>
      {isVisible && <Dimensions />}
    </div>
  );
};

export default Demo;
