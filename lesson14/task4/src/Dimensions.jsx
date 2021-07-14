import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimension, setDimension] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });

    const onResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimension({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const { width, height } = dimension;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
