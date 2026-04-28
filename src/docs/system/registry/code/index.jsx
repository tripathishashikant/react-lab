import Code from '@/shared/components/code/Code';

export const codeRegistry = {
  id: 'code',
  title: 'Code',
  description: 'A component for displaying syntax-highlighted code snippets with copy-to-clipboard functionality.',
  usage: 'Use the Code component to showcase code examples, documentation snippets, or terminal commands.',
  props: [
    {
      name: 'code',
      type: 'string',
      defaultValue: '""',
      description: 'The code content to display.'
    },
    {
      name: 'language',
      type: 'string',
      defaultValue: 'jsx',
      description: 'The programming language for syntax highlighting.'
    }
  ],
  examples: [
    {
      name: 'JSX Example',
      description: 'Displaying a React component.',
      render: () => <Code code={`function Welcome() {\n  return <h1>Hello, World!</h1>;\n}`} />,
      code: '<Code code={`function Welcome() {\n  return <h1>Hello, World!</h1>;\n}`} />'
    },
    {
      name: 'CSS Example',
      description: 'Displaying style rules.',
      render: () => <Code code={`.c-alert {\n  padding: 1rem;\n  border-radius: 4px;\n}`} language="css" />,
      code: '<Code code={`.c-alert {\n  padding: 1rem;\n  border-radius: 4px;\n}`} language="css" />'
    }
  ]
};
