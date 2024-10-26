import { useState, useEffect } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('John Doe');

  useEffect(() => {
    console.log('Component did mount');

    const interval = setInterval(() => {
        setNumber((n) => n + 1);
    }, 1000);


    return () => {
        console.log('Component will unmount');
        clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    console.log('Number did update');
  }, [number]);
  useEffect(() => {
    console.log('Name did update');
  }, [name]);  
  return (
    <div>
        <div className="Counter">
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        <h1>{name}</h1>
        <button onClick={() => setName('Jane Doe')}>Change Name</button>
    </div>
    </div>
  );
}


export default Counter;