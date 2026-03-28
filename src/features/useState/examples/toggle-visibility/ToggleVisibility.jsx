import { useState } from 'react';
import Button from '@/shared/components/button/Button.jsx';

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <Button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </Button>
      {isVisible && <p style={{ marginTop: '1rem' }}>Now you see me!</p>}
    </div>
  );
}
