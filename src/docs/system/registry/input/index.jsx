import Input from '@/shared/components/input/Input';

export const inputRegistry = {
  id: 'input',
  title: 'Input',
  description: 'A versatile text input component for forms.',
  usage: 'Use inputs to capture text data from users. Supports labels, error states, and standard HTML input attributes.',
  props: [
    {
      name: 'id',
      type: 'string',
      defaultValue: 'undefined',
      description: 'Unique identifier for the input. Required for accessibility (label association).'
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: 'undefined',
      description: 'Text label for the input.'
    },
    {
      name: 'error',
      type: 'string',
      defaultValue: 'undefined',
      description: 'Error message to display below the input.'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether the input should take up the full width of its container.'
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: '""',
      description: 'Additional CSS classes for custom styling.'
    }
  ],
  examples: [
    {
      name: 'Basic Input',
      description: 'Standard text input with a label.',
      render: () => <Input id="basic-input" label="Username" placeholder="Enter your username" />,
      code: '<Input id="basic-input" label="Username" placeholder="Enter your username" />'
    },
    {
      name: 'With Error',
      description: 'Input in an error state with a message.',
      render: () => <Input id="error-input" label="Email" defaultValue="invalid-email" error="Please enter a valid email address." />,
      code: '<Input id="error-input" label="Email" error="Please enter a valid email address." />'
    },
    {
      name: 'Password Type',
      description: 'Supports standard HTML input types via prop forwarding.',
      render: () => <Input id="password-input" label="Password" type="password" placeholder="Enter password" />,
      code: '<Input id="password-input" label="Password" type="password" />'
    }
  ]
};
