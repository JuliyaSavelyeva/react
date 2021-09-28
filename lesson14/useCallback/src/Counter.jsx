import React, { useState, useCallback } from 'react';

const add = (fst, snd) => fst + snd;

const MyComponent = () => {
  const [firstVal, setFirstVal] = useState(10);
  const increment = () => setFirstVal(num => num + 1);

  const [secondVal, setSecondVal] = useState(20);
  const decrease = () => setSecondVal(num => num - 1);

  const [extraVal, setExtraVal] = useState(10000);
  const modifyExtralVal = () => setExtraVal(num => num - 1);

  const additionResult = useCallback(add(firstVal, secondVal), [firstVal, secondVal]);

  return (
    <>
      <section className="box">
        <span>{firstVal}</span>
        <button onClick={increment}>+ 1</button>
      </section>
      <section className="box">
        <span>{secondVal}</span>
        <button onClick={decrease}>- 1</button>
      </section>
      <div className="box">Result: {additionResult}</div>
      <section className="box extra">
        <span>{extraVal}</span>
        <button onClick={modifyExtralVal}>- 1</button>
      </section>
    </>
  );
};

export default MyComponent;
