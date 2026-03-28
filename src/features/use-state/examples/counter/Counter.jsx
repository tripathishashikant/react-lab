import { useState } from 'react';
import Button from '@/shared/components/button/Button';

import '@/features/use-state/examples/counter/counter.scss'

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = function () {
    setCount(count + 1)
  }

  const handleDecrement = function () {
    setCount(count - 1)
  }

  const handleReset = function () {
    setCount(0)
  }

  return (
    <div className="counter__container">
      <h2 className="counter__title">Count: {count}</h2>
      <section className="counter__actions">
        <Button className="counter__button" onClick={handleIncrement}>+</Button>
        <Button className="counter__button" onClick={handleDecrement} variant="secondary">-</Button>
        <Button
          className="counter__button"
          onClick={handleReset}
          variant="secondary"
          disabled={count === 0}
        >Reset</Button>
      </section>
    </div>
  );
}
