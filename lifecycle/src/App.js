import { useState, useEffect } from 'react';
import Counter from './components/Counter';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <Counter />}
      <br />
      <hr />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Counter' : 'Show Counter'}
      </button>
    </div>
  );
}

export default App;
