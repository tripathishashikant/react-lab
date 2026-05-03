import { useState } from 'react';
import Button from '@/shared/components/button/Button';
import '@/features/use-state/examples/counter/counter.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="counter">
      <p style={{ marginBottom: '1rem' }}>Count: {count}</p>
      <section className="counter__actions">
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleDecrement} variant="secondary">-</Button>
        <Button
          onClick={handleReset}
          variant="secondary"
          disabled={count === 0}
        >
          Reset
        </Button>
      </section>
    </div>
  );
}
