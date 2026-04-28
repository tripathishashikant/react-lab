import Logo from '@/shared/components/logo/Logo';

export const logoRegistry = {
  id: 'logo',
  title: 'Logo',
  description: 'The primary branding component for the ReactLab application.',
  usage: 'Use the Logo component in headers, footers, or landing pages to maintain consistent branding.',
  props: [],
  examples: [
    {
      name: 'Standard Logo',
      description: 'The default application logo.',
      render: () => <Logo />,
      code: '<Logo />'
    }
  ]
};
