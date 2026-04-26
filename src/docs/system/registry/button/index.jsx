import Button from '@/shared/components/button/Button';

export const buttonRegistry = {
  id: 'button',
  title: 'Button',
  description: 'A versatile button component used for triggering actions or navigating through the application.',
  usage: `Buttons are used to initialize actions. They can be used in forms, dialogs, and more. Choose the variant that best matches the importance of the action.`,
  props: [
    {
      name: 'variant',
      type: 'primary | secondary | ghost | icon',
      defaultValue: 'primary',
      description: 'The visual style of the button.'
    },
    {
      name: 'size',
      type: 'sm | md | lg',
      defaultValue: 'md',
      description: 'The size of the button.'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether the button should take up the full width of its container.'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether the button is interactive.'
    }
  ],
  examples: [
    {
      name: 'Primary',
      description: 'The default button style for primary actions.',
      render: () => <Button>Primary Action</Button>,
      code: '<Button variant="primary">Primary Action</Button>'
    },
    {
      name: 'Secondary',
      description: 'Used for secondary actions that complement the primary action.',
      render: () => <Button variant="secondary">Secondary Action</Button>,
      code: '<Button variant="secondary">Secondary Action</Button>'
    },
    {
      name: 'Ghost',
      description: 'For subtle actions or when multiple buttons are present.',
      render: () => <Button variant="ghost">Ghost Action</Button>,
      code: '<Button variant="ghost">Ghost Action</Button>'
    },
    {
      name: 'Sizes',
      description: 'Buttons come in three sizes: small, medium (default), and large.',
      render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      ),
      code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
      `
    }
  ]
};
