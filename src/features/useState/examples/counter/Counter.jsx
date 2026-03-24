import { useState } from 'react';
import Button from '@/shared/components/button/Button';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)} variant="secondary">Decrement</Button>
    </div>
  );
}
