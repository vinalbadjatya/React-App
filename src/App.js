import React from 'react';
import './App.css';
import EventComponent from './event'; 
// import { Button } from 'react-bootstrap';

function App() {
  const initialCount = 0;

  const [count, setCount] = React.useState(initialCount);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const getBackgroundColor = () => {
    if (count >= 6 && count <= 10) {
      return 'red';
    } else if (count >= 2 && count <= 5) {
      return 'green';
    } else {
      return 'white';
    }
  };

  return (
    <div>
      <div></div>
      {/* <Button variant='DANGER'>DSF</Button> */}
      <div style={{ backgroundColor: getBackgroundColor(), padding: '20px', margin: '20px' }}>
        <h1>Count_Numbers: {count}</h1>
      </div>
      <button
        className="btn btn-outline-primary"
        style={{ marginRight: '10px', backgroundColor: 'blue'}}
        onClick={handleIncrement}
        disabled={count === 10}
      >
        Increment +
      </button>
      <button
        style={{ marginRight: '10px', backgroundColor: 'blue' }}
        onClick={handleDecrement}
        disabled={count === 0}
      >
        Decrement -
      </button>
      <button
        className="btn btn-secondary"
        style={{ backgroundColor: 'red' }}
        onClick={handleReset}
      >
        Reset
      </button>

      <EventComponent />
    </div>
  );
}

export default App;
