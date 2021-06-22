import { useState } from 'react';

export function Button() {
  const [counter, setCounter] = useState(0);

  return (
    <button type="button" onClick={() => setCounter(counter + 1)}>{counter}</button>
  );
}
