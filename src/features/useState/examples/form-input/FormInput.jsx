import { useState } from 'react';
import Input from '@/shared/components/input/Input.jsx';

export default function FormInput() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input
        id="form-input-example"
        label="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>You typed: {value}</p>
    </div>
  );
}
